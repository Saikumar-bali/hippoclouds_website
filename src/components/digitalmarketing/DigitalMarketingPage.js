import React from 'react';
import { Search, Share2, Megaphone, Feather, Mail, LayoutGrid, Zap } from 'lucide-react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack
} from '@mui/material';
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

// Data structure for the digital marketing services
const services = [
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    description: "Improve search rankings, boost organic traffic, and grow visibility on Google.",
    color: "text-blue-600",
  },
  {
    icon: Share2,
    title: "Social Media Marketing & Management",
    description: "Build a powerful social presence on platforms like Instagram, Facebook, LinkedIn, and YouTube.",
    color: "text-pink-600",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising (Google & Social Ads)",
    description: "Target the right audience and maximize ROI using paid ad campaigns.",
    color: "text-red-600",
  },
  {
    icon: Feather,
    title: "Content Marketing & Copywriting",
    description: "Engage your audience with compelling blogs, creatives, and brand storytelling.",
    color: "text-green-600",
  },
  {
    icon: Mail,
    title: "Email & Automation Campaigns",
    description: "Nurture leads and increase customer retention through smart email workflows.",
    color: "text-amber-600",
  },
  {
    icon: LayoutGrid,
    title: "Website & Landing Page Optimization",
    description: "Improve user experience and conversion rates with optimized designs and CTAs.",
    color: "text-indigo-600",
  },
];

// Exact neumorphic styled components matching original CSS
const NeumorphicCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#f1f5f9', // slate-100
  padding: '24px',
  borderRadius: '16px',
  transition: 'all 0.3s',
  transform: 'scale(1)',
  boxShadow: '8px 8px 16px #a8a8a8, -8px -8px 16px #ffffff',
  height: { xs: '120px', sm: '120px', md: '120px', lg: '120px', xl: '120px' },
  width: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%' },
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    boxShadow: '4px 4px 8px #a8a8a8, -4px -4px 8px #ffffff',
    transform: 'scale(0.99)',
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    padding: '32px',
    height: '240px', // Slightly taller on larger screens
  }
}));

const NeumorphicIconContainer = styled(Box)({
  padding: '12px',
  borderRadius: '12px',
  boxShadow: '4px 4px 8px #a8a8a8, -4px -4px 8px #ffffff',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0, // Prevent icon container from shrinking
});

const NeumorphicChip = styled(Chip)({
  backgroundColor: '#f1f5f9',
  color: '#3730a3', // indigo-700
  fontSize: '0.875rem',
  fontWeight: '500',
  padding: '8px 16px',
  borderRadius: '9999px',
  boxShadow: '3px 3px 6px #a8a8a8, -3px -3px 6px #ffffff',
  height: 'auto',
});

const NeumorphicButton = styled(Button)({
  backgroundColor: '#4f46e5', // indigo-600
  color: 'white',
  fontWeight: '600',
  padding: '12px 32px',
  borderRadius: '12px',
  fontSize: '1rem',
  boxShadow: '4px 4px 8px #5B21B6, -4px -4px 8px #8B5CF6',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#4338ca', // indigo-700
    boxShadow: '4px 4px 8px #5B21B6, -4px -4px 8px #8B5CF6',
  },
  '&:active': {
    boxShadow: 'inset 2px 2px 4px #5B21B6, inset -2px -2px 4px #8B21B6',
    transform: 'scale(0.98)',
  },
});

const NeumorphicSection = styled(Box)({
  backgroundColor: '#f1f5f9',
  padding: '32px',
  borderRadius: '16px',
  boxShadow: '10px 10px 20px #a8a8a8, -10px -10px 20px #ffffff',
});

// Service Card Component with fixed height and proper content alignment
const ServiceCard = ({ icon: Icon, title, description, color }) => (
  <NeumorphicCard>
    <CardContent sx={{
      p: 0,
      '&:last-child': { pb: 0 },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }}>
      <Stack direction="row" alignItems="flex-start" sx={{ mb: 3 }}>
        <NeumorphicIconContainer sx={{ color }}>
          <Icon style={{ width: '24px', height: '24px' }} />
        </NeumorphicIconContainer>
        <Typography
          variant="h6"
          sx={{
            ml: 3,
            fontSize: { xs: '1rem', sm: '1.05rem', md: '0.95rem', lg: '1.25rem', xl: '1.3rem' },
            fontWeight: 600,
            color: '#1f2937', // gray-800
            flexGrow: 1,
            lineHeight: 1.3
          }}
        >
          {title}
        </Typography>
      </Stack>
      <Typography
        sx={{
          color: '#4b5563', // gray-600
          fontSize: { xs: '1rem', sm: '1.05rem', md: '0.9rem', lg: '1.25rem', xl: '1.3rem' },
          lineHeight: 1.6,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'flex-start'
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </NeumorphicCard>
);

// Main Application Component
const DigitalMarketingPage = () => {
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
        Digital Marketing Solutions
      </Typography>

      <Typography variant="h6" component="p">
        Elevate your brand presence, attract the right audience, and boost conversions with data-driven digital marketing strategies.
      </Typography>
    </motion.div>
  </Container>
</HeroSection>


    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#f1f5f9',
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      p: { xs: 2, sm: 4 },
      mt: -10
    }}>
      {/* Header Section - Exact match */}
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 12, mb: 8 }}>
        <NeumorphicChip
          icon={<Zap style={{ width: '20px', height: '20px' }} />}
          label="Digital Marketing Solutions"
          sx={{ mb: 4 }}
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.25rem', sm: '3rem' },
            fontWeight: 800,
            color: '#111827', // gray-900
            lineHeight: 1.25,
            mb: 2
          }}
        >
          Accelerate Your Online Growth
        </Typography>
        <Typography
          sx={{
            fontSize: '1.25rem',
            color: '#4b5563', // gray-600
            lineHeight: 1.75,
            maxWidth: '42rem',
            mx: 'auto',
            mt: 2
          }}
        >
          We offer a full spectrum of integrated digital marketing services designed to deliver measurable results and sustainable business expansion.
        </Typography>
      </Container>

      {/* Services Grid - Fixed 2 rows × 3 columns layout */}
      <Container maxWidth="lg" component="main">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4, lg: 5 }
          }}
        >
          {services.map((service, index) => (
            <Box key={index}>
              <ServiceCard {...service} />
            </Box>
          ))}
        </Box>
      </Container>


      {/* Footer / CTA Section - Exact match */}
      <Container maxWidth="md" component="footer" sx={{ textAlign: 'center', py: 12, mt: 16 }}>
        <NeumorphicSection>
          <Typography
            variant="h2"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#111827', // gray-900
              mb: 2
            }}
          >
            Ready to Boost Your Brand?
          </Typography>
          <Typography
            sx={{
              color: '#4b5563', // gray-600
              fontSize: '1rem',
              mb: 4
            }}
          >
            Let's discuss how our specialized services can be tailored to meet your unique business objectives.
          </Typography>
          <NeumorphicButton>
            Get a Free Consultation
          </NeumorphicButton>
        </NeumorphicSection>
      </Container>
    </Box>
    </Box>
  );
};

export default DigitalMarketingPage;