
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Paper, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

// Icons
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CampaignIcon from '@mui/icons-material/Campaign';

const MotionCard = motion(Card);

const services = [
  {
    title: 'App Development',
    description: 'Hippo Cloud focuses on creating user-centric mobile applications with an emphasis on performance, reliability, and robust security. Their approach ensures that each app is tailored to meet the specific needs of the client, providing a seamless user experience.',
    icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Web Development',
    description: 'The company offers expert web development services that prioritize user experience (UX), responsive design, and security. They aim to build websites that are not only visually appealing but also functional and secure, catering to the diverse needs of their clients.',
    icon: <WebIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Graphic Designing',
    description: 'Hippo Cloud\'s graphic design services are centered around transforming ideas into visually compelling designs. They focus on aesthetics, creativity, and effective visual communication to help businesses establish a strong brand identity.',
    icon: <DesignServicesIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Digital Marketing',
    description: 'The company provides digital marketing expertise to help businesses enhance their online presence. Their services include: SEO, Social Media Marketing, and Content Marketing.',
    icon: <CampaignIcon sx={{ fontSize: 40 }} />
  },
];

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

export default function ServicesPage() {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Our Services
            </Typography>
            <Typography variant="h5" component="p">
              Transforming businesses through innovative solutions.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, boxShadow: 3, overflow: 'hidden' }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {service.icon}
                    <Typography variant="h5" component="h2" sx={{ ml: 2 }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ p: 4, mt: 6, borderRadius: 4, textAlign: 'center', background: '#f5f5f5' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Why Choose Hippo Cloud?
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Hippo Cloud Technologies positions itself as a trusted partner for businesses seeking to elevate their online presence. Their blend of innovation and expertise across app development, web development, digital marketing, and graphic design makes them a comprehensive solution provider.
          </Typography>
        </Paper>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            Phone: +91 93478 62547
          </Typography>
          <Typography variant="body1" paragraph>
            Email: <Link href="mailto:info@hippoclouds.com">info@hippoclouds.com</Link>
          </Typography>
          <Typography variant="body1" paragraph>
            Website: <Link href="https://hippoclouds.com" target="_blank" rel="noopener">hippoclouds.com</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
