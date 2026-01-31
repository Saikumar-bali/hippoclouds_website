import React, { useRef, useState, useEffect } from 'react';
import { Container, Typography, Box, CardContent, Button, List, ListItem, ListItemIcon, ListItemText, Stack, Chip, Paper, IconButton } from '@mui/material';
import { Newspaper, ReceiptText, ShieldCheck, LayoutDashboard, Languages, Bell, Zap, IndianRupee, Package, Wallet, BarChart4, CloudOff, Store, ShoppingBag, Smartphone, Utensils, Truck, Sparkles, Download, ArrowRight, BookOpen, Clock, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

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
// Data for the two applications
const appsData = [
  {
    id: 'vajione',
    name: "Vajione News",
    tagline: "Real News. Real Impact.",
    icon: Newspaper,
    color: "#2563eb",
    bgColor: "#dbeafe",
    description: "Stay informed with Vajione, your go-to news app delivering fast, reliable, and accurate news straight to your device. Whether it's breaking headlines, political updates, or local stories that matter, Vajione ensures you're always connected to the truth.",
    // Multiple images for slideshow
    images: [
      "/vajione/1.webp",
      "/vajione/2.webp",
      "/vajione/3.webp",
      "/vajione/4.webp",
      "/vajione/5.jpg",
      "/vajione/6.jpg",
      "/vajione/7.jpg",
    ],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.vajione&pcampaignid=web_share",
    highlightsTitle: "🌟 Core Value Proposition",
    highlights: [
      { icon: ShieldCheck, text: "Verified Content – We prioritize factual and trustworthy news." },
      { icon: LayoutDashboard, text: "Clean & Simple Interface – Designed for smooth reading experience." },
      { icon: Languages, text: "Regional Language Support – News in your preferred language." },
      { icon: Bell, text: "Latest Updates – Stay ahead with real-time news alerts." },
      { icon: Zap, text: "Lightweight & Fast – Loads quickly even on slower networks." },
    ],
    specificFeatures: {
      title: "News Browsing & Consumption",
      items: [
        { icon: BookOpen, text: "Category Browser: Easily filter stories by Politics, Entertainment, Technology, and more." },
        { icon: Clock, text: "Real-time Alerts: Receive instant notifications on critical breaking news." },
        { icon: Layers, text: "Exclusive Video Content: Access premium, video-first news updates." }
      ]
    },
    downloadText: "Vajione is a commitment to truth, integrity, and public service. Download now and experience the difference!",
  },
  {
    id: 'hippomint',
    name: "HippoMint",
    tagline: "Smart Retail Invoicing for Indian Businesses",
    icon: ReceiptText,
    color: "#059669",
    bgColor: "#d1fae5",
    description: "HippoMint is a smart retail invoicing app designed for Indian businesses. It helps you create GST-compliant invoices, manage inventory, track payments, and grow your business—all from your mobile and desktop.",
    // Multiple images for slideshow
    images: [
      "/hippo_mint/3.webp",
      "/hippo_mint/4.webp",
      "/hippo_mint/5.webp",
      "/hippo_mint/6.webp",
      "/hippo_mint/7.webp",
      "/hippo_mint/8.webp",
      "/hippo_mint/9.webp",
      "/hippo_mint/10.webp"
    ],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.hippo.mint&pcampaignid=web_share",
    highlightsTitle: "✔ Billing & Inventory Powerhouse",
    highlights: [
      { icon: IndianRupee, text: "Easy GST Billing – Generate professional invoices in seconds with GST, HSN/SAC codes, and e-invoice support." },
      { icon: Package, text: "Inventory Management – Track stock in real-time and get alerts before items run out." },
      { icon: Wallet, text: "Payment Tracking – Record cash, UPI, card, and credit payments with reminders for pending dues." },
      { icon: BarChart4, text: "Reports & Analytics – View daily sales, profit/loss, GST summary, and export reports for filing." },
      { icon: CloudOff, text: "Works Offline – Create invoices even without internet. Sync when online." },
    ],
    specificFeatures: {
      title: "Compliance & Technical Specs",
      items: [
        { icon: ShieldCheck, text: "Secure Cloud Backup: Keep your data safe with automatic backup and restore functionality." },
        { icon: Languages, text: "Multi-Language Support: Available in English, Hindi, Telugu, Tamil, Bengali, and more." },
        { icon: LayoutDashboard, text: "Multi-Device Access: Use HippoMint on mobile, tablet, or desktop seamlessly." }
      ]
    },
    targetAudience: [
      { icon: Store, text: "Kirana & general stores" },
      { icon: ShoppingBag, text: "Garment & footwear shops" },
      { icon: Smartphone, text: "Electronics & mobile stores" },
      { icon: Utensils, text: "Restaurants, cafes & takeaways" },
      { icon: Truck, text: "Wholesalers & distributors" }
    ],
    downloadText: "With HippoMint, say goodbye to manual billing and spreadsheets. Go digital, save time, and grow smarter.",
  },
];

// Reusable component for displaying app features/highlights
const FeatureList = ({ items, iconColor }) => (
  <List disablePadding>
    {items.map((item, index) => (
      <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
        <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
          <item.icon style={{ width: 16, height: 16, color: iconColor }} />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body2" sx={{ color: '#374151' }}>
              {item.text}
            </Typography>
          }
        />
      </ListItem>
    ))}
  </List>
);

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

