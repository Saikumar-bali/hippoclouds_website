
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Award, Users, Target, Zap, Globe, TrendingUp, Heart, Lightbulb, Shield } from 'lucide-react';
import {
  LightbulbOutlined,
  SecurityOutlined,
  FavoriteOutlined,
  TrendingUpOutlined,
  PeopleOutlined,
  FlashOnOutlined,
} from '@mui/icons-material';


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

const SectionTitle = ({ children }) => (
  <Typography
    variant="h3"
    component="h2"
    sx={{
      fontSize: { xs: '2.5rem', md: '3rem' },
      fontWeight: 800,
      color: 'grey.900',
      mb: 6,
      textAlign: 'center',
      letterSpacing: '-0.5px',
    }}
  >
    {children}
  </Typography>
);

const coreValues = [
  {
    icon: LightbulbOutlined,
    color: '#667eea', // Indigo/Blue
    title: 'Innovation',
    description: 'Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.',
    tagline: 'Future-First Thinking',
  },
  {
    icon: SecurityOutlined,
    color: '#764ba2', // Purple
    title: 'Integrity',
    description: 'Operating with transparency, honesty, and unwavering commitment to ethical practices.',
    tagline: 'Trust & Transparency',
  },
  {
    icon: FavoriteOutlined,
    color: '#f093fb', // Pink
    title: 'Customer Focus',
    description: 'Prioritizing client success and delivering exceptional value at every touchpoint.',
    tagline: 'Your Success, Our Mission',
  },
  {
    icon: TrendingUpOutlined,
    color: '#42a5f5', // Sky Blue
    title: 'Excellence',
    description: 'Pursuing perfection in every project, service, and interaction with stakeholders.',
    tagline: 'Premium Quality Always',
  },
  {
    icon: PeopleOutlined,
    color: '#66bb6a', // Green
    title: 'Collaboration',
    description: 'Building strong partnerships and fostering a culture of teamwork and shared growth.',
    tagline: 'Together We Achieve More',
  },
  {
    icon: FlashOnOutlined,
    color: '#ffa726', // Orange
    title: 'Agility',
    description: 'Rapidly adapting to market changes and delivering solutions with speed and precision.',
    tagline: 'Fast & Flexible',
  },
];

// New Modern ValueCard Style for Core Values
const ModernValueCard = styled(Card)(({ color }) => ({
  height: '100%',
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

const IconBox = styled(Box)(({ theme, color }) => ({
  width: 64,
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '12px',
  background: `linear-gradient(135deg, ${color} 0%, ${color}dd)`,
  boxShadow: `0 8px 20px ${color}30`,
  marginBottom: 16,
  transition: 'all 0.3s ease',
  color: '#fff',
}));

const StatsBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: '16px',
  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(240, 147, 251, 0.1) 100%)',
  border: '2px solid rgba(102, 126, 234, 0.2)',
}));

const TeamCard = styled(Card)(({ theme }) => ({
  height: '100%',
  width: '550px',
  borderRadius: '20px',
  border: '2px solid #e8eef7',
  background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 20px 50px rgba(102, 126, 234, 0.2)',
    borderColor: '#667eea',
    '.team-avatar': {
      transform: 'scale(1.1)',
      boxShadow: '0 12px 35px rgba(102, 126, 234, 0.4)',
    }
  }
}));

const MissionCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  border: '2px solid #e8eef7',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    right: '-10%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
  },
}));

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    title: 'Founder & CEO',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'Visionary leader with 25+ years in tech innovation, driving digital transformation.',
    specialty: 'Strategic Vision',
  },
  {
    name: 'Priya Sharma',
    title: 'Chief Technology Officer',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Cloud architecture expert specializing in scalable enterprise solutions.',
    specialty: 'Cloud Architecture',
  },
  {
    name: 'Amit Patel',
    title: 'VP of Product Development',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'Product strategist with proven track record in SaaS & enterprise software.',
    specialty: 'Product Strategy',
  },
  {
    name: 'Sneha Gupta',
    title: 'Head of Customer Success',
    avatar: 'https://i.pravatar.cc/150?img=8',
    bio: 'Passionate about building strong client relationships and delivering excellence.',
    specialty: 'Customer Relations',
  },
];

