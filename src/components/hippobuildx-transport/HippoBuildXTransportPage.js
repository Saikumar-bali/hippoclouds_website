
import React from 'react';
import { Box, Typography, Container, Paper, Link } from '@mui/material';
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

export default function HippoBuildXTransportPage() {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              HippoBuildX – Transport
            </Typography>
            <Typography variant="h5" component="p">
              Optimize your construction logistics with intelligent transport management.
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
            HippoBuildX – Transport offers features like fleet tracking, route optimization, delivery scheduling, and real-time communication with drivers. It's designed to improve efficiency and reduce costs in construction transportation.
          </Typography>
        </Paper>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            Enhance your transport operations with HippoBuildX.
          </Typography>
          <Link href="/contact" sx={{ textDecoration: 'none' }}>
              Request a Demo
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