// Component for the audience chips
const AudienceChips = ({ items }) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
    {items.map((item, index) => (
      <Chip
        key={index}
        icon={<item.icon size={14} />}
        label={item.text}
        size="small"
        variant="outlined"
        sx={{ 
          backgroundColor: 'white',
          borderColor: '#e5e7eb',
          color: '#374151',
          fontSize: '0.75rem'
        }}
      />
    ))}
  </Box>
);

// Component for Mobile Screenshots with horizontal scroll and auto-scroll
const MobileScreenshotsView = ({ images }) => {
  const scrollerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleScroll = (direction) => {
    if (scrollerRef.current) {
      const scrollAmount = scrollerRef.current.offsetWidth;
      if (direction === 'front') {
        scrollerRef.current.scrollLeft += scrollAmount;
        setCurrentIndex(prev => (prev + 1) % images.length);
      } else {
        scrollerRef.current.scrollLeft -= scrollAmount;
        setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
      }
    }
  };

  const scrollToIndex = (index) => {
    if (scrollerRef.current) {
      const scrollAmount = scrollerRef.current.offsetWidth * index;
      scrollerRef.current.scrollLeft = scrollAmount;
      setCurrentIndex(index);
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      scrollToIndex(nextIndex);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, images.length]);

  return (
    
    <Box
      sx={{
        mx: "auto",
        maxWidth: { xs: 320, md: 280 },
        width: { xs: 320, md: 280 },
        overflow: "hidden",
        borderRadius: "2rem",
        border: "12px solid black",
        position: "relative",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        background: "#000",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <IconButton
        onClick={() => handleScroll('back')}
        sx={{
          position: 'absolute',
          left: '0.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          bgcolor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            bgcolor: 'white'
          },
          p: 0.5,
          borderRadius: '50%',
          width: { xs: 32, md: 28 },
          height: { xs: 32, md: 28 }
        }}
      >
        <ChevronLeft size={16} />
      </IconButton>

      <Box
        ref={scrollerRef}
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          alignItems: "center",
          "&::-webkit-scrollbar": { display: "none" }
        }}
      >
        {images.map((src, i) => (
          <Box
            key={i}
            component="img"
            src={src}
            alt={`App Screenshot ${i + 1}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // Changed from "cover" to "contain" for better fitting
              flexShrink: 0,
              scrollSnapAlign: "center",
              backgroundColor: "white" // Add white background for better appearance
            }}
          />
        ))}
      </Box>

      <IconButton
        onClick={() => handleScroll('front')}
        sx={{
          position: 'absolute',
          right: '0.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          bgcolor: 'rgba(255, 255, 255, 0.7)',
          '&:hover': {
            bgcolor: 'white'
          },
          p: 0.5,
          borderRadius: '50%',
          width: { xs: 32, md: 28 },
          height: { xs: 32, md: 28 }
        }}
      >
        <ChevronRight size={16} />
      </IconButton>

      {/* Slide Indicators */}
      <Box sx={{ 
        position: "absolute", 
        bottom: "12px", 
        left: "50%", 
        transform: "translateX(-50%)",
        display: "flex",
        gap: "6px",
        zIndex: 10
      }}>
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => scrollToIndex(index)}
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#ffffff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

// Main App component
const AppShowcaseCard = ({ app }) => {
  const IconComponent = app.icon;

  const handleDownloadClick = () => {
    window.open(app.playStoreLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Paper sx={{ 
      backgroundColor: app.bgColor, 
      borderRadius: 3, 
      overflow: 'hidden',
      mb: 4 
    }}>
      <CardContent sx={{ p: 4 }}>
        {/* USING FLEXBOX CONTAINER */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 4
        }}>
          
          {/* LEFT COLUMN - IMAGE */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            order: { xs: 2, md: 1 } // Image comes second on mobile, first on desktop
          }}>
            {/* Use the same mobile frame UI for both desktop and mobile */}
            <MobileScreenshotsView images={app.images} />
          </Box>

          {/* RIGHT COLUMN - CONTENT */}
          <Box sx={{
            flex: 1,
            order: { xs: 1, md: 2 } // Content comes first on mobile, second on desktop
          }}>
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <IconComponent style={{ width: 40, height: 40, color: app.color, marginRight: 12 }} />
              <Box>
                <Typography variant="h4" sx={{fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.25rem', xl: '1.65rem' }, fontWeight: 'bold', color: '#111827' }}>
                  {app.name}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem', lg: '1.25rem', xl: '1.75rem' }, color: app.color, fontWeight: 600 }}>
                  {app.tagline}
                </Typography>
              </Box>
            </Box>

            {/* Description */}
            <Typography sx={{ mb: 3, color: '#374151' }}>
              {app.description}
            </Typography>

            {/* Highlights */}
            <Paper sx={{ backgroundColor: 'white', p: 3, mb: 3, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.25rem', xl: '1.65rem' },fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center' }}>
                <Sparkles style={{ marginRight: 8, color: '#f59e0b' }} />
                {app.highlightsTitle}
              </Typography>
              <FeatureList items={app.highlights} iconColor={app.color} />
            </Paper>

            {/* Specific Features */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {app.specificFeatures.title}
              </Typography>
              <FeatureList items={app.specificFeatures.items} iconColor={app.color} />
            </Box>

            {/* Target Audience (only for HippoMint) */}
            {app.id === 'hippomint' && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  👨‍💼 Perfect for:
                </Typography>
                <AudienceChips items={app.targetAudience} />
              </Box>
            )}

            {/* CTA Section */}
            <Box sx={{ 
              borderTop: '1px solid #e5e7eb', 
              pt: 3, 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' }, 
              alignItems: { xs: 'center', sm: 'flex-start' },
              gap: 2 
            }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleDownloadClick}
                sx={{
                  backgroundColor: app.color,
                  borderRadius: 6,
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '0.55rem', lg: '0.75rem', xl: '1.65rem' },
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: app.color,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s',
                }}
                endIcon={<Download />}
              >
                Download Now
              </Button>
              <Typography sx={{ 
                color: '#6b7280', 
                fontStyle: 'italic',
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                {app.downloadText}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Paper>
  );
};

export default function AppDevSupportPage() {
  return (
    <Box>
          <HeroSection>
            <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ position: 'absolute', left: 0, top: '25%', bottom: '25%', width: '6px', backgroundColor: '#fff', borderRadius: '3px' }} />
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} sx={{ ml: 4, textAlign: 'left' }}>
                <Typography variant="h3" component="h1" gutterBottom>
                  App Development & Support
                </Typography>
                <Typography variant="h6" component="p">
                  Building robust, scalable, and user-friendly applications tailored to your business needs, with ongoing support to ensure optimal performance.
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
    <Box sx={{ backgroundColor: 'white', py: 8 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="Innovation Portfolio"
            sx={{ 
              backgroundColor: '#e0e7ff', 
              color: '#4f46e5', 
              fontWeight: 'bold',
              mb: 3 
            }}
            icon={<Sparkles />}
          />
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#111827',fontSize: { xs: '1.1rem', sm: '1.2rem', md: '2.35rem', lg: '2.55rem', xl: '2.65rem' }, }}>
            Showcase of Top-Tier Applications
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '1.25rem',color: '#6b7280', maxWidth: 800, mx: 'auto' }}>
            Presenting Vajione News for real-time truth, and HippoMint for smart, GST-compliant retail management, built to empower businesses.
          </Typography>
        </Box>

        {/* App Cards */}
        <Box>
          {appsData.map((app) => (
            <AppShowcaseCard app={app} key={app.id} />
          ))}
        </Box>

        {/* Footer */}
        <Box sx={{ textAlign: 'center', mt: 8, pt: 4, borderTop: '1px solid #e5e7eb' }}>
          <Button
            variant="text"
            endIcon={<ArrowRight />}
            sx={{ color: '#4f46e5', fontWeight: 'bold' }}
          >
            Contact us for a Custom Demo
          </Button>
        </Box>
      </Container>
    </Box>
    </Box>
  );
}