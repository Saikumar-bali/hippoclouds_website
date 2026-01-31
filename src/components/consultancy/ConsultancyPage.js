
import React from 'react';
import { Box, Typography, Container, Paper, Grid, CssBaseline, GlobalStyles, Button, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import {
  WorkOutline,
  Cloud,
  AttachMoney,
  People,
  RocketLaunch,
  Send
} from '@mui/icons-material';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '60vh',
  color: '#fff',
  padding: theme.spacing(4),
  backgroundImage: `url(${process.env.PUBLIC_URL}/banner-sample.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    height: '50vh',
  },
}));


export default function ConsultancyPage() {

  const colors = {
    background: '#f7f9fb',
    headerBg: '#1f2937',
    white: '#ffffff',
    gray: {
      800: '#1f2937',
      700: '#374151',
      600: '#4b5563',
      500: '#6b7280',
      200: '#e5e7eb',
      100: '#f3f4f6',
      50: '#f9fafb'
    },
    indigo: {
      600: '#4f46e5'
    },
    blue: {
      600: '#2563eb'
    },
    green: {
      600: '#059669'
    },
    orange: {
      600: '#ea580c'
    },
    red: {
      600: '#dc2626'
    },
    checkmark: '#10b981'
  };

  // Feature data with images
  const expertiseSections = [
    {
      title: "Business Strategy & Planning",
      description: "We help you define clear goals, identify market opportunities, and build strong business roadmaps.",
      icon: <WorkOutline sx={{ fontSize: 24 }} />,
      borderColor: colors.indigo[600],
      iconColor: colors.indigo[600],
      image: process.env.PUBLIC_URL + '/Consultancy/1.jpg',
      services: [
        "Market research & competitor analysis",
        "Strategic planning & execution",
        "Business model development",
        "Risk assessment & mitigation"
      ]
    },
    {
      title: "IT & Technology Consulting",
      description: "Stay ahead in a rapidly changing digital world.",
      icon: <Cloud sx={{ fontSize: 24 }} />,
      borderColor: colors.blue[600],
      iconColor: colors.blue[600],
      image: process.env.PUBLIC_URL + '/Consultancy/2.jpg',
      services: [
        "Digital transformation strategy",
        "Cloud adoption & modernization",
        "Software development guidance",
        "Automation & workflow optimization"
      ]
    },
    {
      title: "Financial & Investment Advisory",
      description: "Make smarter financial decisions with confidence.",
      icon: <AttachMoney sx={{ fontSize: 24 }} />,
      borderColor: colors.green[600],
      iconColor: colors.green[600],
      image: process.env.PUBLIC_URL + '/Consultancy/3.jpg',
      services: [
        "Financial planning & budgeting",
        "Investment and portfolio guidance",
        "Cost optimization strategies",
        "Performance tracking & reporting"
      ]
    },
    {
      title: "HR & Talent Management Consulting",
      smallTitle: true,
      description: "Build and manage an empowered, high-performance workforce.",
      icon: <People sx={{ fontSize: 24 }} />,
      borderColor: colors.orange[600],
      iconColor: colors.orange[600],
      image: process.env.PUBLIC_URL + '/Consultancy/4.jpg',
      services: [
        "Talent acquisition & workforce planning",
        "Performance & policy development",
        "HR digitalization solutions",
        "Employee training & development"
      ]
    },
    {
      title: "Startup & Entrepreneurship Consulting",
      smallTitle: true,
      description: "Helping innovators turn ideas into successful ventures.",
      icon: <RocketLaunch sx={{ fontSize: 24 }} />,
      borderColor: colors.red[600],
      iconColor: colors.red[600],
      image: process.env.PUBLIC_URL + '/Consultancy/5.jpg',
      services: [
        "Startup mentoring & business validation",
        "Funding & investor pitch guidance",
        "Product-market fit strategy",
        "Legal & compliance advisory"
      ]
    }
  ];

  // Feature Block Component with exact image dimensions and alignment
  const FeatureBlock = ({ title, description, icon, borderColor, iconColor, image, services,smallTitle  }) => (
    <Paper
      sx={{
        p: 4,
        bgcolor: colors.white,
        borderRadius: '0.75rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        borderTop: `4px solid ${borderColor}`,
        height: '100%'
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Image Column - 3/12 on desktop with exact height constraints */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              width: '100%',
              height: { xs: '180px', md: '220px' }, // Exact height matching original
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Matches original object-cover
                display: 'block'
              }}
            />
          </Box>
        </Grid>

        {/* Content Columns - 9/12 on desktop, split into 4+5 with exact alignment */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={4} alignItems="flex-start">
            {/* Middle Column: Title and Description - 4/9 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                <Box sx={{ color: iconColor, mr: 1, display: 'flex', mt: 0.25 }}>
                  {icon}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '0.9rem', lg: '1.25rem', xl: '1.65rem' },
                    fontWeight: 600,
                    color: colors.gray[800],
                    lineHeight: 1.3,
                    maxWidth: '35ch'
                  }}
                >
                  {title}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.05rem', md: '0.95rem', lg: '1.05rem', xl: '1.3rem' },
                  color: colors.gray[600],
                  mt: 1.5,
                  lineHeight: 1.6,
                  maxWidth: '35ch'
                }}
              >
                {description}
              </Typography>
            </Grid>

            {/* Right Column: Services List - 5/9 with exact border alignment */}
            <Grid item xs={12} md={5}>
              <Box sx={{
                borderLeft: { md: `1px solid ${colors.gray[200]}` },
                pl: { md: 4 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: colors.gray[700],
                    mb: 1.5
                  }}
                >
                  {title.includes('Startup') ? 'Support Includes:' :
                    title.includes('IT') ? 'We Provide:' :
                      title.includes('Financial') ? 'Includes:' :
                        title.includes('HR') ? 'Services:' : 'Services Include:'}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  {services.map((service, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        position: 'relative',
                        pl: 2 // Matches original padding-left: 1.5rem
                      }}
                    >
                      <Box
                        sx={{
                          color: colors.checkmark,
                          fontWeight: 'bold',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          fontSize: '1rem',
                          lineHeight: 1.5
                        }}
                      >
                        ✓
                      </Box>
                      <Typography
                        sx={{
                          color: colors.gray[600],
                          fontSize: '1rem',
                          lineHeight: 1.5,
                          mb: 0.5 // Matches original margin-bottom: 0.5rem
                        }}
                      >
                        {service}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Consultancy Services
            </Typography>
            <Typography variant="h5" component="p">
              Expert guidance to navigate complex challenges and achieve your business objectives.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Box sx={{
        bgcolor: colors.background,
        minHeight: '100vh',
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'
      }}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            '@import': 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
            'body': {
              margin: 0,
              padding: 0,
              fontFamily: '"Inter", sans-serif'
            }
          }}
        />


        <Box sx={{
          bgcolor: colors.background,
          minHeight: '100vh',
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'
        }}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              '@import': 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
              'body': {
                margin: 0,
                padding: 0,
                fontFamily: '"Inter", sans-serif'
              }
            }}
          />

          <Box sx={{
            bgcolor: colors.background,
            minHeight: '100vh',
            fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'
          }}>
            <CssBaseline />
            <GlobalStyles
              styles={{
                '@import': 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
                'body': {
                  margin: 0,
                  padding: 0,
                  fontFamily: '"Inter", sans-serif'
                }
              }}
            />

            {/* Main Content */}
            <Box component="main" sx={{ py: 8 }}>
              <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
                {/* Title and Introduction */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2.25rem', sm: '3rem' },
                      fontWeight: 800,
                      color: colors.gray[800],
                      mb: 2,
                      lineHeight: 1.1
                    }}
                  >
                    Our Core Expertise
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '1.25rem',
                      color: colors.gray[600],
                      maxWidth: '3xl',
                      mx: 'auto',
                      lineHeight: 1.6
                    }}
                  >
                    We combine deep industry knowledge with practical application to drive measurable results across every critical area of your business.
                  </Typography>
                </Box>

                {/* Expertise Feature Blocks with exact 3-column layout */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {expertiseSections.map((section, index) => (
                    <FeatureBlock key={index} {...section} />
                  ))}

                  {/* Contact Card */}
                  <Paper
                    sx={{
                      p: 5,
                      bgcolor: colors.gray[800],
                      color: colors.white,
                      borderRadius: '0.75rem',
                      textAlign: 'center',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Send sx={{ fontSize: 40, mb: 2, color: colors.white }} />
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: '1.875rem',
                        fontWeight: 700,
                        mb: 1.5,
                        color: colors.white
                      }}
                    >
                      Ready to Start?
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        opacity: 0.9,
                        maxWidth: 'md',
                        lineHeight: 1.6,
                        fontSize: '1rem'
                      }}
                    >
                      Contact us today to discuss how our expertise can accelerate your growth and achieve your goals.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: colors.white,
                        color: colors.gray[800],
                        fontWeight: 600,
                        fontSize: '1.125rem',
                        py: 1.5,
                        px: 4,
                        borderRadius: '9999px',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        '&:hover': {
                          bgcolor: colors.gray[200],
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        },
                        transition: 'all 0.15s ease',
                        textTransform: 'none'
                      }}
                    >
                      Schedule a Consultation
                    </Button>
                  </Paper>
                </Box>
              </Container>
            </Box>

          </Box>

        </Box>
      </Box>
    </Box>
  );
}