export default function AboutUsPage() {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              About HippoClouds
            </Typography>
            <Typography variant="h5" component="p">
              Innovating the future of digital solutions.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 12 }}>
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={3} sx={{ mb: 12 }}>
            <Grid item xs={12} sm={6} md={3}>
              <StatsBox>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#667eea', mb: 1 }}>500+</Typography>
                <Typography sx={{ fontSize: '1rem', color: '#555' }}>Enterprises Served</Typography>
              </StatsBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsBox>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#764ba2', mb: 1 }}>15+</Typography>
                <Typography sx={{ fontSize: '1rem', color: '#555' }}>Years of Excellence</Typography>
              </StatsBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsBox>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#f093fb', mb: 1 }}>98%</Typography>
                <Typography sx={{ fontSize: '1rem', color: '#555' }}>Client Satisfaction</Typography>
              </StatsBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsBox>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#42a5f5', mb: 1 }}>250+</Typography>
                <Typography sx={{ fontSize: '1rem', color: '#555' }}>Expert Team Members</Typography>
              </StatsBox>
            </Grid>
          </Grid>
        </motion.div>

        {/* Mission & Vision Section */}
        <Grid container spacing={4} sx={{ mb: 12 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MissionCard>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, position: 'relative', zIndex: 1 }}>
                  <Target size={32} color="#667eea" style={{ marginRight: '12px' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
                    Our Mission
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#555', position: 'relative', zIndex: 1 }}>
                  To empower businesses with cutting-edge technology solutions that drive digital transformation, 
                  accelerate innovation, and unlock sustainable growth in the digital economy.
                </Typography>
              </MissionCard>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MissionCard>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, position: 'relative', zIndex: 1 }}>
                  <Globe size={32} color="#764ba2" style={{ marginRight: '12px' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
                    Our Vision
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#555', position: 'relative', zIndex: 1 }}>
                  To be the global leader in cloud-based enterprise solutions, recognized for innovation, reliability, 
                  customer-centricity, and transformative impact across industries.
                </Typography>
              </MissionCard>
            </motion.div>
          </Grid>
        </Grid>

        {/* Values Section */}
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f9fafb', py: 10 }}>
      {/* Centered content box */}
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 1, sm: 2 } }}> 
        
        {/* Header Section */}
        <Box sx={{ mb: 10 }}>
          <SectionTitle>Our Core Values</SectionTitle>
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
            These principles guide every decision we make and every relationship we build with our clients and partners.
          </Typography>
        </Box>

        {/* Values Layout: Switched to Flexbox for rigid 3-column layout */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            // Use negative margin to handle the gap on the items
            mx: -1, 
            justifyContent: 'center' 
          }}
        > 
          {coreValues.map((value, index) => {
            const IconComponent = value.icon;

            return (
              // Individual item box: set to exactly 1/3 width and add margin/padding
              <Box 
                key={index}
                sx={{
                    width: '33.333%', // Enforces 3 columns exactly
                    p: 1, // Padding to create the gap
                    // Simple animation effect using inline style
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                    '@keyframes fadeInUp': {
                        from: { opacity: 0, transform: 'translateY(20px)' },
                        to: { opacity: 1, transform: 'translateY(0)' },
                    },
                }}
              >
                <ModernValueCard color={value.color}>
                  {/* Minimized padding (p: 1) for max compactness */}
                  <CardContent sx={{ position: 'relative', zIndex: 1, p: 2 }}>
                    <ValueIconWrapper color={value.color}>
                      <IconComponent sx={{ fontSize: '28px' }} />
                    </ValueIconWrapper>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: 'grey.900',
                        fontSize: '1.4rem', 
                        lineHeight: 1.3,
                      }}
                    >
                      {value.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '0.75rem', 
                        fontWeight: 600,
                        color: value.color,
                        mb: 1,
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                      }}
                    >
                      {value.tagline}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '0.9rem', 
                        lineHeight: 1.5,
                        color: 'grey.700',
                        fontWeight: 400,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </ModernValueCard>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3">Meet Our Leadership Team</SectionTitle>
          <Typography sx={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', mb: 6, maxWidth: '600px', mx: 'auto' }}>
            Experienced professionals dedicated to driving innovation and excellence across all operations.
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamCard>
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <Avatar
                        src={member.avatar}
                        alt={member.name}
                        sx={{
                          width: 120,
                          height: 120,
                          margin: '0 auto 20px auto',
                          border: '4px solid #667eea',
                          boxShadow: '0 8px 25px rgba(102, 126, 234, 0.2)',
                          transition: 'all 0.3s ease',
                        }}
                        className="team-avatar"
                      />
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a1a', mb: 0.5 }}>
                        {member.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: '#667eea',
                          mb: 1.5,
                          fontSize: '0.95rem',
                        }}
                      >
                        {member.title}
                      </Typography>
                      <Typography sx={{ fontSize: '0.9rem', color: '#666', mb: 1.5, lineHeight: 1.5 }}>
                        {member.bio}
                      </Typography>
                      <Box
                        sx={{
                          display: 'inline-block',
                          px: 2,
                          py: 0.75,
                          borderRadius: '20px',
                          background: 'linear-gradient(135deg, #667eea15, #764ba215)',
                          border: '1px solid #667eea30',
                        }}
                      >
                        <Typography sx={{ fontSize: '0.85rem', color: '#667eea', fontWeight: 600 }}>
                          {member.specialty}
                        </Typography>
                      </Box>
                    </CardContent>
                  </TeamCard>
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
              padding: { xs: 3, md: 6 },
              textAlign: 'center',
              color: '#fff',
              mt: 8,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Join Our Journey
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.9 }}>
              Partner with us to transform your business and achieve digital excellence.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#fff',
                  color: '#667eea',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: '10px',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  }
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#fff',
                  color: '#fff',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: '10px',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
