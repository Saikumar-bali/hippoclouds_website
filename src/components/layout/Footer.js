import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
  color: theme.palette.text.primary,
  padding: theme.spacing(8, 0, 4, 0),
  marginTop: 'auto',
  borderTop: '1px solid',
  borderColor: theme.palette.divider,
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  marginBottom: theme.spacing(1),
  '&:hover': {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const MapContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
  height: '100%',
  minHeight: '250px',

  '& iframe': {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
  },
}));

export default function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info and Socials */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              HippoClouds
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary">
              Innovative solutions for a digital world. We help businesses thrive with cutting-edge technology and expert services.
            </Typography>
            <Box>
              <SocialIcon href="#" target="_blank" rel="noopener"><FacebookIcon /></SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener"><TwitterIcon /></SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener"><LinkedInIcon /></SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener"><InstagramIcon /></SocialIcon>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              {/* Company */}
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Company
                </Typography>
                <Stack>
                  <FooterLink component={RouterLink} to="/about" variant="body2">About Us</FooterLink>
                  <FooterLink component={RouterLink} to="/contact" variant="body2">Contact</FooterLink>
                  <FooterLink component={RouterLink} to="/partnership" variant="body2">Partnership</FooterLink>
                  <FooterLink component={RouterLink} to="/internships" variant="body2">Internships</FooterLink>
                </Stack>
              </Grid>

              {/* Services */}
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Services
                </Typography>
                <Stack>
                  <FooterLink component={RouterLink} to="/services" variant="body2">Services</FooterLink>
                  <FooterLink component={RouterLink} to="/consultancy" variant="body2">Consultancy</FooterLink>
                  <FooterLink component={RouterLink} to="/bpo" variant="body2">BPO</FooterLink>
                  <FooterLink component={RouterLink} to="/digitalmarketing" variant="body2">Digital Marketing</FooterLink>
                </Stack>
              </Grid>

              {/* Solutions */}
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Solutions
                </Typography>
                <Stack>
                  <FooterLink component={RouterLink} to="/erpnext" variant="body2">ERPNext</FooterLink>
                  <FooterLink component={RouterLink} to="/hippohrm" variant="body2">HippoHRM</FooterLink>
                  <FooterLink component={RouterLink} to="/hippocrm" variant="body2">HippoCRM</FooterLink>
                  <FooterLink component={RouterLink} to="/hippomint" variant="body2">HippoMint</FooterLink>
                </Stack>
              </Grid>

              {/* Contact Info */}
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Contact
                </Typography>
                <Stack>
                  <Typography variant="body2" color="text.secondary">Visakhapatnam, India</Typography>
                  <Typography variant="body2" color="text.secondary">+91 93478 62547</Typography>
                  <FooterLink href="mailto:info@hippoclouds.com" variant="body2">info@hippoclouds.com</FooterLink>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* Google Maps Section - Now at 100% width */}
          <Grid item xs={12}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Our Location
            </Typography>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3608297953783!2d83.30957121117216!3d17.727629583148765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436951934c95%3A0xe19863490a0f8065!2sHIPPOCLOUD%20TECHNOLOGIES%20.!5e0!3m2!1sen!2sin!4v1760584245361!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HippoClouds Technologies Location"
              />
            </MapContainer>
          </Grid>
        </Grid>

        <Box mt={6} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://hippoclouds.com/">
              HippoClouds
            </Link>{' '}
            {new Date().getFullYear()}{'.'}
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}