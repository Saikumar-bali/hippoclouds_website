import React, { useEffect, useState, forwardRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  Avatar,
  useMediaQuery, Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Code, Smartphone, PenTool, Boxes, Shield, UserCheck, Box as BoxIcon, Cloud, Zap, TestTube, LayoutDashboard } from "lucide-react";
import { LayoutGrid, Target, Search, Database } from "lucide-react";

// --- STYLED COMPONENTS ---
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '2.8rem',
  textAlign: 'center',
  marginBottom: '8px',
  color: '#1a1a1a',
  background: 'linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  }
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.15rem',
  color: '#555',
  textAlign: 'center',
  marginBottom: '40px',
  fontWeight: 400,
  letterSpacing: '0.3px',
  lineHeight: '1.6',
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  flexGrow: 1,
  borderRadius: '20px',
  padding: theme.spacing(3),
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  border: '2px solid #e8eef7',
  minHeight: '380px',
  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
    transition: 'left 0.5s ease',
  },
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 20px 50px rgba(66, 165, 245, 0.15)',
    borderColor: '#42a5f5',
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
    '&::before': {
      left: '100%',
    },
  },
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
  }
}));

const UnderlineBar = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '0%',
  height: '3px',
  background: 'linear-gradient(90deg, #42a5f5 0%, #66bb6a 100%)',
  transition: 'width 0.3s ease-in-out',
  borderRadius: '2px',

  '.service-card:hover &': {
    width: '80%',
  }
}));

const ServiceIconWrapper = styled(Box)({
  fontSize: '50px',
  marginBottom: '20px',
  transition: 'transform 0.3s ease, filter 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
    filter: 'drop-shadow(0 8px 15px rgba(66, 165, 245, 0.3))',
  }
});

// Client logos
const clients = [
  { name: "DEAKIN", logo: process.env.PUBLIC_URL + "/Acer_Motors_logo-final.png" },
  { name: "Global Health Care", logo: process.env.PUBLIC_URL + "/Global-Health-Care.jpg" },
  { name: "Nlite", logo: process.env.PUBLIC_URL + "/Nlite.jpg" },
  { name: "Rise", logo: process.env.PUBLIC_URL + "/Rise.jpg" },
  { name: "Sky-lite Technologies", logo: process.env.PUBLIC_URL + "/Sky-lite-Technologies.jpg" },
  { name: "BT-convergence-Technologies", logo: process.env.PUBLIC_URL + "/BT-convergence-Technologies.jpg" },
];

// Service data
const servicesData = [
  {
    icon: Code,
    title: "Web Development",
    color: "rgb(66, 165, 245)",
    description: "We offer a broad spectrum of web development services to fully tap into the capabilities offered by modern web technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    color: "rgb(102, 187, 106)",
    description: "End-to-end mobile apps development, from business analysis, design to testing and deployment or online market publication.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    color: "rgb(255, 152, 0)",
    description: "Comprehensive UI/UX services that include idea to the wireframes, web and mobile app design, consulting, and branding using the latest tools and technologies.",
  },
  {
    icon: Boxes,
    title: "Product Development",
    color: "rgb(0, 150, 136)",
    description: "Full-spectrum product development idea to deployment. Product consultation, Product enhancement, MVP (Minimum Viable Product) and support services with an NDA.",
  },
  {
    icon: Shield,
    title: "Software Testing",
    color: "rgb(236, 64, 122)",
    description: "Quality Assurance (QA) services for Mobile, Website and cloud. Test Automation, Test Process Improvement, Security Testing and Accessibility Testing.",
  },
  {
    icon: UserCheck,
    title: "Hire Dedicated Developers",
    color: "rgb(255, 193, 7)",
    description: "Hire a dedicated developer for your custom software development requirements from a vast pool of our software developers.",
  },
  {
    icon: BoxIcon,
    title: "API Integration & Development",
    color: "rgb(244, 67, 54)",
    description: "Integrate third-party APIs for web, cloud and mobile applications to expand your capabilities with all frameworks and technologies.",
  },
  {
    icon: Cloud,
    title: "Cloud Development",
    color: "rgb(94, 53, 177)",
    description: "Cloud development services for AWS, Azure, Google and IBM cloud which include consulting, development, migration, integration and testing services.",
  },
];

