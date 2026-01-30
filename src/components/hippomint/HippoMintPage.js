import { React, useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Link,
  useTheme,
  useMediaQuery,
  CssBaseline,
  GlobalStyles,
  Stack,
  IconButton
} from '@mui/material';
import {
  PlayArrow,
  Description,
  Inventory2,
  AccountBalanceWallet,
  BarChart,
  Language,
  Smartphone,
  CloudUpload,
  ArrowBackIosNew,
  ArrowForwardIos
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

const HippoMintPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const Availablefeatures = [
    {
      icon: <Language sx={{ color: 'primary.main', fontSize: 24 }} />,
      title: 'Multi-Language Support',
      description: 'Available in English, Hindi, Telugu, Tamil, Bengali, and more to serve your local needs.'
    },
    {
      icon: <Smartphone sx={{ color: 'primary.main', fontSize: 24 }} />,
      title: 'Works Offline',
      description: 'Create invoices and manage stock even without an internet connection. Your data syncs automatically when you\'re back online.'
    },
    {
      icon: <CloudUpload sx={{ color: 'primary.main', fontSize: 24 }} />,
      title: 'Secure Cloud Backup & Restore',
      description: 'Your business data is kept safe with automatic, encrypted cloud backup and easy restore options.'
    }
  ];

  const colors = {
    primary: '#059669',
    primaryDark: '#047857',
    background: '#f7f9fb',
    white: '#ffffff',
    gray: {
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    },
    emerald: {
      100: '#d1fae5',
      500: '#10b981'
    }
  };

  const features = [
    {
      icon: <Description sx={{ fontSize: 24 }} />,
      title: "Easy GST Billing",
      description: "Generate professional, GST-compliant invoices in seconds, complete with HSN/SAC codes and e-invoice compatibility."
    },
    {
      icon: <Inventory2 sx={{ fontSize: 24 }} />,
      title: "Real-time Stock Tracking",
      description: "Track stock levels in real-time and get automated alerts before your fast-moving items run out."
    },
    {
      icon: <AccountBalanceWallet sx={{ fontSize: 24 }} />,
      title: "Dues & Payment Reminders",
      description: "Record all payment types (Cash, UPI, Card, Credit) and automatically send reminders for pending dues."
    },
    {
      icon: <BarChart sx={{ fontSize: 24 }} />,
      title: "Comprehensive Reporting",
      description: "View daily sales, P&L, GST summaries, and export reports for quick and easy tax filing."
    }
  ];

  const useCases = [
    { icon: '🛒', title: "Kirana & General Stores" },
    { icon: '👚', title: "Garment & Footwear Shops" },
    { icon: '📱', title: "Electronics & Mobile Stores" },
    { icon: '🍽️', title: "Restaurants & Cafes" },
    { icon: '📦', title: "Wholesalers & Distributors" }
  ];

  const images = [
    "/hippo_mint/3.webp",
    "/hippo_mint/4.webp",
    "/hippo_mint/5.webp",
    "/hippo_mint/6.webp",
    "/hippo_mint/7.webp",
    "/hippo_mint/8.webp",
    "/hippo_mint/9.webp",
    "/hippo_mint/10.webp"
  ];

  const loopImages = [
    images[images.length - 1],
    ...images,
    images[0]
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  useEffect(() => {
    if (!isMobile) return;

    const scroller = document.getElementById("appScroller");
    if (!scroller) return;

    let idx = currentSlideIndex;

    setTimeout(() => {
      scroller.scrollTo({ left: idx * scroller.clientWidth, behavior: 'instant' });
    }, 50);

    const interval = setInterval(() => {
      idx++;

      scroller.scrollTo({
        left: idx * scroller.clientWidth,
        behavior: "smooth",
      });
      setCurrentSlideIndex(idx);

      if (idx === loopImages.length - 1) {
        setTimeout(() => {
          scroller.scrollTo({
            left: scroller.clientWidth,
            behavior: "instant"
          });
          idx = 1;
          setCurrentSlideIndex(1);
        }, 400);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, loopImages.length]);

  const handleScroll = (direction) => {
    const scroller = document.getElementById("appScroller");
    if (!scroller) return;

    let newIndex;
    if (direction === 'back') {
      newIndex = currentSlideIndex - 1;
    } else {
      newIndex = currentSlideIndex + 1;
    }

    setCurrentSlideIndex(newIndex);

    scroller.scrollTo({
      left: newIndex * scroller.clientWidth,
      behavior: "smooth",
    });

    const animationDuration = 400;

    if (newIndex === 0) {
      setTimeout(() => {
        scroller.scrollTo({
          left: scroller.clientWidth * (loopImages.length - 2),
          behavior: "instant"
        });
        setCurrentSlideIndex(loopImages.length - 2);
      }, animationDuration);
    } else if (newIndex === loopImages.length - 1) {
      setTimeout(() => {
        scroller.scrollTo({
          left: scroller.clientWidth,
          behavior: "instant"
        });
        setCurrentSlideIndex(1);
      }, animationDuration);
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const DesktopScreenshotsView = () => {
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const imagesPerSet = 4;
    const totalSets = Math.ceil(images.length / imagesPerSet);

    const handleDesktopNext = () => {
      setCurrentSetIndex((prev) => (prev + 1) % totalSets);
    };

    const handleDesktopPrev = () => {
      setCurrentSetIndex((prev) => (prev - 1 + totalSets) % totalSets);
    };

    const currentSetImages = images.slice(
      currentSetIndex * imagesPerSet,
      (currentSetIndex + 1) * imagesPerSet
    );

    return (

      <Box
        sx={{
          mt: 8,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 4,
          maxWidth: '100%',
          mx: 'auto',
          pb: 6,
          position: 'relative',
          height: '500px',
        }}
      >
        <IconButton
          onClick={handleDesktopPrev}
          sx={{
            position: 'absolute',
            left: { md: '-20px', lg: '-80px' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 20,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              bgcolor: 'white'
            },
            p: 2,
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          <ArrowBackIosNew sx={{ fontSize: '1.5rem', color: colors.gray[800] }} />
        </IconButton>

        {currentSetImages.map((src, i) => (
          <Box
            key={i}
            sx={{
              flexShrink: 0,
              width: '200px',
              height: '430px',
              borderRadius: '2rem',
              overflow: 'hidden',
              border: '8px solid black',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              transform: i === 1 ? 'translateY(40px)' : 'none',
              transition: 'transform 0.3s ease',
              zIndex: i === 1 ? 10 : (i === 0 || i === 2 ? 5 : 1),
              mt: i === 1 ? 0 : '40px'
            }}
          >
            <Box
              component="img"
              src={src}
              alt={`HippoMint App Screenshot ${currentSetIndex * imagesPerSet + i + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
        ))}

        <IconButton
          onClick={handleDesktopNext}
          sx={{
            position: 'absolute',
            right: { md: '-20px', lg: '-80px' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 20,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              bgcolor: 'white'
            },
            p: 2,
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          <ArrowForwardIos sx={{ fontSize: '1.5rem', color: colors.gray[800] }} />
        </IconButton>
      </Box>
    );
  };

  const MobileScreenshotsView = () => (
    <Box
      sx={{
        mx: "auto",
        maxWidth: 350,
        overflow: "hidden",
        borderRadius: "2rem",
        border: "12px solid black",
        position: "relative",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        background: "#000",
        display: { xs: 'block', md: 'none' }
      }}
    >
      <IconButton
        onClick={() => handleScroll('back')}
        sx={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          bgcolor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            bgcolor: 'white'
          },
          p: 1,
          borderRadius: '50%'
        }}
      >
        <ArrowBackIosNew sx={{ fontSize: '1.25rem', color: colors.gray[800] }} />
      </IconButton>

      <Box
        id="appScroller"
        sx={{
          display: "flex",
          width: "100%",
          height: "700px",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          alignItems: "center", // <-- ADD THIS
          "&::-webkit-scrollbar": { display: "none" }
        }}
      >
        {loopImages.map((src, i) => (
          <Box
            key={i}
            component="img"
            src={src}
            alt={`HippoMint App ${i + 1}`}
            sx={{
              width: "100%",
              height: "100%",         // <-- ADD THIS
              objectFit: "cover",     // <-- ADD THIS
              flexShrink: 0,
              scrollSnapAlign: "center"
            }}
          />
        ))}
      </Box>


      <IconButton
        onClick={() => handleScroll('front')}
        sx={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          bgcolor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            bgcolor: 'white'
          },
          p: 1,
          borderRadius: '50%'
        }}
      >
        <ArrowForwardIos sx={{ fontSize: '1.25rem', color: colors.gray[800] }} />
      </IconButton>
    </Box>
  );

  return (

    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h3" component="h1" gutterBottom>
              HippoMint
            </Typography>
            <Typography variant="h6" component="p">
              Smart GST Billing & Inventory App for Indian Businesses
            </Typography>
            <Button
                onClick={() => scrollToSection('cta-section')}
                sx={{
                  bgcolor: colors.primary,
                  color: 'white',
                  fontWeight: 600,
                  py: 1,
                  px: 3,
                  mt: 2,
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  '&:hover': {
                    bgcolor: colors.primaryDark,
                    transform: 'scale(1.05)'
                  },
                  transition: 'all 0.3s ease-in-out',
                  textTransform: 'none'
                }}
              >
                Download Now
              </Button>
          </motion.div>
        </Container>
      </HeroSection>
      <Box sx={{
        bgcolor: 'white',
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
              fontFamily: '"Inter", sans-serif',
              backgroundColor: colors.background
            },
            '.wave-separator': {
              fill: colors.background,
              height: '100px',
              width: '100%',
              transform: 'scaleY(-1)'
            }
          }}
        />

        {/* Navigation Bar */}
        <AppBar
          position="sticky"
          sx={{
            bgcolor: 'white',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            top: 0,
            zIndex: 50
          }}
        >
          {/*  */}
        </AppBar>

        {/* Hero Section */}
        <Box component="main" sx={{ pt: 4, pb: 12, bgcolor: 'white' }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center', px: { xs: 2, sm: 3, lg: 4 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                py: 0.75,
                mb: 4,
                fontSize: '0.875rem',
                fontWeight: 500,
                bgcolor: colors.emerald[100],
                color: colors.primary,
                borderRadius: '9999px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              #1 Invoicing App for Indian Retail
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '2.35rem', lg: '2.55rem', xl: '2.65rem' },
                fontWeight: 800,
                color: colors.gray[900],
                mb: 2,
                lineHeight: 1.1,
                letterSpacing: '-0.025em'
              }}
            >
              Say Goodbye to Spreadsheets. <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
              <Box component="span" sx={{ color: colors.primary }}>Go Digital, Grow Smarter.</Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: '1.25rem',
                color: colors.gray[500],
                mb: 5,
                maxWidth: '2xl',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              HippoMint is the smart retail invoicing app that helps Indian businesses create GST-compliant invoices, manage inventory, track payments, and grow—all from your mobile.
            </Typography>

            <Box id="cta-section" sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
              mb: 8
            }}>
              <Button
                onClick={() => scrollToSection('download')}
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  minWidth: '256px',
                  bgcolor: colors.primary,
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  py: 1.5,
                  borderRadius: '0.75rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  '&:hover': {
                    bgcolor: colors.primaryDark,
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease',
                  textTransform: 'none'
                }}
              >
                Get HippoMint Free
              </Button>

              <Button
                component="a"
                href="https://play.google.com/store/apps/details?id=com.hippo.mint&hl=en_IN&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/hippo_mint/2.png"
                  alt="Google Play"
                  style={{ height: '50px' }}
                />
              </Button>
            </Box>

            <MobileScreenshotsView />
            <DesktopScreenshotsView />
          </Container>
        </Box>

        {/* Key Features Section */}
        <Box id="features" sx={{ py: 12, bgcolor: colors.background }}>
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.25rem', sm: '3rem' },
                fontWeight: 800,
                color: colors.gray[900],
                textAlign: 'center',
                mb: 1.5
              }}
            >
              Designed for the <Box component="span" sx={{ color: colors.primary }}>Modern Indian Business</Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.25rem',
                color: colors.gray[500],
                textAlign: 'center',
                mb: 8,
                maxWidth: '3xl',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              HippoMint replaces complexity with simplicity, giving you powerful tools that just work.
            </Typography>

            <Grid container spacing={3} sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)'
              },
              gap: 3
            }}>
              {features.map((feature, index) => (
                <Grid item key={index} sx={{ display: 'flex' }}>
                  <Card
                    sx={{
                      p: 3,
                      bgcolor: 'white',
                      borderRadius: '1rem',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s ease',
                      border: `1px solid ${colors.gray[200]}`,
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column', '&:last-child': { pb: 0 } }}>
                      <Box
                        sx={{
                          p: 1.5,
                          display: 'inline-flex',
                          borderRadius: '50%',
                          bgcolor: colors.primary,
                          color: 'white',
                          mb: 2,
                          width: 'fit-content'
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: colors.gray[900],
                          mb: 1,
                          lineHeight: 1.3
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.gray[600],
                          lineHeight: 1.5,
                          flex: 1
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Key Differentiators Section */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                alignItems: 'flex-start',
                width: '100%'
              }}
            >
              <Box sx={{ flex: '0 0 50%', minWidth: { xs: '100%', md: 0 }, alignSelf: 'stretch', mb: { xs: 4, md: 0 } }}>
                <Box
                  component="img"
                  src="https://placehold.co/600x400/10b981/ffffff?text=Multi-Device+Access+Mockup"
                  alt="HippoMint multi-device access on mobile, tablet, and desktop"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/10b981/ffffff?text=Image+Error';
                  }}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: 2,
                    border: '3px solid',
                    borderColor: 'grey.100'
                  }}
                />
              </Box>

              <Box sx={{ flex: '0 0 50%', minWidth: { xs: '100%', md: 0 }, alignSelf: 'stretch' }}>
                <Stack spacing={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      color: colors.primary,
                      mb: 0.5,
                      fontSize: '0.875rem'
                    }}
                  >
                    ALWAYS AVAILABLE
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: colors.gray[900],
                      fontSize: { xs: '1.75rem', md: '2rem' },
                      lineHeight: 1.2
                    }}
                  >
                    Works in Every Corner of India.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: colors.gray[600],
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: 1.5
                    }}
                  >
                    We know connectivity can be patchy. That's why HippoMint is built to be reliable, secure, and accessible, no matter where you are or what device you're using.
                  </Typography>

                  <Stack spacing={2} sx={{ mt: 1 }}>
                    {Availablefeatures.map((feature, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box sx={{ flexShrink: 0, mr: 2, mt: 0.25 }}>
                          {feature.icon}
                        </Box>

                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 500,
                              color: colors.gray[900],
                              fontSize: '1rem'
                            }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: colors.gray[500],
                              mt: 0.25,
                              fontSize: '0.875rem'
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Perfect For Section */}
        <Box id="use-cases" sx={{ py: 12, bgcolor: colors.background }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center', px: { xs: 2, sm: 3, lg: 4 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.25rem', lg: '2.5rem' },
                fontWeight: 800,
                color: colors.gray[900],
                mb: 1.5
              }}
            >
              Who Is HippoMint For?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.25rem',
                color: colors.gray[500],
                mb: 8,
                maxWidth: '3xl',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              HippoMint is tailor-made for small and medium businesses across India, simplifying operations in various retail sectors.
            </Typography>

            <Grid container spacing={3} sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(5, 1fr)'
              },
              gap: 3
            }}>
              {useCases.map((useCase, index) => (
                <Grid item key={index} sx={{ display: 'flex' }}>
                  <Card
                    sx={{
                      p: 3,
                      bgcolor: 'white',
                      borderRadius: '0.75rem',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      borderTop: `4px solid ${colors.primary}`,
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Typography
                        sx={{
                          fontSize: '2rem',
                          mb: 1
                        }}
                        aria-hidden="true"
                      >
                        {useCase.icon}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          color: colors.gray[900]
                        }}
                      >
                        {useCase.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Final CTA Banner */}
        <Box id="download" sx={{ py: 12, bgcolor: colors.primary }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center', px: { xs: 2, sm: 3, lg: 4 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '2.35rem', lg: '2.55rem', xl: '2.65rem' },
                fontWeight: 800,
                color: 'white',
                mb: 1.5
              }}
            >
              Ready to Simplify Your Billing?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.25rem',
                color: colors.emerald[100],
                mb: 5,
                maxWidth: '3xl',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Stop managing complexity. Start managing growth. Download HippoMint today and transform your business operations.
            </Typography>
            <Button
              onClick={() => scrollToSection('cta-section')}
              sx={{
                bgcolor: 'white',
                color: colors.primary,
                fontWeight: 700,
                fontSize: '1.125rem',
                py: 1.5,
                px: 5,
                borderRadius: '0.75rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                '&:hover': {
                  bgcolor: colors.gray[100],
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.3s ease',
                textTransform: 'none'
              }}
            >
              Download HippoMint Now
            </Button>
          </Container>
        </Box>
      </Box>
      </Box>
      );
};

      export default HippoMintPage;