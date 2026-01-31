
import React, { useState } from 'react';
import { Box, Typography, Container, Paper, Grid, Card, CardContent, Button, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Briefcase, Users, Award, Zap, TrendingUp, BookOpen, Code, Lightbulb, Star, ArrowRight } from 'lucide-react';

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

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  fontWeight: 800,
  fontSize: '2.8rem',
  background: 'linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  }
}));

const ProgramCard = styled(Card)(({ theme }) => ({
  height: '100%',
  width: '400px',
  gap: '16px',
  borderRadius: '20px',
  border: '2px solid #e8eef7',
  background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 20px 50px rgba(102, 126, 234, 0.15)',
    borderColor: '#667eea',
    '&::before': {
      transform: 'scaleX(1)',
    },
  }
}));

const BenefitCard = styled(Box)(({ theme, color }) => ({
  width: '500px',
  gap: '16px',
  position: 'relative',
  borderRadius: '16px',
  padding: theme.spacing(3),
  background: '#ffffff',
  border: '2px solid #f0f0f0',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    right: '-20%',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 0,
  },
  '&:hover': {
    borderColor: color,
    boxShadow: `0 15px 40px ${color}25`,
    '&::before': {
      opacity: 1,
    },
    '.benefit-icon': {
      transform: 'scale(1.15) rotate(-10deg)',
      boxShadow: `0 10px 30px ${color}40`,
    }
  }
}));

const IconWrapper = styled(Box)(({ theme, color }) => ({
  width: 70,
  height: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '14px',
  background: `linear-gradient(135deg, ${color} 0%, ${color}dd)`,
  boxShadow: `0 8px 20px ${color}30`,
  marginBottom: 16,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  color: '#fff',
  position: 'relative',
  zIndex: 1,
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: theme.spacing(4),
  paddingBottom: theme.spacing(3),
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 8,
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#667eea',
    boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 4,
    top: 24,
    width: '2px',
    height: 'calc(100% + 12px)',
    background: 'linear-gradient(180deg, #667eea 0%, transparent 100%)',
  },
  '&:last-child::after': {
    display: 'none',
  },
}));

const testimonials = [
  {
    name: 'Aisha Patel',
    role: 'Former Intern - Full Stack Development',
    company: 'HippoClouds',
    avatar: 'https://i.pravatar.cc/150?img=20',
    text: 'The internship was transformative! I gained hands-on experience with cutting-edge technologies and mentorship from industry experts. Now a full-time developer here.',
    rating: 5,
  },
  {
    name: 'Rohan Singh',
    role: 'Former Intern - Cloud Solutions',
    company: 'HippoClouds',
    avatar: 'https://i.pravatar.cc/150?img=25',
    text: 'Outstanding opportunity to work on real-world projects. The team is supportive and the learning curve is steep in the best way possible.',
    rating: 5,
  },
  {
    name: 'Priya Desai',
    role: 'Former Intern - Product Design',
    company: 'HippoClouds',
    avatar: 'https://i.pravatar.cc/150?img=22',
    text: 'Best decision I made during my college years. The projects, the people, and the growth opportunities are unmatched in the industry.',
    rating: 5,
  },
];

const internshipPrograms = [
  {
    title: 'Full Stack Development',
    duration: '3-6 months',
    slots: '8-10',
    description: 'Work with modern tech stack including React, Node.js, and cloud technologies. Build scalable applications from scratch.',
    skills: ['React', 'Node.js', 'AWS', 'MongoDB'],
    icon: Code,
  },
  {
    title: 'Cloud & DevOps',
    duration: '3-6 months',
    slots: '5-7',
    description: 'Master cloud infrastructure, containerization, and CI/CD pipelines. Deploy and manage enterprise applications.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
    icon: Zap,
  },
  {
    title: 'Data Science & Analytics',
    duration: '3-6 months',
    slots: '6-8',
    description: 'Work with big data, machine learning, and advanced analytics. Turn data into actionable insights.',
    skills: ['Python', 'SQL', 'ML', 'Analytics'],
    icon: TrendingUp,
  },
  {
    title: 'Product & Design',
    duration: '3-6 months',
    slots: '4-6',
    description: 'Design user experiences, conduct user research, and contribute to product strategy with our talented team.',
    skills: ['Figma', 'UX Research', 'Prototyping', 'Design'],
    icon: Lightbulb,
  },
];

