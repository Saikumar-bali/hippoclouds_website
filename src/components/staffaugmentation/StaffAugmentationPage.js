import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  GlobalStyles
} from '@mui/material';
import {
  Computer,
  TrackChanges,
  Build,
  Psychology
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

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

const StaffAugmentationPage = () => {
  // Exact colors from your Tailwind config
  const colors = {
    background: '#f4f7f9',
    primaryIndigo: '#4c51bf',
    white: '#ffffff',
    gray: {
      900: '#1f2937',
      800: '#1f2937',
      700: '#374151',
      600: '#4b5563',
      500: '#6b7280'
    },
    green: {
      500: '#10b981'
    },
    red: {
      500: '#ef4444'
    },
    blue: {
      500: '#3b82f6'
    }
  };

  // Talent categories data - UPDATED: Smaller images for 4-column layout
  const talentCategories = [
    {
      title: "Software Developers & Engineers",
      icon: <Computer sx={{ fontSize: 32 }} />,
      borderColor: colors.primaryIndigo,
      iconColor: colors.primaryIndigo,
      image: "/Staff_Augmentation/1.jpg",
      description: "Our developers are masters of the entire software development lifecycle, building resilient, scalable applications from concept to deployment.",
      items: [
        "Full-stack Developers",
        "Frontend & Backend Engineers", 
        "Mobile App Developers",
        "DevOps & Cloud Engineers"
      ]
    },
    {
      title: "Project & Product Specialists",
      icon: <TrackChanges sx={{ fontSize: 32 }} />,
      borderColor: colors.green[500],
      iconColor: colors.green[500],
      image: "/Staff_Augmentation/2.jpg",
      description: "We source strategic thinkers who can drive successful outcomes. These specialists excel at defining roadmaps and managing scope.",
      items: [
        "Project Managers",
        "Product Managers & Product Owners",
        "Agile & Scrum Experts",
        "Business Analysts"
      ]
    },
    {
      title: "Technical Support & QA",
      icon: <Build sx={{ fontSize: 32 }} />,
      borderColor: colors.red[500],
      iconColor: colors.red[500],
      image: "/Staff_Augmentation/3.jpg",
      description: "Maintaining application quality and ensuring user satisfaction is paramount. This team provides rigorous testing across all environments.",
      items: [
        "Quality Assurance & Testing Engineers",
        "Technical Support Specialists", 
        "System & Network Administrators"
      ]
    },
    {
      title: "Data & Emerging Tech",
      icon: <Psychology sx={{ fontSize: 32 }} />,
      borderColor: colors.blue[500],
      iconColor: colors.blue[500],
      image: "/Staff_Augmentation/4.jpg",
      description: "The future runs on data and intelligence. Our experts turn raw data into actionable insights and build sophisticated machine learning models.",
      items: [
        "Data Analysts & Data Engineers",
        "AI/ML Engineers",
        "Cybersecurity Professionals",
        "Automation Experts"
      ]
    }
  ];

  // Talent Card Component - UPDATED: Better sizing for 4-column layout
  const TalentCard = ({ title, icon, borderColor, iconColor, image, description, items }) => (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: colors.white,
        borderRadius: '0.75rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        borderTop: `4px solid ${borderColor}`,
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      }}
    >
      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header with Icon */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{ color: iconColor, mr: 2 }}>
            {icon}
          </Box>
          <Typography 
            variant="h2"
            sx={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: colors.gray[800],
              lineHeight: 1.3
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Image - UPDATED: Smaller dimensions for 4-column layout */}
        <Box sx={{ 
          width: '100%',
          height: '120px',
          mb: 2,
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          overflow: 'hidden'
        }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </Box>

        {/* Description - UPDATED: Shorter for compact layout */}
        <Typography 
          variant="body2"
          sx={{
            fontSize: '0.875rem',
            color: colors.gray[600],
            mb: 2,
            flexGrow: 1,
            lineHeight: 1.5
          }}
        >
          {description}
        </Typography>

        {/* Items List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {items.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Box 
                sx={{ 
                  color: iconColor,
                  mr: 1,
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  mt: 0.1
                }}
              >
                •
              </Box>
              <Typography 
                sx={{
                  color: colors.gray[700],
                  fontSize: '0.875rem',
                  lineHeight: 1.5
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Staff Augmentation
            </Typography>
            <Typography variant="h5" component="p">
              Scale your team efficiently with our flexible and skilled staff augmentation services.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

    <Box sx={{ 
      bgcolor: colors.background,
      minHeight: '100vh',
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      p: { xs: 2, sm: 4 }
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

      <Container maxWidth="xl" sx={{ px: { xs: 0, sm: 2 } }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem' },
              fontWeight: 600,
              color: colors.gray[900],
              mb: 2,
              lineHeight: 1.1
            }}
          >
            Our Talent Expertise
          </Typography>
          <Typography 
            variant="h2"
            sx={{
              fontSize: '1.125rem',
              color: colors.gray[600],
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.5
            }}
          >
            Discover the specialized roles we fill to power innovation and growth across diverse technology domains.
          </Typography>
        </Box>

        {/* Expertise Grid - FIXED: Proper 4-column layout */}
        <Grid 
          container 
          spacing={3} 
          sx={{ 
            mb: 8,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
            gap: 3
          }}
        >
          {talentCategories.map((category, index) => (
            <Grid item key={index}>
              <TalentCard {...category} />
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: colors.primaryIndigo,
              color: colors.white,
              fontWeight: 600,
              fontSize: '1rem',
              py: 1.5,
              px: 4,
              borderRadius: '9999px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              transform: 'scale(1)',
              transition: 'all 0.3s ease',
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#4338ca',
                transform: 'scale(1.05)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            Connect With Our Specialists
          </Button>
        </Box>
      </Container>
    </Box>
    </Box>
  );
};

export default StaffAugmentationPage;