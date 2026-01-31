
import React from 'react';
import { Box, Typography, Container, Paper, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

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

export default function HippoTripZonePage() {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              HippoTripZone
            </Typography>
            <Typography variant="h5" component="p">
              Your ultimate travel companion for seamless and memorable journeys.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper sx={{ p: 4, mt: 6, borderRadius: 4, textAlign: 'center', background: '#f5f5f5' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Key Features
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            HippoTripZone offers features like personalized itinerary planning, real-time travel updates, booking management, and local recommendations. It's designed to make every trip hassle-free and enjoyable.
          </Typography>
        </Paper>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            Plan your next adventure with HippoTripZone.
          </Typography>
          <Link component={RouterLink} to="/contact" sx={{ textDecoration: 'none' }}>
              Learn More
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
