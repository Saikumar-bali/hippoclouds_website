import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  useTheme,
  useMediaQuery,
  styled
} from '@mui/material';
import ProductCards from './ProductCards';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Rocket } from 'lucide-react';

// Styled components
const CarouselItemContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  [theme.breakpoints.down('md')]: {
    height: '70vh',
  },
  [theme.breakpoints.down('sm')]: {
    height: '60vh',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '400px',
    height: '400px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    top: '-200px',
    right: '-200px',
    animation: 'float 20s infinite ease-in-out',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '50%',
    bottom: '-150px',
    left: '-150px',
    animation: 'float 25s infinite ease-in-out reverse',
  },
}));

// New: Supports video with overlay
const BackgroundWrapper = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  }
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const StyledVideo = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

// Caption
const CaptionContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
  },
  marginTop: '-200px',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)',
  color: '#ffffff',
  padding: '14px 40px',
  fontSize: '16px',
  fontWeight: 700,
  borderRadius: '50px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: 'none',
  '&:hover': {
    background: 'linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)',
    transform: 'translateX(5px)',
    boxShadow: '0 10px 30px rgba(66, 165, 245, 0.4)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px 30px',
    fontSize: '14px',
  },
}));

// COMPONENT
const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Create a ref to scroll to the services cards section
  const servicesCardsRef = useRef(null);

  const backgroundSrc = process.env.PUBLIC_URL + "/ai.mp4";
  const isVideo = backgroundSrc.endsWith(".mp4");

  // Function to handle smooth scroll to services cards with 100px offset
  const handleExploreClick = () => {
    if (servicesCardsRef.current) {
      const element = servicesCardsRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + 150;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <CarouselItemContainer sx={{ mt: '64px' }}>

        {/* BACKGROUND */}
        <BackgroundWrapper>
          {isVideo ? (
            <StyledVideo autoPlay loop muted playsInline>
              <source src={backgroundSrc} type="video/mp4" />
            </StyledVideo>
          ) : (
            <StyledImage src={backgroundSrc} alt="Background" />
          )}
        </BackgroundWrapper>

        {/* CONTENT */}
        <CaptionContainer maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              maxWidth: isMobile ? '100%' : isTablet ? '80%' : '60%',
              textAlign: 'left'
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontSize: isMobile ? "36px" : "56px",
                fontWeight: 800,
                lineHeight: isMobile ? "44px" : "64px",
                mb: "16px",
                color: "#ffffff",
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Transform Your Business
              <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #42a5f5 0%, #66bb6a 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                With AI-Powered Solutions
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#f0f4f8",
                fontFamily: "Open Sans, sans-serif",
                fontSize: isMobile ? "16px" : "20px",
                lineHeight: "28px",
                mb: "32px",
                fontWeight: 300,
                maxWidth: '500px',
              }}
            >
              Elevate your digital presence with our comprehensive suite of enterprise solutions designed for modern business challenges.
            </Typography>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <CustomButton
                variant="contained"
                onClick={handleExploreClick}
                endIcon={<ArrowRight size={20} />}
              >
                Explore Solutions
              </CustomButton>
            </motion.div>
          </motion.div>
        </CaptionContainer>
      </CarouselItemContainer>

      {/* OTHER CARDS - Pass the ref to ProductCards */}
      <ProductCards ref={servicesCardsRef} />
    </>
  );
}

export default HomePage;