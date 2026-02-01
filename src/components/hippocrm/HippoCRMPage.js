import React, { useState, useEffect, useRef } from 'react';
import {
  Box, Typography, Container, Button, Grid, Paper, Card, CardContent, useTheme, useMediaQuery, IconButton, Chip,
  Slide, Fade, Grow, alpha, Zoom, Stepper, StepLabel, Dialog, DialogTitle, DialogContent, DialogActions, Step
} from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUpIcon, FollowTheSignsIcon, PeopleIcon, AssignmentIcon } from '../ui/icon';

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
const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  background: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.3)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
}));

const OurWorksSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)',
    zIndex: 1,
  }
}));

const IndicatorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  marginTop: '16px',
}));

const Indicator = styled(Box)(({ active, theme }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: active ? '#fff' : 'rgba(255,255,255,0.5)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#fff',
    transform: 'scale(1.2)',
  },
}));


// --- Feature Data ---
const featureData = [
  {
    id: "leads",
    icon: TrendingUpIcon,
    title: "Leads Management",
    color: "#16A34A", // Tailwind green-600
    highlights: ["Bulk Upload", "Auto-assign", "Multi-channel"],
    features: [
      "Capture leads manually or via bulk insertion (Excel/CSV)",
      "Automatic lead assignment based on rules",
      "Master-driven fields for consistency",
      "Track lead stages: New → Contacted → Qualified → Converted",
      "Email & WhatsApp integration",
      "Column customization for better visibility",
    ],
  },
  {
    id: "followups",
    icon: FollowTheSignsIcon,
    title: "Follow-Ups Management",
    color: "#CA8A04", // Tailwind yellow-600
    highlights: ["Automated", "Multi-channel", "Trackable"],
    features: [
      "Schedule and track follow-ups for leads and clients",
      "Assign follow-ups to employees",
      "Automatic alerts via Email/WhatsApp",
      "Send follow-up summary PDFs",
      "Full history tracking",
      "Column customization available",
    ],
  },
  {
    id: "clients",
    icon: PeopleIcon,
    title: "Client Management",
    color: "#2563EB", // Tailwind blue-600
    highlights: ["Complete Profiles", "PDF Generation", "Integrated"],
    features: [
      "Complete client profiles with contacts and billing info",
      "Manage linked follow-ups, tasks, and services",
      "Generate quotations in PDF format",
      "Send via Email/WhatsApp",
      "Column customization for personalized views",
    ],
  },
  {
    id: "tasks",
    icon: AssignmentIcon,
    title: "Task Management",
    color: "#DC2626", // Tailwind red-600
    highlights: ["Master-driven", "Trackable", "Alerts"],
    features: [
      "Assign tasks to employees for leads, clients, or services",
      "Master-driven selection for priorities and statuses",
      "Track task progress from creation to completion",
      "Automatic alerts via Email/WhatsApp",
      "Column customization for table views",
    ],
  },
  {
    id: "services",
    icon: PeopleIcon,
    title: "Services Management",
    color: "#9333EA", // Tailwind purple-600
    highlights: ["Categorized", "Linked", "Reportable"],
    features: [
      "Manage and categorize services using Masters",
      "Link services to tasks and invoices",
      "Generate PDF reports for clients",
      "Send reports via Email or WhatsApp",
      "Column customization available",
    ],
  },
  {
    id: "employees",
    icon: PeopleIcon,
    title: "Employees Management",
    color: "#F97316", // Tailwind orange-500
    highlights: ["Dynamic Roles", "Configurable", "Integrated"],
    features: [
      "Create employees with dynamic roles and permissions",
      "Assign departments and designations",
      "Email alert toggle ON/OFF per employee",
      "Participate in automatic lead assignment",
      "Task allocation rules",
    ],
  },
];