const benefits = [
  {
    icon: Briefcase,
    color: '#667eea',
    title: 'Real-World Projects',
    description: 'Work on live projects with real impact, not just tutorials or assignments.',
  },
  {
    icon: Users,
    color: '#764ba2',
    title: 'Expert Mentorship',
    description: 'Learn directly from industry veterans with decades of combined experience.',
  },
  {
    icon: Award,
    color: '#f093fb',
    title: 'Certification',
    description: 'Earn recognized certifications upon successful completion of the program.',
  },
  {
    icon: TrendingUp,
    color: '#42a5f5',
    title: 'Career Growth',
    description: 'Many of our interns transition to full-time roles with competitive packages.',
  },
  {
    icon: BookOpen,
    color: '#66bb6a',
    title: 'Learning Resources',
    description: 'Access to premium courses, tools, and continuous learning materials.',
  },
  {
    icon: Star,
    color: '#ffa726',
    title: 'Networking',
    description: 'Build lasting relationships with peers and industry professionals.',
  },
];

export default function InternshipsPage() {
  const [selectedProgram, setSelectedProgram] = useState(0);

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: '#fff',
                mb: 2,
              }}
            >
              Launch Your Career
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 300,
                maxWidth: '600px',
              }}
            >
              Join our elite internship programs and gain invaluable industry experience with HippoClouds
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 12 }}>
        {/* Internship Programs Section */}
        <Box sx={{ mb: 12 }}>
          <SectionTitle variant="h3">Our Internship Programs</SectionTitle>
          <Typography sx={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', mb: 8, maxWidth: '700px', mx: 'auto' }}>
            Choose from multiple specialized programs designed to accelerate your career growth
          </Typography>

          <Grid container spacing={4} display="flex" justifyContent="center">
            {internshipPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index}  >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProgramCard >
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
                          <Icon size={32} color="#667eea" />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#1a1a1a' }}>
                          {program.title}
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#666', mb: 2, lineHeight: 1.6 }}>
                          {program.description}
                        </Typography>
                        <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {program.skills.map((skill, i) => (
                            <Chip
                              key={i}
                              label={skill}
                              size="small"
                              sx={{
                                background: 'linear-gradient(135deg, #667eea15, #764ba215)',
                                border: '1px solid #667eea30',
                                color: '#667eea',
                                fontWeight: 600,
                              }}
                            />
                          ))}
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#999' }}>
                          <span>⏱️ {program.duration}</span>
                          <span>👥 {program.slots} slots</span>
                        </Box>
                      </CardContent>
                    </ProgramCard>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ mb: 12 }}>
          <SectionTitle variant="h3">Why Choose Us</SectionTitle>
          <Grid container spacing={4} display="flex" justifyContent="center">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{display:"grid",gridTemplateColumns:"auto auto"}}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <BenefitCard color={benefit.color}>
                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <IconWrapper color={benefit.color} className="benefit-icon">
                          <Icon size={36} />
                        </IconWrapper>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#1a1a1a' }}>
                          {benefit.title}
                        </Typography>
                        <Typography sx={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>
                          {benefit.description}
                        </Typography>
                      </Box>
                    </BenefitCard>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Timeline Section */}
        <Box sx={{ mb: 12 }}>
          <SectionTitle variant="h3">Internship Timeline</SectionTitle>
          <Paper sx={{ p: 6, borderRadius: '20px', background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', border: '2px solid #e8eef7' }}>
            {[
              { month: 'Month 1', title: 'Onboarding & Learning', description: 'Get familiar with our tech stack, team, and company culture through structured training.' },
              { month: 'Month 2-3', title: 'Core Development', description: 'Take on real projects, implement features, and contribute to live applications.' },
              { month: 'Month 4-5', title: 'Advanced Challenges', description: 'Lead mini-projects, mentor junior team members, and tackle complex problems.' },
              { month: 'Month 6', title: 'Final Evaluation & Placement', description: 'Complete capstone project, receive feedback, and explore full-time opportunities.' },
            ].map((stage, index) => (
              <TimelineItem key={index}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#667eea', mb: 0.5 }}>
                  {stage.month}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 0.5 }}>
                  {stage.title}
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', color: '#666' }}>
                  {stage.description}
                </Typography>
              </TimelineItem>
            ))}
          </Paper>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ mb: 12 }}>
          <SectionTitle variant="h3">What Our Interns Say</SectionTitle>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '2px solid #e8eef7',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                    h: '100%',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#ffa726" color="#ffa726" />
                      ))}
                    </Box>
                    <Typography sx={{ fontSize: '0.95rem', color: '#555', mb: 3, fontStyle: 'italic', flex: 1 }}>
                      "{testimonial.text}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 50, height: 50 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.9rem' }}>
                          {testimonial.name}
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#667eea', fontWeight: 600 }}>
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
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
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Ready to Start Your Journey?
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.9 }}>
              Apply now and join the next cohort of talented interns at HippoClouds
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  }
                }}
                endIcon={<ArrowRight size={20} />}
              >
                Apply Now
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
