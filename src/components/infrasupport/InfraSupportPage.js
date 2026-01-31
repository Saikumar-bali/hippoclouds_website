import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Server, Shield, Cloud, Database, Network, LifeBuoy, ChevronRight } from 'lucide-react';

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

const services = [
  {
    icon: Cloud,
    color: '#667eea',
    title: 'Cloud Management',
    description: 'Comprehensive management of your cloud infrastructure on AWS, Azure, and Google Cloud.',
  },
  {
    icon: Server,
    color: '#764ba2',
    title: 'Server Management',
    description: 'Proactive monitoring, maintenance, and optimization of your server infrastructure.',
  },
  {
    icon: Shield,
    color: '#f093fb',
    title: 'Security & Compliance',
    description: 'Robust security solutions and compliance management to protect your digital assets.',
  },
  {
    icon: Database,
    color: '#42a5f5',
    title: 'Database Management',
    description: 'Efficient management and optimization of your databases for performance and reliability.',
  },
  {
    icon: Network,
    color: '#66bb6a',
    title: 'Network Management',
    description: 'End-to-end management of your network infrastructure for seamless connectivity.',
  },
  {
    icon: LifeBuoy,
    color: '#ffa726',
    title: '24/7 Support',
    description: 'Round-the-clock support from our team of certified experts to resolve issues quickly.',
  },
];

const ModernCard = styled(Card)(({ color }) => ({
    height: '100%',
    width: '350px',
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

const IconWrapper = styled(Box)(({ color }) => ({
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

const InfraSupportPage = () => {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Infra Support & Managed Services
            </Typography>
            <Typography variant="h5" component="p">
              Reliable, scalable, and secure infrastructure management
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 12 }}>
        {/* Services Section */}
        <Box sx={{ mb: 12 }}>
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            We provide end-to-end infrastructure support and managed services to keep your business running smoothly.
          </SectionSubtitle>
          <Grid container spacing={4}>
            {services.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <ModernCard color={item.color}>
                        <CardContent sx={{ p: 3, textAlign: 'center' }}>
                            <IconWrapper color={item.color}>
                                <item.icon size={28} />
                            </IconWrapper>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'grey.900' }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{ fontSize: '0.9rem', color: 'grey.700' }}>
                                {item.description}
                            </Typography>
                        </CardContent>
                    </ModernCard>
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
              Get a Free Consultation
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
              Let us help you design, build, and manage your infrastructure for optimal performance and security.
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

export default InfraSupportPage;