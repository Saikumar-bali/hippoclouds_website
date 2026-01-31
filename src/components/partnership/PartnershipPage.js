import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Award, Zap, Users, TrendingUp, Handshake, Briefcase, Star, ChevronRight } from 'lucide-react';

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

const SectionTitle = ({ children }) => (
  <Typography
    variant="h3"
    component="h2"
    sx={{
      fontSize: { xs: '2.5rem', md: '3rem' },
      fontWeight: 800,
      color: 'grey.900',
      mb: 1,
      textAlign: 'center',
      letterSpacing: '-0.5px',
    }}
  >
    {children}
  </Typography>
);

const SectionSubtitle = ({ children }) => (
  <Typography
    sx={{
      textAlign: 'center',
      fontSize: '1.2rem',
      color: 'grey.600',
      mb: 8,
      maxWidth: '800px',
      mx: 'auto',
      fontWeight: 400,
    }}
  >
    {children}
  </Typography>
);

const partnershipBenefits = [
  {
    icon: Award,
    color: '#667eea',
    title: 'Innovative Solutions',
    description: 'Access our cutting-edge software and platforms to enhance your offerings.',
  },
  {
    icon: Zap,
    color: '#764ba2',
    title: 'Expanded Market Reach',
    description: 'Tap into new customer segments and geographical markets with our established network.',
  },
  {
    icon: Users,
    color: '#f093fb',
    title: 'Dedicated Support',
    description: 'Receive comprehensive training, marketing materials, and dedicated technical support.',
  },
  {
    icon: TrendingUp,
    color: '#42a5f5',
    title: 'Revenue Growth',
    description: 'Unlock new revenue streams and increase profitability through our attractive partnership models.',
  },
];

const partnershipModels = [
    {
      icon: Handshake,
      color: '#66bb6a',
      title: 'Technology Partners',
      description: 'Integrate your solutions with our products to create powerful, comprehensive offerings for clients.',
    },
    {
      icon: Briefcase,
      color: '#ffa726',
      title: 'Channel Partners',
      description: 'Resell, refer, or distribute our products and services to your extensive client base.',
    },
    {
      icon: Star,
      color: '#ef5350',
      title: 'Strategic Alliances',
      description: 'Collaborate on joint ventures, co-development projects, and strategic market initiatives.',
    },
  ];

const ModernValueCard = styled(Card)(({ color }) => ({
    height: '100%',
    width: '400px',
    borderRadius: 12,
    minWidth: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    border: '1px solid #f0f0f0',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: `0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 5px 15px -5px ${color}30`,
      backgroundColor: `${color}08`,
    },
}));

const ValueIconWrapper = styled(Box)(({ color }) => ({
    marginBottom: '1rem',
    padding: '12px',
    borderRadius: '10px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: color,
    boxShadow: `0 0 0 8px ${color}20`,
    transition: 'box-shadow 0.3s ease',
}));

const PartnershipPage = () => {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Partner with Us
            </Typography>
            <Typography variant="h5" component="p">
              Join our network and grow together
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 12 }}>
        {/* Intro Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 2, fontWeight: 500, color: 'grey.800' }}>
            Building Success Through Collaboration
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'grey.700', maxWidth: '800px', mx: 'auto', textAlign: 'center', mb: 12 }}>
            At Hippoclouds, we believe in the power of collaboration. Our partnership program is designed to create mutually beneficial relationships that drive innovation, expand market reach, and deliver exceptional value to our customers.
          </Typography>
        </motion.div>

        {/* Why Partner with Us Section */}
        <Box sx={{ mb: 12 }}>
          <SectionTitle>Why Partner with Hippoclouds?</SectionTitle>
          <SectionSubtitle>
            Unlock new opportunities and accelerate your growth by joining our partner ecosystem.
          </SectionSubtitle>
          <Grid container spacing={4} display="flex" justifyContent="center" >
            {partnershipBenefits.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <ModernValueCard color={item.color}>
                        <CardContent sx={{ p: 3, textAlign: 'center' }}>
                            <ValueIconWrapper color={item.color}>
                                <item.icon size={28} />
                            </ValueIconWrapper>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'grey.900' }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{ fontSize: '0.9rem', color: 'grey.700' }}>
                                {item.description}
                            </Typography>
                        </CardContent>
                    </ModernValueCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Partnership Models Section */}
        <Box sx={{ mb: 12 }}>
            <SectionTitle>Our Partnership Models</SectionTitle>
            <SectionSubtitle>
                Flexible models designed to fit your business strategy and goals.
            </SectionSubtitle>
            <Grid container spacing={4} justifyContent="center">
                {partnershipModels.map((item, index) => (
                <Grid item xs={12} sm={8} md={4} key={index}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <ModernValueCard color={item.color}>
                            <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                <ValueIconWrapper color={item.color}>
                                    <item.icon size={28} />
                                </ValueIconWrapper>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'grey.900' }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ fontSize: '0.9rem', color: 'grey.700' }}>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </ModernValueCard>
                    </motion.div>
                </Grid>
                ))}
            </Grid>
        </Box>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              padding: { xs: 4, md: 6 },
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Ready to Become a Partner?
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
              Let's connect and explore how we can achieve great things together. Join us on our mission to drive digital transformation.
            </Typography>
            <Button
              variant="contained"
              endIcon={<ChevronRight />}
              sx={{
                backgroundColor: '#fff',
                color: '#667eea',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.2s',
              }}
            >
              Contact Us
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PartnershipPage;