// --- FeatureCard Component ---
const FeatureCards = ({ icon: Icon, title, color, features, highlights }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        border: "1px solid #f0f0f0",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
          transform: "translateY(-3px)",
        },
        height: "100%",
      }}
    >
      <CardContent sx={{ p: 3, display: "flex", flexDirection: "column" }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Icon style={{ color, width: 40, height: 40, marginRight: 16 }} />
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            {title}
          </Typography>
        </Box>

        {/* Highlights */}
        <Box mb={2} display="flex" flexWrap="wrap" gap={1}>
          {highlights.map((h, i) => (
            <Chip
              key={i}
              label={h}
              size="small"
              sx={{
                fontWeight: 500,
                color,
                backgroundColor: `${color}1A`, // Transparent background
                fontSize: "0.75rem",
              }}
            />
          ))}
        </Box>

        {/* Feature list */}
        <Box component="ul" sx={{ pl: 2, color: "text.secondary", fontSize: 14 }}>
          {features.slice(0, 4).map((f, i) => (
            <li key={i}>{f}</li>
          ))}
          {features.length > 4 && (
            <li style={{ fontStyle: "italic", fontWeight: 500, marginTop: 8 }}>
              ...and {features.length - 4} more features.
            </li>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};


function HippoCRMPage() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [activeFeature, setActiveFeature] = useState(null);
  const [animated, setAnimated] = useState(false);
  const imageContainerRef = useRef(null);



  useEffect(() => {
    setAnimated(true);
  }, []);

  // --- Feature Data (Adapted from MUI structure to React/Tailwind) ---



  const images = [
    { img: process.env.PUBLIC_URL + '/hippo_crm/1.jpg', title: 'Dashboard Overview' },
    { img: process.env.PUBLIC_URL + '/hippo_crm/2.jpg', title: 'Customer Management' },
    { img: process.env.PUBLIC_URL + '/hippo_crm/3.jpg', title: 'Sales Pipeline' },
    { img: process.env.PUBLIC_URL + '/hippo_crm/4.jpg', title: 'Analytics Dashboard' },
    { img: process.env.PUBLIC_URL + '/hippo_crm/5.jpg', title: 'Marketing Automation' },
  ];

  const features = [
    {
      icon: <svg fill="#a97979" width="64px" height="64px" viewBox="-102.4 -102.4 1228.80 1228.80" xmlns="http://www.w3.org/2000/svg" stroke="#a97979" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.048"></g><g id="SVGRepo_iconCarrier"><path d="M136.948 908.811c5.657 0 10.24-4.583 10.24-10.24V610.755c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v287.816c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V610.755c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v287.816c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.96c5.657 0 10.24-4.583 10.24-10.24V551.322c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v347.249c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V551.322c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v347.249c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.342c5.657 0 10.24-4.583 10.24-10.24V492.497c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v406.692c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V492.497c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v406.692c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.958c5.657 0 10.24-4.583 10.24-10.24V441.299c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v457.892c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V441.299c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v457.892c0 28.278-22.922 51.2-51.2 51.2zm-6.205-841.902C677.379 271.088 355.268 367.011 19.245 387.336c-11.29.683-19.889 10.389-19.206 21.679s10.389 19.889 21.679 19.206c342.256-20.702 670.39-118.419 964.372-284.046 9.854-5.552 13.342-18.041 7.79-27.896s-18.041-13.342-27.896-7.79z"></path><path d="M901.21 112.64l102.39.154c11.311.017 20.494-9.138 20.511-20.449s-9.138-20.494-20.449-20.511l-102.39-.154c-11.311-.017-20.494 9.138-20.511 20.449s9.138 20.494 20.449 20.511z"></path><path d="M983.151 92.251l-.307 101.827c-.034 11.311 9.107 20.508 20.418 20.542s20.508-9.107 20.542-20.418l.307-101.827c.034-11.311-9.107-20.508-20.418-20.542s-20.508 9.107-20.542 20.418z"></path></g></svg>,
      title: 'Sales Automation',
      description: 'Automate your sales process from lead generation to deal closure. Track opportunities, manage contacts, and forecast sales with ease.',

    },
    {
      icon: <svg
        width="65px"
        height="65px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        fill="#bd9898"
      >
        <g id="SVGRepo_iconCarrier">
          <g id="Layer_2">
            <g>
              <path d="M12,8c1.9,0,3.5,1.3,3.9,3.1c0.1,0.5,0.7,0.9,1.2,0.7c0.5-0.1,0.9-0.7,0.7-1.2C17.2,7.8,14.8,6,12,6c-3.3,0-6,2.7-6,6 c0,3.1,2.4,5.7,5.5,6c0,0,0.1,0,0.1,0c0.5,0,0.9-0.4,1-0.9c0.1-0.5-0.4-1-0.9-1.1c-2-0.2-3.7-2-3.7-4C8,9.8,9.8,8,12,8z" />
              <path d="M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8c4.2,0,7.7,3.3,8,7.5c0,0.6,0.5,1,1.1,0.9c0.6,0,1-0.5,0.9-1.1C21.6,6.1,17.3,2,12,2 C6.5,2,2,6.5,2,12s4.5,10,10,10c0.6,0,1-0.4,1-1S12.6,20,12,20z" />
              <path d="M21.3,14.5c-0.1-0.1-0.3-0.2-0.4-0.2l-6.5-2.2c-0.6-0.2-1.3,0-1.8,0.5c-0.5,0.5-0.6,1.2-0.3,1.8l3,6.6 c0.3,0.6,0.9,1,1.5,1c0.1,0,0.2,0,0.3,0c0.8-0.1,1.3-0.7,1.4-1.5l0.3-2.4l2-0.6c0.6-0.2,1.1-0.7,1.2-1.4 C22.1,15.5,21.8,14.8,21.3,14.5z M18.1,16.2c-0.7,0.2-1.1,0.7-1.2,1.4l-0.2,1.5l-2.2-4.9l4.8,1.6L18.1,16.2z" />
            </g>
          </g>
        </g>
      </svg>,
      title: 'Marketing Campaigns',
      description: 'Design and execute targeted marketing campaigns. Segment your audience, send personalized emails, and analyze campaign performance.',
    },
    {
      icon: '💬',
      title: 'Customer Service',
      description: 'Provide exceptional customer support with integrated ticketing, knowledge base, and live chat. Resolve issues faster and improve customer satisfaction.',
      color: '#f093fb'
    },
    {
      icon: '📊',
      title: 'Analytics & Reporting',
      description: 'Gain insights into your customer data with customizable dashboards and reports. Make data-driven decisions to grow your business.',
      color: '#4facfe'
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };
  useEffect(() => {
    const container = imageContainerRef.current;

    const handleClick = (e) => {
      // prevent double toggle when clicking the button itself
      if (e.target.closest("button")) return;
      if (autoPlay) toggleAutoPlay();
    };

    if (container) container.addEventListener("click", handleClick);
    return () => container?.removeEventListener("click", handleClick);
  }, [autoPlay, toggleAutoPlay]);
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{
            position: 'absolute',
            left: 0,
            top: '25%',
            bottom: '25%',
            width: '6px',
            background: 'linear-gradient(to bottom, #667eea, #764ba2)',
            borderRadius: '3px'
          }} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ ml: 4, textAlign: 'left' }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              HippoCRM
            </Typography>
            <Typography variant="h5" component="p" sx={{ mb: 3, opacity: 0.9 }}>
              Streamline your sales, marketing, and customer service with our powerful CRM solution.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
                  boxShadow: '0 15px 25px rgba(0,0,0,0.3)',
                }
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
              Powerful Features
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index} sx={{ display: 'flex' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ width: 450 }}
                  >
                    <FeatureCard sx={{ width: '100%', height: '100%' }}>
                      <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Box
                            sx={{
                              fontSize: '2.5rem',
                              mr: 2,
                              background: `linear-gradient(45deg, ${feature.color}, ${feature.color}dd)`,
                              width: '60px',
                              height: '60px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: `0 5px 15px ${feature.color}40`
                            }}
                          >
                            {feature.icon}
                          </Box>
                          <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                            {feature.title}
                          </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, flexGrow: 1 }}>
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </FeatureCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </ContentSection>

      <OurWorksSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
              See HippoCRM in Action
            </Typography>

            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6} >
                <ImageContainer>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex].img}
                        alt={images[currentImageIndex].title}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </AnimatePresence>

                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: 2,
                      zIndex: 2
                    }}>
                      <IconButton
                        onClick={handlePrevImage}
                        sx={{
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.3)',
                          }
                        }}
                      >
                        <ArrowBackIosIcon />
                      </IconButton>

                      <Box
                        ref={imageContainerRef}
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                        }}
                      >
                        {/* Your image or content goes here */}
                        {/* Example: <img src={process.env.PUBLIC_URL + "/your-image.jpg"} alt="Slide" style={{ width: '100%' }} /> */}

                        <IconButton
                          onClick={toggleAutoPlay}
                          sx={{
                            position: "absolute",
                            bottom: 16,
                            right: 16,
                            backgroundColor: "transparent",
                            color: "inherit",
                            "&:hover": {
                              backgroundColor: "rgba(255,255,255,0.1)",
                            },
                          }}
                        >
                          {/* <PlayArrowIcon /> */}
                        </IconButton>
                      </Box>

                      <IconButton
                        onClick={handleNextImage}
                        sx={{
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.3)',
                          }
                        }}
                      >
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </Box>

                    <Box sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: 0,
                      right: 0,
                      zIndex: 2
                    }}>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{
                          color: 'white',
                          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                          fontWeight: 'bold'
                        }}
                      >
                        {images[currentImageIndex].title}
                      </Typography>
                    </Box>
                  </Box>

                  <IndicatorContainer>
                    {images.map((_, index) => (
                      <Indicator
                        key={index}
                        active={index === currentImageIndex}
                        onClick={() => handleIndicatorClick(index)}
                      />
                    ))}
                  </IndicatorContainer>
                </ImageContainer>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Transform Your Business
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7, opacity: 0.9 }}>
                    Discover how HippoCRM empowers businesses to build stronger customer relationships and drive growth.
                    Our intuitive interface and powerful features are designed to meet your unique needs.
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                      Key Benefits:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {['Enhanced Customer Engagement', 'Improved Sales Performance', 'Streamlined Marketing', 'Actionable Insights'].map((benefit, index) => (
                        <Chip
                          key={index}
                          label={benefit}
                          sx={{
                            background: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.3)',
                            backdropFilter: 'blur(10px)',
                            fontWeight: 'bold',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: 'white',
                      borderColor: 'white',
                      borderRadius: '50px',

                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderColor: 'white',
                      }
                    }}
                  >
                    View Case Studies
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </OurWorksSection>

      <Box sx={{ bgcolor: "#F9FAFB", minHeight: "100vh", py: { xs: 4, md: 8 }, px: { xs: 2, sm: 4 } }}>
        <Box maxWidth="lg" mx="auto">
          <Typography
            variant="h4"
            fontWeight="bold"
            color="text.primary"
            mb={6}
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            Powerful Features
          </Typography>
          <Grid
            container
            spacing={{ xs: 3, sm: 4, md: 6 }}
            justifyContent="center"
            alignItems="stretch"
            sx={{
              mt: { xs: 4, sm: 6 },
              mb: { xs: 6, sm: 10 },
            }}
          >
            {featureData.map((f) => (
              <Grid
                item
                key={f.id}
                xs={12}    // 1 card per row on mobile
                sm={6}     // 2 cards per row on tablets
                md={4}     // 3 cards per row on desktop (like your original)
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 360, // controls consistent width (matches your original)
                    height: "100%",
                    display: "flex",
                  }}
                >
                  <FeatureCards {...f} />
                </Box>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>
    </Box>
  );
}

export default HippoCRMPage;
