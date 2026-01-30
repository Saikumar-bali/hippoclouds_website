import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button, Avatar, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { BrainCircuit, Code, Rocket, ChevronRight, UserCheck, BookOpen, Award } from 'lucide-react';

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

const StatsBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(3),
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(240, 147, 251, 0.1) 100%)',
    border: '2px solid rgba(102, 126, 234, 0.2)',
}));

const trainings = [
  {
    icon: BrainCircuit,
    color: '#667eea',
    title: 'AI & Machine Learning',
    description: 'Master the fundamentals of AI and ML with hands-on projects and real-world datasets.',
  },
  {
    icon: Code,
    color: '#764ba2',
    title: 'Full-Stack Web Development',
    description: 'Become a certified full-stack developer by learning the MERN stack and building complex applications.',
  },
  {
    icon: Rocket,
    color: '#f093fb',
    title: 'DevOps & Cloud Computing',
    description: 'Learn to build, deploy, and manage scalable applications on AWS, Azure, and Google Cloud.',
  },
];

const projects = [
    {
      image: '/hippo_crm/1.jpg',
      title: 'HippoCRM',
      description: 'A comprehensive CRM platform for managing customer relationships and sales pipelines.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      image: '/hippo_mint/1.png',
      title: 'HippoMint',
      description: 'An NFT marketplace for creating, buying, and selling digital assets.',
      tags: ['React', 'Solidity', 'IPFS'],
    },
    {
      image: '/hippo_tripzone/1.jpg',
      title: 'HippoTripZone',
      description: 'A travel and tourism platform for booking flights, hotels, and tours.',
      tags: ['Angular', 'Java', 'PostgreSQL'],
    },
  ];

const instructors = [
    {
        name: 'Dr. Evelyn Reed',
        title: 'Lead AI Instructor',
        avatar: 'https://i.pravatar.cc/150?img=2',
        specialty: 'Machine Learning',
    },
    {
        name: 'Johnathan Chen',
        title: 'Full-Stack Guru',
        avatar: 'https://i.pravatar.cc/150?img=3',
        specialty: 'MERN Stack',
    },
    {
        name: 'Maria Garcia',
        title: 'Cloud Architect',
        avatar: 'https://i.pravatar.cc/150?img=4',
        specialty: 'AWS & DevOps',
    },
];

const ModernCard = styled(Card)(({ color }) => ({
    height: '100%',
    borderRadius: 12,
    minWidth: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    border: '1px solid #f0f0f0',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: `0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 5px 15px -5px ${color ? `${color}30` : 'rgba(0,0,0,0.1)'}`,
      backgroundColor: color ? `${color}08` : 'transparent',
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

const TeamCard = styled(Card)(({ theme }) => ({
    height: '100%',
    width: '100%',
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

const TrainingsProjectsPage = () => {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Trainings & Projects
            </Typography>
            <Typography variant="h5" component="p">
              Gain hands-on experience and build your career
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
            <Grid item xs={12} sm={6} md={4}>
              <StatsBox>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#667eea', mb: 1 }}>50+</Typography>
                <Typography sx={{ fontSize: '1rem', color: '#555' }}>Courses Offered</Typography>
              </StatsBox>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <StatsBox>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#764ba2', mb: 1 }}>10,000+</Typography>
                <Typography sx={{ fontSize: '1rem', color: '#555' }}>Students Enrolled</Typography>
              </StatsBox>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <StatsBox>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#f093fb', mb: 1 }}>500+</Typography>
                <Typography sx={{ fontSize: '1rem', color: '#555' }}>Projects Completed</Typography>
              </StatsBox>
            </Grid>
          </Grid>
        </motion.div>

        {/* Trainings Section */}
        <Box sx={{ mb: 12 }}>
          <SectionTitle>Our Trainings</SectionTitle>
          <SectionSubtitle>
            Upskill yourself with our industry-leading training programs and gain a competitive edge.
          </SectionSubtitle>
          <Grid container spacing={4} justifyContent="center">
            {trainings.map((item, index) => (
              <Grid item xs={12} sm={8} md={4} key={index}>
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
                            <Typography sx={{ fontSize: '0.9rem', color: 'grey.700', mb: 2 }}>
                                {item.description}
                            </Typography>
                            <Button
                                variant="outlined"
                                endIcon={<ChevronRight />}
                                sx={{
                                    color: item.color,
                                    borderColor: item.color,
                                    '&:hover': {
                                        backgroundColor: `${item.color}10`,
                                        borderColor: item.color,
                                    },
                                }}
                            >
                                Learn More
                            </Button>
                        </CardContent>
                    </ModernCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Instructors Section */}
        <Box sx={{ mb: 12 }}>
          <SectionTitle>Meet Our Instructors</SectionTitle>
          <SectionSubtitle>
            Learn from the best in the industry. Our instructors are experts in their fields and are passionate about sharing their knowledge.
          </SectionSubtitle>
          <Grid container spacing={4}>
            {instructors.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                      <Chip label={member.specialty} variant="outlined" sx={{ color: '#667eea', borderColor: '#667eea' }} />
                    </CardContent>
                  </TeamCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Projects Section */}
        <Box sx={{ mb: 12 }}>
            <SectionTitle>Our Projects</SectionTitle>
            <SectionSubtitle>
                Explore some of our innovative projects and see our expertise in action.
            </SectionSubtitle>
            <Grid container spacing={4}>
                {projects.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <ModernCard>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.image}
                                alt={item.title}
                            />
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'grey.900' }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ fontSize: '0.9rem', color: 'grey.700', mb: 2 }}>
                                    {item.description}
                                </Typography>
                                <Box>
                                    {item.tags.map((tag) => (
                                        <Chip key={tag} label={tag} variant="outlined" sx={{ mr: 1, mb: 1 }} />
                                    ))}
                                </Box>
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
              Ready to Get Started?
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
              Join one of our training programs or contribute to our innovative projects.
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
              Enroll Now
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TrainingsProjectsPage;