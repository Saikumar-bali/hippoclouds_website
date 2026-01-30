import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery,
  CssBaseline,
  GlobalStyles
} from '@mui/material';
import {
  NavigateBefore,
  NavigateNext,
  Description,
  Hub,
  ShowChart,
  LocalOffer,
  AccessTime,
  Person,
  Email,
  Bolt
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '60vh',
  color: '#fff',
  padding: theme.spacing(4),
  backgroundImage: 'url(/banner-sample.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    height: '50vh',
  },
}));

const FlowTechPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentIndex, setCurrentIndex] = useState(0);

  // Exact colors from your original design
  const colors = {
    textPrimary: '#1d2129',
    textSecondary: '#6e7687',
    pinkLight: '#fce7f3',
    pinkDark: '#e91e63',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    }
  };

  // Carousel data
  const screenshotUrls = [
    "/enquery%20management/1.jpg",
    "/enquery%20management/2.jpg",
    "/enquery%20management/3.jpg",
    "/enquery%20management/4.jpg",
  ];
  // Feature data
  const projectManagementCards = [
    {
      title: "Tasks",
      description: "Break work into bite-size pieces with clear owners and due dates.",
      icon: <Description sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "Projects",
      description: "Organize tasks and tackle work together in a shared hub.",
      icon: <Hub sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "Project views",
      description: "Organize your work as a list, calendar, timeline, Gantt chart, or Kanban board.",
      icon: <ShowChart sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "Custom fields",
      description: "Add labels to tasks so you can sort, filter, and automatically report on work.",
      icon: <LocalOffer sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "Status updates",
      description: "Craft project updates in minutes with time-saving automations.",
      icon: <AccessTime sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "Time tracking",
      description: "Measure how much time you're spending on work, so you can correctly budget the time you need.",
      icon: <AccessTime sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "My tasks",
      description: "See all your assignments in one place, so you can prioritize what's next.",
      icon: <Person sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "Inbox",
      description: "Get automatic updates about work that matters to you, and filter out the rest.",
      icon: <Email sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
  ];

  const resourceManagementCards = [
    {
      title: "Capacity planning",
      description: "Create long-term staffing plans that align your resourcing decisions to goals and maximize impact.",
      icon: <Description sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "Workload",
      description: "See how busy your team is, so you can rebalance work quickly.",
      icon: <ShowChart sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "Time tracking",
      description: "Measure how much time you're spending on work, so you can correctly budget the time you need.",
      icon: <AccessTime sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
  ];

  const workflowsAndAutomationCards = [
    {
      title: "Forms",
      description: "Standardize work requests so your team has the information they need from the start.",
      icon: <Description sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "Rules",
      description: "Automate routine tasks to get more done, faster.",
      icon: <Bolt sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "Bundles",
      description: "Easily create, apply, and update processes across projects in one place.",
      icon: <Hub sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
    {
      title: "Templates",
      description: "Standardize your team's best practices with ready-made guides for projects and tasks.",
      icon: <Description sx={{ color: colors.pinkDark, fontSize: 24 }} />
    },
  ];

  // Carousel functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshotUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshotUrls.length) % screenshotUrls.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Feature Card Component
  const FeatureCard = ({ title, description, icon }) => (
    <Card
      sx={{
        p: { xs: 3, md: 4 },
        bgcolor: 'white',
        borderRadius: '0.75rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      }}
    >
      <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column', '&:last-child': { pb: 0 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: colors.pinkLight,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}
          >
            {icon}
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.0rem', md: '0.85rem', lg: '1.25rem', xl: '1.65rem' },
              fontWeight: 700,
              color: colors.textPrimary,
              lineHeight: 1.3
            }}
          >
            {title}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.9rem', sm: '0.95rem', md: '0.85rem', lg: '1rem', xl: '1.1rem' },
            mt: 2,
            color: colors.textSecondary,
            lineHeight: 1.5,
            mb: 3,
            flex: 1
          }}
        >
          {description}
        </Typography>
        <Box
          component="a"
          href="#"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: colors.textPrimary,
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: colors.gray[700]
            }
          }}
        >
          See {title.toLowerCase()}
          <NavigateNext sx={{ fontSize: 16, ml: 0.5, transition: 'transform 0.2s ease' }} />
        </Box>
      </CardContent>
    </Card>
  );

  // Section Header Component
  const SectionHeader = ({ title, description, buttonText }) => (
    <Box sx={{ mb: { xs: 6, md: 8 } }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 800,
          color: colors.textPrimary,
          mb: 1.5,
          lineHeight: 1.1,
          maxWidth: 'xl'
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: '1.125rem',
          color: colors.textSecondary,
          mb: 3,
          maxWidth: '2xl',
          lineHeight: 1.6
        }}
      >
        {description}
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: colors.textPrimary,
          color: 'white',
          fontWeight: 600,
          fontSize: '1rem',
          py: 1.5,
          px: 4,
          borderRadius: '9999px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          '&:hover': {
            bgcolor: colors.gray[800],
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          },
          transition: 'all 0.3s ease',
          textTransform: 'none'
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );

  return (
    <Box>
      <HeroSection>
        <Container
          maxWidth="md"
          sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: '25%',
              bottom: '25%',
              width: '6px',
              backgroundColor: '#fff',
              borderRadius: '3px'
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ ml: 4, textAlign: 'left' }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Enquiry Management System
            </Typography>

            <Typography variant="h6" component="p">
              Capture, track, and nurture enquiries effortlessly — streamline communication, increase conversions, and elevate customer experience.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Box sx={{
        bgcolor: 'white',
        minHeight: '100vh',
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: 1.5,
        '& *::selection': {
          bgcolor: colors.pinkLight,
          color: 'black'
        }
      }}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            '@import': 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
            'body': {
              margin: 0,
              padding: 0,
              fontFamily: '"Inter", sans-serif',
              backgroundColor: '#ffffff'
            }
          }}
        />

        {/* Hero Section */}
        <Box sx={{ py: { xs: 10, md: 16 }, textAlign: 'center', px: 2 }}>
          <Container maxWidth="md">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 800,
                color: colors.textPrimary,
                mb: 2.5,
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              Understand the core features
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: colors.textSecondary,
                mb: 5,
                maxWidth: '2xl',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              The Work Graph® data model helps you and your teams work together intelligently and scale effortlessly.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: colors.textPrimary,
                color: 'white',
                fontWeight: 600,
                fontSize: '1.125rem',
                py: 1.5,
                px: 4,
                borderRadius: '9999px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  bgcolor: colors.gray[800],
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                },
                transition: 'all 0.3s ease',
                textTransform: 'none'
              }}
            >
              Get started
            </Button>
          </Container>
        </Box>

        {/* Project Management Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, px: 2,mt: -4 }}>
          <Container maxWidth="lg" >
            <SectionHeader
              title="Project management"
              description="Manage your projects from start to finish. With all of your projects in enquery management system, you'll always know who's doing what, by when."
              buttonText="See project management"
            />

            {/* 8-card grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
            <Grid container spacing={3} sx={{
              display: 'grid',
              gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(4, 1fr)" },
              gap: 3
            }}>
              {projectManagementCards.map((card, index) => (
                <Grid item key={index} sx={{ display: 'flex' }}>
                  <FeatureCard {...card} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Screenshot Showcase Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, px: 2, bgcolor: colors.gray[50] }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 800,
                  color: colors.textPrimary,
                  mb: 1,
                  lineHeight: 1.1
                }}
              >
                Our Project Showcase
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.125rem',
                  color: colors.textSecondary,
                  maxWidth: '3xl',
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Take a look at how these features translate into real-world projects and powerful visualizations.
              </Typography>
            </Box>

            <Box sx={{ position: 'relative', maxWidth: '5xl', mx: 'auto' }}>
              {/* Carousel */}
              <Box sx={{ overflow: 'hidden', position: 'relative', borderRadius: '0.75rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                <Box
                  sx={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentIndex * 100}%)`
                  }}
                >
                  {screenshotUrls.map((url, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: '100%',
                        flexShrink: 0
                      }}
                    >
                      <Box
                        component="img"
                        src={url}
                        alt={`Project Screenshot ${index + 1}`}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          borderRadius: '0.75rem',
                          border: `1px solid ${colors.gray[100]}`
                        }}
                        onError={(e) => {
                          e.target.src = `https://placehold.co/1000x600/34495e/ffffff?text=Project+View+${index + 1}`;
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Navigation Buttons */}
              <IconButton
                onClick={prevSlide}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 16,
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255, 255, 255, 0.7)',
                  p: 1.5,
                  borderRadius: '50%',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    bgcolor: 'white'
                  },
                  transition: 'background-color 0.3s ease',
                  zIndex: 10
                }}
              >
                <NavigateBefore sx={{ fontSize: 24, color: colors.gray[700] }} />
              </IconButton>

              <IconButton
                onClick={nextSlide}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 16,
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255, 255, 255, 0.7)',
                  p: 1.5,
                  borderRadius: '50%',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    bgcolor: 'white'
                  },
                  transition: 'background-color 0.3s ease',
                  zIndex: 10
                }}
              >
                <NavigateNext sx={{ fontSize: 24, color: colors.gray[700] }} />
              </IconButton>

              {/* Dots Indicator */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                {screenshotUrls.map((_, index) => (
                  <Box
                    key={index}
                    component="button"
                    onClick={() => goToSlide(index)}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      mx: 0.5,
                      border: 'none',
                      cursor: 'pointer',
                      bgcolor: index === currentIndex ? colors.pinkDark : colors.gray[300],
                      transition: 'background-color 0.3s ease',
                      '&:hover': {
                        bgcolor: colors.pinkLight
                      }
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Resource Management Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, px: 2 }}>
          <Container maxWidth="lg">
            <SectionHeader
              title="Resource management"
              description="Get the visibility you need. Plan accurate timelines, adjust workloads, and stay on track to achieve your strategy."
              buttonText="See resource management"
            />

            {/* 3-card grid - 3 columns on desktop, 1 on mobile */}
            <Grid container spacing={3} sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)'
              },
              gap: 3,
              maxWidth: '7xl',
              mx: 'auto'
            }}>
              {resourceManagementCards.map((card, index) => (
                <Grid item key={index} sx={{ display: 'flex' }}>
                  <FeatureCard {...card} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Workflows and Automation Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, px: 2 }}>
          <Container maxWidth="lg">
            <SectionHeader
              title="Workflows and automation"
              description="Create processes that run themselves, so teams can focus on the next big thing."
              buttonText="See workflows and automation"
            />

            {/* 4-card grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
            <Grid container spacing={3} sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)'
              },
              gap: 3,
              maxWidth: '7xl',
              mx: 'auto'
            }}>
              {workflowsAndAutomationCards.map((card, index) => (
                <Grid item key={index} sx={{ display: 'flex' }}>
                  <FeatureCard {...card} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Footer Spacing */}
        <Box sx={{ height: 64 }} />
      </Box>
    </Box>
  );
};

export default FlowTechPage;