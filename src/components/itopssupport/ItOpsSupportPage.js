
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Monitor, Headphones, Shield, Clock, Cloud, Zap, Users, ArrowRight } from 'lucide-react';

const Hero = styled(Box)(({ theme }) => ({
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

const ServiceCard = styled(Card)(({ theme }) => ({
  width: '350px',
  borderRadius: 16,
  boxShadow: '0 10px 30px rgba(12,24,48,0.08)',
  transition: 'transform 0.28s ease, box-shadow 0.28s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 30px 60px rgba(37,99,235,0.12)',
  },
}));

const StatBox = styled(Box)(({ theme }) => ({
  background: '#fff',
  borderRadius: 12,
  padding: theme.spacing(3),
  boxShadow: '0 8px 30px rgba(12,24,48,0.06)',
  textAlign: 'center',
}));

const services = [
  { title: 'Infrastructure Management', desc: 'Design, deploy and manage scalable infrastructure.', icon: Monitor, color: '#667eea' },
  { title: '24/7 Helpdesk', desc: 'Round-the-clock support for employees and systems.', icon: Headphones, color: '#764ba2' },
  { title: 'Security & Compliance', desc: 'Threat monitoring, audits and compliance support.', icon: Shield, color: '#f093fb' },
  { title: 'Incident Response', desc: 'Fast remediation and root-cause analysis.', icon: Zap, color: '#42a5f5' },
  { title: 'Backup & DR', desc: 'Reliable backups and disaster recovery planning.', icon: Cloud, color: '#66bb6a' },
  { title: 'Cloud Operations', desc: 'Optimize cloud costs and performance.', icon: Clock, color: '#ffa726' },
];

const stats = [
  { label: '99.9% Uptime', value: '99.9%' },
  { label: 'Avg. Response', value: '15 mins' },
  { label: 'SLA Coverage', value: 'Enterprise' },
];

export default function ItOpsSupportPage() {
  return (
    <Box>
      <Hero>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#fff' }}>
              IT Ops & Support
            </Typography>
            <Typography variant="h5" component="p" sx={{ color: 'rgba(255,255,255,0.95)' }}>
              Reliable IT operations and support to keep your business running smoothly 24/7.
            </Typography>
          </motion.div>
        </Container>
      </Hero>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 3 }}>Our Managed IT Services</Typography>
        <Typography sx={{ textAlign: 'center', color: '#666', maxWidth: 800, mx: 'auto', mb: 4 }}>
          From helpdesk to full lifecycle cloud operations, we proactively manage your IT landscape so your teams can focus on business outcomes.
        </Typography>

        <Grid container spacing={3}>
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: idx * 0.06 }} viewport={{ once: true }}>
                  <ServiceCard>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ width: 56, height: 56, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${s.color}20` }}>
                          <Icon size={28} color={s.color} />
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 700 }}>{s.title}</Typography>
                          <Typography sx={{ fontSize: '0.95rem', color: '#666' }}>{s.desc}</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button size="small" variant="text" sx={{ color: '#3b3bdb', fontWeight: 700 }}>Learn More</Button>
                      </Box>
                    </CardContent>
                  </ServiceCard>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Why choose our IT Ops?</Typography>
            <Typography sx={{ color: '#666', mb: 3 }}>Proactive monitoring, incident management, and a dedicated team focused on reducing risk and improving reliability.</Typography>
            <Grid container spacing={5}>
              <Grid item xs={6}><StatBox><Typography sx={{ fontWeight: 800 }}>{stats[0].value}</Typography><Typography sx={{ color: '#666' }}>{stats[0].label}</Typography></StatBox></Grid>
              <Grid item xs={6}><StatBox><Typography sx={{ fontWeight: 800 }}>{stats[1].value}</Typography><Typography sx={{ color: '#666' }}>{stats[1].label}</Typography></StatBox></Grid>
              <Grid item xs={12} ><StatBox><Typography sx={{ fontWeight: 800 }}>{stats[2].value}</Typography><Typography sx={{ color: '#666' }}>{stats[2].label}</Typography></StatBox></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, borderRadius: 2, background: 'linear-gradient(135deg, #fff 0%, #f7fbff 100%)', boxShadow: '0 10px 30px rgba(12,24,48,0.04)' }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Support Models</Typography>
              <Typography sx={{ color: '#666', mb: 2 }}>Flexible engagement models — dedicated teams, co-managed ops, or pay-as-you-go support.</Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="outlined" sx={{ borderRadius: 8 }}>Dedicated Team</Button>
                <Button variant="outlined" sx={{ borderRadius: 8 }}>Co-Managed</Button>
                <Button variant="outlined" sx={{ borderRadius: 8 }}>On-Demand</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Ready to stabilize and scale your IT?</Typography>
        <Typography sx={{ color: '#666', mb: 4 }}>Talk to our engineering team to design a plan that fits your organization.</Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button variant="contained" sx={{ background: '#3b3bdb', color: '#fff', fontWeight: 800 }}>Contact Sales</Button>
          <Button variant="outlined" sx={{ borderColor: '#3b3bdb', color: '#3b3bdb', fontWeight: 800 }}>Request Support</Button>
        </Box>
      </Box>
    </Container>
    </Box>
  );
}