// --- ABSTRACT GRAPHIC COMPONENTS ---
const FloatingDot = ({ size, color, top, left, right, bottom, opacity = 1 }) => (
  <Box
    sx={{
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: color,
      opacity: opacity,
      width: size,
      height: size,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      filter: 'blur(1px)',
      transition: 'transform 1s ease-out',
      zIndex: 1,
    }}
  />
);

const AbstractGraphic = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffsetY(prev => (prev === 0 ? 3 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        minHeight: { xs: '350px', md: '500px' },
        mt: { xs: 4, md: 0 }
      }}>
      {/* Blue Background Blob/Box */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '20px',
          backgroundColor: 'rgb(219, 237, 255, 0.7)',
          boxShadow: '0px 10px 20px rgba(66, 165, 245, 0.2)',
          transition: 'transform 3s ease-in-out',
          transform: `translateY(${offsetY}px)`,
          position: 'relative',
          clipPath: 'polygon(0 0, 100% 0, 100% 95%, 90% 100%, 10% 100%, 0% 95%)',
          zIndex: 2,
        }}
      />

      {/* Floating Elements */}
      <FloatingDot size="20px" color="#90caf9" top="10%" right="5%" />
      <FloatingDot size="15px" color="#a5d6a7" top="25%" right="-5%" opacity={0.5} />
      <FloatingDot size="10px" color="#00bcd4" top="50%" right="95%" />
      <FloatingDot size="18px" color="#64b5f6" bottom="5%" left="15%" opacity={0.8} />
      <FloatingDot size="8px" color="#4caf50" bottom="20%" right="85%" />

      {/* Dotted Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 150,
          height: 150,
          opacity: 0.3,
          backgroundImage: 'radial-gradient(#ddd 1px, transparent 1px)',
          backgroundSize: '10px 10px',
          transform: 'translate(20%, -20%)',
          zIndex: 1,
        }}
      />
    </Box>
  );
};

const TECHNOLOGY_DATA = [
  {
    category: 'Cloud & Devops',
    icon: Cloud,
    heading: 'Cloud & Devops',
    description:
      "We utilize robust cloud solutions like AWS and Azure, paired with DevOps tools such as Docker, Kubernetes, and Jenkins, to ensure scalable, reliable, and continuous deployment for modern applications.",
    technologies: [
      { name: 'AWS', link: '/aws-cloud-services', image: '/technologies/aws.png' },
      { name: 'Google Cloud', link: '/cloud-application-development', image: '/technologies/google_cloud.png' },
      { name: 'Docker', link: '#', image: '/technologies/docker.png' },
      { name: 'Kubernets', link: '#', image: '/technologies/kubernetes.png' },
      { name: 'Jenkins', link: '#', image: '/technologies/jenkins.png' },
      { name: 'Azure', link: '/azure-web-services', image: '/technologies/azure.png' },
    ],
  },

  {
    category: 'Frontend',
    icon: Code,
    heading: 'Frontend',
    description:
      "Our expertise spans leading JavaScript frameworks, including Angular, React, and Vue.js, along with core technologies like Express JS and Knockout JS, to build dynamic, responsive, and high-performance user interfaces.",
    technologies: [
      { name: 'Angular JS', link: '/angular-development', image: '/technologies/angular.png' },
      { name: 'React', link: '/top-reactjs-development-company', image: '/technologies/react.png' },
      { name: 'Vue JS', link: '/vue-js-development', image: '/technologies/vue.png' },
      { name: 'Express JS', link: '#', image: '/technologies/express_js.png' },
      { name: 'Knockout JS', link: '#', image: '/technologies/knockout_js.png' },
      { name: 'Javascript', link: '/javascript-application-development', image: '/technologies/javascript.png' },
    ],
  },

  {
    category: 'Backend',
    icon: Zap,
    heading: 'Backend',
    description:
      "We develop scalable and robust backend systems using powerful server-side languages and runtimes such as .Net, Java, Node JS, PHP, Python, and Ruby, ensuring high performance and data integrity.",
    technologies: [
      { name: '.Net', link: '/dot-net-development', image: '/technologies/dot_net.png' },
      { name: 'Java', link: '/java-development', image: '/technologies/java.png' },
      { name: 'Node JS', link: '/node-js-development', image: '/technologies/node.png' },
      { name: 'PHP', link: '/php-development', image: '/technologies/php.png' },
      { name: 'Python', link: '/python-development-services', image: '/technologies/python.png' },
      { name: 'Ruby', link: '#', image: '/technologies/ruby.png' },
    ],
  },

  {
    category: 'Mobile',
    icon: Smartphone,
    heading: 'Mobile',
    description:
      "We craft native and cross-platform mobile experiences for iOS and Android using frameworks like Flutter, Xamarin, React Native, and Ionic, delivering seamless performance across all devices.",
    technologies: [
      { name: 'Android', link: '/best-android-app-development-company', image: '/technologies/android.png' },
      { name: 'iOS', link: '/ios-app-development-company', image: '/technologies/apple.png' },
      { name: 'Flutter', link: '/flutter-app-development-company', image: '/technologies/flutter.png' },
      { name: 'Xamarin', link: '/xamarin-app-development', image: '/technologies/xamarin.png' },
      { name: 'React Native', link: '/top-react-native-app-development-company', image: '/technologies/react.png' },
      { name: 'Ionic', link: '/hire-ionic-developers', image: '/technologies/ionic.png' },
    ],
  },

  {
    category: 'Microsoft',
    icon: LayoutDashboard,
    heading: 'Microsoft',
    description:
      "We leverage the Microsoft ecosystem, including Sharepoint, PowerApps, Power Automate, Office 365, Teams, and Power BI, to deliver integrated enterprise solutions and streamline business processes.",
    technologies: [
      { name: 'Sharepoint', link: '/sharepoint-development-services', image: '/technologies/sharepoint.png' },
      { name: 'Powerapps', link: '/powerapps-development-company', image: '/technologies/powerapp.png' },
      { name: 'Power Automate', link: '/power-automate-services', image: '/technologies/power_automate.png' },
      { name: 'Office 365', link: '#', image: '/technologies/office365.png' },
      { name: 'Teams', link: '#', image: '/technologies/teams.png' },
      { name: 'Power BI', link: '/power-bi-consulting-services', image: '/technologies/power_bi.png' },
    ],
  },

  {
    category: 'Database',
    icon: Database,
    heading: 'Database',
    description:
      "Our database expertise covers relational and NoSQL systems like MsSQL, PostgreSQL, MySQL, MongoDB, Cassandra, and Oracle, ensuring optimal data management and reliable transaction handling.",
    technologies: [
      { name: 'MsSQL', link: '#', image: '/technologies/microsoft_sql.png' },
      { name: 'PostgreSQL', link: '#', image: '/technologies/postgresql.png' },
      { name: 'MySQL', link: '#', image: '/technologies/mysql.png' },
      { name: 'Mongo DB', link: '/mongodb-development-services', image: '/technologies/mongo.png' },
      { name: 'Cassandra', link: '#', image: '/technologies/cassandra.png' },
      { name: 'Oracle', link: '#', image: '/technologies/oracle.png' },
    ],
  },

  {
    category: 'Testing',
    icon: TestTube,
    heading: 'Testing',
    description:
      "We test web applications on multiple browsers and platforms using Selenium, an open-source framework for automating web browsers...",
    technologies: [
      { name: 'Katalon', link: '#', image: '/technologies/katalon.png' },
      { name: 'Selenium', link: '#', image: '/technologies/selenium.png' },
      { name: 'Apache JMeter', link: '#', image: '/technologies/apache_jmeter.png' },
      { name: 'Jira', link: '#', image: '/technologies/jira.png' },
      { name: 'Postman', link: '#', image: '/technologies/postman.png' },
      { name: 'BrowserStack', link: '#', image: '/technologies/browserstack.png' },
    ],
  },
];


// --- 2. STYLED COMPONENTS (MIMICKING ORIGINAL CSS) ---

// Custom styled Paper for the tech cards
const TechCard = styled(Paper)(({ theme, color }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(3),
  height: '100%',
  borderRadius: theme.spacing(2),
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
  border: '2px solid transparent',
  background: 'linear-gradient(135deg, #fafbfc 0%, #ffffff 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${color}15 0%, transparent 100%)`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 15px 40px ${color}25, 0 8px 20px rgba(0, 0, 0, 0.1)`,
    borderColor: color,
    '&::before': {
      opacity: 1,
    },
    '.tech-icon-box': {
      transform: 'scale(1.15) rotateY(10deg)',
      boxShadow: `0 10px 30px ${color}50`,
    },
  },
  '.tech-icon-box': {
    width: 64,
    height: 64,
    marginBottom: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: color,
    boxShadow: `0 4px 15px ${color}40`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    zIndex: 1,
  },
  '.tech-name': {
    fontWeight: 600,
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
    transition: 'color 0.3s ease',
    position: 'relative',
    zIndex: 1,
  },
}));

// Custom styling for the filter buttons
const FilterButton = styled(Button)(({ theme, active }) => ({
  borderRadius: 8,
  margin: theme.spacing(0.5),
  padding: theme.spacing(1, 2),
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '0.875rem',
  color: active ? theme.palette.common.white : theme.palette.text.primary,
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[100],
  boxShadow: active ? theme.shadows[4] : 'none',
  transition: 'background-color 0.3s, box-shadow 0.3s',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.grey[200],
    boxShadow: active ? theme.shadows[6] : 'none',
  },
  // Replicating NewTechnologies_tabdiv__OnF0D and NewTechnologies_filter-btn__9tcbs
}));

// --- MAIN COMPONENT ---
const ProductCards = forwardRef((props, ref) => {
  const [activeCategory, setActiveCategory] = useState('Testing');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  const activeData = TECHNOLOGY_DATA.find(d => d.category === activeCategory);
  if (!activeData) {
    return <Container>Loading...</Container>;
  }

  const IconComponent = activeData.icon;

  const features = [
    {
      icon: LayoutGrid,
      title: "Uniquely crafted websites",
      description:
        "Our designs are created from scratch. We create wireframe sketches, design concepts then finished layouts for each project.",
    },
    {
      icon: Target,
      title: "Goal focused",
      description:
        "You might want to be generating new sales leads, converting sales or just getting eyes on your brand. We'll track that progress.",
    },
    {
      icon: Search,
      title: "Search engine optimised",
      description:
        "We use best practice techniques to ensure your content is indexed correctly and sees targeted, organic traffic flowing to your business.",
    },
  ];

  // Individual feature card
  const FeatureCard = ({ icon: Icon, title, description, isLast }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        py: { xs: 2, sm: 2.5 },
        px: { xs: 2, sm: 3 },
        borderBottom: !isLast ? "1px solid #e5e7eb" : "none",
        borderRadius: 2,
        transition: "background-color 0.2s ease, transform 0.15s ease",
        "&:hover": {
          backgroundColor: "rgba(25, 118, 210, 0.05)",
          transform: "translateY(-1px)",
        },
        mx: -4,
        cursor: "pointer",
      }}
    >
      {/* Icon Container */}
      <Avatar
        variant="circular"
        sx={{
          width: 48,
          height: 48,
          bgcolor: "rgba(25,118,210,0.1)",
          border: "1px solid rgba(25,118,210,0.25)",
          color: "primary.main",
          boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mr: 2.5,
        }}
      >
        <Icon size={22} strokeWidth={2} />
      </Avatar>

      {/* Text Section */}
      <Box flex={1}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          color="text.primary"
          sx={{
            fontSize: { xs: '1rem', sm: '1.05rem', md: '0.95rem', lg: '1.25rem', xl: '1.3rem' },
            mb: 0.5,
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '0.8', lg: '1.55rem', xl: '1.65rem' },
            lineHeight: 1.6,
            fontSize: "0.95rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );




  return (
    <Box sx={{ fontFamily: 'Inter, sans-serif' }}>
      {/* CLIENTS AND SERVICES SECTION */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        {/* Clients Section */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle>Our Trusted Partners</SectionTitle>
          <SectionSubtitle>
            We collaborate with industry leaders to deliver exceptional results
          </SectionSubtitle>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.2)',
                p: 4,
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              }}
            >
              <Slider
                dots={false}
                arrows={false}
                infinite
                speed={5000}
                autoplay
                pauseOnHover={true}
                autoplaySpeed={0}
                cssEase="linear"
                slidesToShow={5}
                slidesToScroll={1}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 4,
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 3,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                ]}
              >
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box sx={{ px: 2, textAlign: 'center', py: 1 }}>
                      <Box
                        component="img"
                        src={client.logo}
                        alt={client.name}
                        sx={{
                          maxWidth: '100%',
                          height: 'auto',
                          maxHeight: 80,
                          display: 'block',
                          margin: '0 auto',
                          transition: 'all 0.3s ease',
                          filter: 'grayscale(100%)',
                          opacity: 0.7,
                          '&:hover': {
                            filter: 'grayscale(0%)',
                            opacity: 1,
                          }
                        }}
                      />
                    </Box>
                  </motion.div>
                ))}
              </Slider>
            </Box>
          </motion.div>
        </Box>

        {/* Services Section with ref */}
        <Box
          ref={ref}
          sx={{
            fontFamily: 'Inter, sans-serif',
            backgroundImage: `radial-gradient(#d1d1d1 0.5px, transparent 0.5px), radial-gradient(#d1d1d1 0.5px, #ffffff 0.5px)`,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 15px 15px',
            py: { xs: 8, md: 16 },
          }}
        >
          <Container maxWidth="lg">
            {/* Header Section */}
            <Box sx={{ mb: { xs: 6, md: 10 } }}>
              <SectionTitle>
                Our Services
              </SectionTitle>
              <SectionSubtitle sx={{ mb: 1 }}>
                We offer comprehensive services to develop digital solutions & manage complete product lifecycle.
              </SectionSubtitle>
              <SectionSubtitle sx={{ mt: 0 }}>
                We've robust work history with diverse business services.
              </SectionSubtitle>
            </Box>

            {/* Services Grid */}
            <Grid
              container
              spacing={4}
              sx={{
                '@media (min-width: 900px)': {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '32px',
                }
              }}
            >
              {servicesData.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ width: '100%' }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{
                      display: 'flex',
                      '@media (min-width: 900px)': {
                        padding: '0 !important',
                      }
                    }}
                  >
                    <ServiceCard className="service-card">
                      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                        {/* Icon Wrapper */}
                        <Box
                          sx={{
                            width: '56px',
                            height: '56px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                            borderRadius: '12px',
                            mb: 2,
                            boxShadow: `0 8px 20px ${service.color}30`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'rotate(10deg) scale(1.1)',
                              boxShadow: `0 12px 30px ${service.color}50`,
                            }
                          }}
                        >
                          <service.icon size={30} strokeWidth={1.5} style={{ color: '#ffffff' }} />
                        </Box>

                        {/* Title */}
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: '#1a1a1a',
                            mb: 1.5,
                            fontSize: '1.2rem',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {service.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#666',
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                            flexGrow: 1,
                            fontWeight: 400,
                          }}
                        >
                          {service.description}
                        </Typography>
                      </CardContent>

                      {/* Button (Explore Service) */}
                      <Button
                        variant="contained"
                        disableElevation
                        endIcon={
                          <Box
                            component="span"
                            sx={{
                              ml: 1,
                              transition: 'transform 0.3s ease-in-out',
                              color: 'white',
                              display: 'inline-flex',
                              alignItems: 'center',
                            }}
                          >
                            →
                          </Box>
                        }
                        sx={{
                          mt: 3,
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                          color: 'white',
                          borderRadius: '10px',
                          padding: '10px 20px',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          width: 'fit-content',
                          boxShadow: `0 6px 15px ${service.color}40`,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: `0 10px 25px ${service.color}60`,
                            '& .MuiButton-endIcon > span': {
                              transform: 'translateX(5px)',
                            }
                          },
                        }}
                        onClick={() => console.log(`Exploring ${service.title}`)}
                      >
                        Learn More
                      </Button>

                      {/* Underline Bar - appears on card hover */}
                      <UnderlineBar />
                    </ServiceCard>
                  </Grid>
                </motion.div>
              ))}
            </Grid>
          </Container>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ mt: -5 }}>
        {/* Header Section */}
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ fontSize: { xs: "26px", md: "32px" } }}
            >
              Technologies We Work With
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: "auto",
                mt: 1,
                fontSize: "15px",
              }}
            >
              We work on wide range of tools and technologies to cater client business
              requirement for existing project or new application.
            </Typography>
          </Grid>
        </Grid>

        {/* Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
            mt: 4,
            mb: 5,
          }}
        >
          {TECHNOLOGY_DATA.map(({ category }) => (
            <FilterButton
              key={category}
              active={category === activeCategory ? 1 : 0}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </Box>

        {/* CONTENT SECTION (EXACTLY LIKE YOUR IMAGE) */}
        <Box
          sx={{
            background: "#f8f8f8",
            borderRadius: "18px",
            p: { xs: 2, md: 4 },
            boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
          }}
        >
          <Grid container spacing={4}>
            {/* LEFT SIDE TEXT */}
            <Grid item xs={12} md={4}>
              <Box sx={{ pr: { md: 3 } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <IconComponent
                    size={30}
                    color={theme.palette.primary.main}
                    style={{ marginRight: 10 }}
                  />
                  <Typography variant="h5" fontWeight={700}>
                    {activeData.heading}
                  </Typography>
                </Box>

                <Typography
                  color="text.secondary"
                  sx={{ fontSize: "15px", lineHeight: 1.55, mt: 1 }}
                >
                  {activeData.description}
                </Typography>
              </Box>
            </Grid>

            {/* RIGHT SIDE CARDS (PIXEL PERFECT GRID) */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                {activeData.technologies.slice(0, 6).map((tech, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <Box
                      sx={{
                        background: "#fff",
                        borderRadius: "16px",
                        p: 3,
                        textAlign: "center",
                        minHeight: 70,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "0.25s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                        },
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + tech.image}
                        alt={tech.name}
                        style={{
                          width: 100,
                          height: 100,
                          objectFit: "contain",
                          marginBottom: 12,
                        }}
                      />

                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "15px",
                          color: "#000",
                        }}
                      >
                        {tech.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>


      {/* Free up time section */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 8, md: 16 },
          minHeight: { xs: 'auto', md: '80vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Left Content Area (Text) */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '500px' }, pr: { xs: 0, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}>

            {/* Green Accent Line */}
            <Box
              sx={{
                height: '4px',
                width: '40px',
                backgroundColor: '#4caf50',
                mb: 3,
                borderRadius: '9999px',
                mx: { xs: 'auto', md: '0' }
              }}
            />

            {/* Headline */}
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                lineHeight: 1.1,
                mb: 2,
                color: '#333333'
              }}
            >
              Free up time, become more agile grow your business.
            </Typography>

            {/* Subtext */}
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: '#666666',
                mb: 4,
                maxWidth: '450px',
                mx: { xs: 'auto', md: '0' }
              }}
            >
              Our team will help you navigate through the digital world so you don't get tied down in technical complexities. You can then focus on what you love about your business and continue to grow it.
            </Typography>

            {/* Gradient Button */}
            <Button
              variant="contained"
              disableElevation
              sx={{
                background: 'linear-gradient(90deg, #ff8a80 0%, #ff4081 100%)',
                color: 'white',
                borderRadius: '12px',
                padding: '12px 32px',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                boxShadow: '0 4px 10px rgba(255, 64, 129, 0.4)',
                transition: 'all 0.3s',
                '&:hover': {
                  background: 'linear-gradient(90deg, #ff6e6e 0%, #ff2972 100%)',
                  transform: 'scale(1.03)',
                  boxShadow: '0 6px 12px rgba(255, 64, 129, 0.5)',
                },
                '&:active': {
                  transform: 'scale(0.98)',
                }
              }}
              onClick={() => console.log('Get Started Clicked')}
            >
              GET STARTED FREE
            </Button>
          </Box>

          {/* Right Graphic Area */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <AbstractGraphic />
          </Box>
        </Box>
      </Container>

      {/* Serious business section */}
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "grey.50",
          fontFamily: "Roboto, sans-serif",
          py: { xs: 4, sm: 10 },
        }}
      >
        <Container maxWidth="lg">
          {/* Content Grid */}
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="flex-start">
            {/* Left: Feature List */}
            <Box flex={{ md: 1 }} pr={{ md: 4 }}>
              {/* Header Section */}
              <Box maxWidth="600px" mb={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h8"
                  sx={{
                    fontWeight: 700,
                    color: "grey.900",
                    mb: 1,
                    lineHeight: 1.2,
                    fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.5rem" },
                    letterSpacing: "-0.02em",
                  }}
                >
                  Serious business requires a seriously good website
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", fontSize: "1rem", mt: 2 }}>
                  Your website is the base camp for all of your digital marketing. It needs to be awesome.
                </Typography>
              </Box>

              <Card
                elevation={6}
                sx={{
                  borderRadius: 4, p: { xs: 3, sm: 4 }, border: "1px solid #f0f0f0", maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "650px", xl: "700px" },
                  height: { xs: "auto", sm: "auto", md: "430px", lg: "450px", xl: "500px" }
                }}
              >

                <CardContent sx={{ p: 0, mt: { xs: 2, sm: 3, md: -4, lg: 0, xl: 6 } }}>
                  {features.map((feature, index) => (
                    <FeatureCard
                      key={feature.title}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      isLast={index === features.length - 1}
                    />
                  ))}
                </CardContent>
              </Card>
            </Box>

            {/* Right: Static Image */}
            <Box flex={{ md: 1 }} pl={{ md: 4 }} mt={{ xs: 4, md: 30, lg: 25 }}
              component="img"
              src={process.env.PUBLIC_URL + "/website_illustration.png"}
              alt="Professional illustration of website layouts"
              sx={{
                width: "50%",
                height: { xs: "auto", sm: "auto", md: "500px", lg: "520px", xl: "500px" },
                objectFit: "contain",
                borderRadius: 3,
                mb: 2,
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Obsessed with growth section */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 8, md: 16 },
          minHeight: { xs: 'auto', md: '80vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Right Content Area (Text) */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: '100%', md: '500px' },
              pl: { xs: 0, md: 8 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {/* Green Accent Line */}
            <Box
              sx={{
                height: '4px',
                width: '40px',
                backgroundColor: '#4caf50',
                mb: 3,
                borderRadius: '9999px',
                mx: { xs: 'auto', md: '0' },
              }}
            />

            {/* Headline */}
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                lineHeight: 1.1,
                mb: 2,
                color: '#333333',
              }}
            >
              we're obsessed with generating online growth for our clients
            </Typography>

            {/* Subtext */}
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: '#666666',
                mb: 4,
                maxWidth: '450px',
                mx: { xs: 'auto', md: '0' },
              }}
            >
              we love to partner with businesses that want to grow with Pixeld as your 'digital marketing wingman', we discover ways to generate new leads and delight existing ones.
            </Typography>

            {/* Gradient Button */}
            <Button
              variant="contained"
              disableElevation
              sx={{
                background: 'linear-gradient(90deg, #ff8a80 0%, #ff4081 100%)',
                color: 'white',
                borderRadius: '12px',
                padding: '12px 32px',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                boxShadow: '0 4px 10px rgba(255, 64, 129, 0.4)',
                transition: 'all 0.3s',
                '&:hover': {
                  background: 'linear-gradient(90deg, #ff6e6e 0%, #ff2972 100%)',
                  transform: 'scale(1.03)',
                  boxShadow: '0 6px 12px rgba(255, 64, 129, 0.5)',
                },
                '&:active': {
                  transform: 'scale(0.98)',
                },
              }}
              onClick={() => console.log('Get Started Clicked')}
            >
              GET STARTED FREE
            </Button>
          </Box>

          {/* Left Graphic Area */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <AbstractGraphic />
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

export default ProductCards;