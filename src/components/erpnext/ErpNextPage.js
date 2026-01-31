import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Modal,
  CircularProgress,
  AppBar,
  Toolbar,
  Link,
  IconButton,
  CardMedia,
  CssBaseline,
  GlobalStyles
} from '@mui/material';
import {
  VolumeUp,
  AccountBalance,
  Handshake,
  Factory,
  People,
  Close
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
  backgroundImage: `url(${process.env.PUBLIC_URL}/banner-sample.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    height: '50vh',
  },
}));

const ErpNextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalContent, setModalContent] = useState('');

  // Exact colors from your original design
  const colors = {
    erpBlue: '#147bdf',
    erpBg: '#f8f9fa',
    erpSecondary: '#34495e',
    gray: {
      800: '#1f2937',
      700: '#374151',
      600: '#4b5563',
      500: '#6b7280',
      200: '#e5e7eb',
      100: '#f3f4f6',
      50: '#f9fafb'
    }
  };

  const handleGenerateSwotAnalysis = async () => {
    setModalOpen(true);
    setLoading(true);
    setModalContent('');

    // Simulate API call with exact same timing and content
    setTimeout(() => {
      const mockAnalysis = `
        <h3 style="font-size: 1.5rem; font-weight: 700; color: #1f2937; margin-bottom: 1rem; line-height: 2rem;">AI SWOT Analysis</h3>
        <p style="margin-bottom: 1rem; color: #374151; line-height: 1.625;">
          <strong>Strengths:</strong><br>
          • Cost-effective open-source solution<br>
          • Comprehensive feature set covering all business functions<br>
          • Strong community support and continuous development<br>
          • Flexible customization options<br><br>

          <strong>Weaknesses:</strong><br>
          • Requires technical expertise for implementation<br>
          • Limited official support compared to proprietary solutions<br>
          • Steeper learning curve for non-technical users<br><br>

          <strong>Opportunities:</strong><br>
          • Growing demand for digital transformation<br>
          • Increasing preference for open-source solutions<br>
          • Expansion into emerging markets<br>
          • Integration with modern AI and automation tools<br><br>

          <strong>Threats:</strong><br>
          • Competition from established ERP vendors<br>
          • Rapid technological changes<br>
          • Data security concerns in cloud deployments
        </p>
        <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 0.75rem; font-weight: 600; color: #6b7280; margin-bottom: 0.5rem; line-height: 1rem;">Sources:</p>
          <ul style="font-size: 0.75rem; margin: 0; padding: 0; list-style: none; space-y: 0.25rem;">
            <li style="margin-bottom: 0.25rem;">
              <a href="#" style="color: #147bdf; text-decoration: none; border-bottom: 1px solid transparent; hover:border-bottom: 1px solid #147bdf;">ERPNext Official Documentation</a>
            </li>
            <li style="margin-bottom: 0.25rem;">
              <a href="#" style="color: #147bdf; text-decoration: none; border-bottom: 1px solid transparent; hover:border-bottom: 1px solid #147bdf;">Open Source ERP Market Analysis</a>
            </li>
          </ul>
        </div>
      `;
      setModalContent(mockAnalysis);
      setLoading(false);
    }, 2000);
  };

  const handleGenerateModuleAudio = async (moduleName, description, event) => {
    const button = event.currentTarget;
    const originalContent = button.innerHTML;

    // Show loading spinner
    button.innerHTML = '<div style="border: 2px solid #147bdf; border-top: 2px solid transparent; border-radius: 50%; width: 16px; height: 16px; animation: spin 1s linear infinite;"></div>';
    button.disabled = true;

    // Simulate API call
    setTimeout(() => {
      // Reset button
      button.innerHTML = originalContent;
      button.disabled = false;
      console.log(`Audio generated for ${moduleName}`);
    }, 1500);
  };

  const modules = [
    {
      icon: <AccountBalance sx={{ fontSize: 32, color: colors.erpBlue }} />,
      title: 'Financial Accounting',
      description: 'Manage your Chart of Accounts, Invoicing, Payments, Budgets, and Fixed Assets. Full multi-currency and tax compliance support.',
      hasTTS: true
    },
    {
      icon: <Handshake sx={{ fontSize: 32, color: colors.erpBlue }} />,
      title: 'CRM & Sales',
      description: 'Track Leads, Opportunities, Quotations, and Sales Orders. Maintain customer relationships and drive growth with integrated tools.'
    },
    {
      icon: <Factory sx={{ fontSize: 32, color: colors.erpBlue }} />,
      title: 'Manufacturing & Inventory',
      description: 'Handle Bill of Materials (BOM), Production Planning, Work Orders, and seamless inventory management across warehouses.'
    },
    {
      icon: <People sx={{ fontSize: 32, color: colors.erpBlue }} />,
      title: 'Human Resources',
      description: 'From recruitment and onboarding to payroll, attendance, and expense claims, manage your workforce efficiently and accurately.'
    }
  ];

  const screenshots = [
    {
      image: 'https://placehold.co/1200x750/147bdf/ffffff?text=ERPNext+Finance+Dashboard',
      title: 'Finance Overview',
      description: 'Real-time charts showing profit & loss, outstanding invoices, and cash flow projections in a single, clean interface.'
    },
    {
      image: 'https://placehold.co/1200x750/34495e/ffffff?text=ERPNext+Item+Master+List',
      title: 'Inventory Management',
      description: 'Easily manage thousands of items, track stock levels across multiple warehouses, and view transaction history.'
    },
    {
      image: 'https://placehold.co/1200x750/34495e/ffffff?text=ERPNext+CRM+Pipeline',
      title: 'Sales Pipeline',
      description: 'Visualize your sales process using Kanban boards, move opportunities, and keep your sales team aligned.'
    },
    {
      image: 'https://placehold.co/1200x750/34495e/ffffff?text=ERPNext+Employee+Profile',
      title: 'Employee Records',
      description: 'Comprehensive employee profiles, leave management, and automated payroll processing.'
    }
  ];

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: '25%',
              bottom: '25%',
              width: '6px',
              backgroundColor: '#fff',
              borderRadius: '3px'
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginLeft: '1rem', textAlign: 'left' }} // use style instead of sx for motion.div
          >
            <Typography variant="h3" component="h1" gutterBottom>
              ERPNext Solutions & Implementation
            </Typography>

            <Typography variant="h6" component="p">
              Digitize your business workflows with seamless ERPNext setup, customization, and real-time process automation.
            </Typography>
          </motion.div>
        </Container>

      </HeroSection>
      <Box sx={{
        bgcolor: colors.erpBg,
        minHeight: '100vh',
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: 1.5,
      }}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            '@keyframes spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' }
            },
            'body': {
              margin: 0,
              padding: 0,
              fontFamily: '"Inter", sans-serif'
            }
          }}
        />


        {/* Hero Section - Exact match */}
        <Box sx={{
          mt:{ xs: 8, sm: 10, md: -15, lg: -5, xl: 20 },
          py: 20,
          bgcolor: 'white',
          borderBottom: `1px solid ${colors.gray[200]}`,
          textAlign: 'center'
        }}>
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '2.35rem', lg: '2.55rem', xl: '2.65rem' },
                fontWeight: 900,
                color: colors.gray[900],
                mb: 2,
                lineHeight: 1.25,
                letterSpacing: '-0.025em'
              }}
            >
              One Software to Manage Your Entire Business
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.25rem',
                color: colors.gray[220],
                mb: 5,
                maxWidth: '72rem',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              ERPNext is a comprehensive, <strong>open-source Enterprise Resource Planning (ERP)</strong> solution designed for small, medium, and large businesses. It covers all core functions, from accounting to manufacturing, in a beautiful, intuitive interface.
            </Typography>

            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              gap: 2,
              alignItems: 'center'
            }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: colors.erpBlue,
                  '&:hover': {
                    bgcolor: '#2563eb',
                    transform: 'scale(1.02)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  },
                  '&:active': {
                    transform: 'scale(0.95)'
                  },
                  fontWeight: 600,
                  fontSize: '1rem',
                  py: 1.5,
                  px: 5,
                  borderRadius: '0.75rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  minWidth: 'auto'
                }}
              >
                Start Your ERP Journey
              </Button>

              <Button
                variant="contained"
                onClick={handleGenerateSwotAnalysis}
                sx={{
                  bgcolor: colors.gray[700],
                  '&:hover': {
                    bgcolor: colors.gray[800],
                    transform: 'scale(1.02)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  },
                  '&:active': {
                    transform: 'scale(0.95)'
                  },
                  fontWeight: 600,
                  fontSize: '1rem',
                  py: 1.5,
                  px: 5,
                  borderRadius: '0.75rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  minWidth: 'auto'
                }}
              >
                Generate SWOT Analysis ✨
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Key Modules Section - FIXED: Now shows 4 cards in a row on desktop */}
        <Box id="features" sx={{ py: 8, bgcolor: colors.erpBg }}>
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 , md: 2 , lg: 5 }, mx: 'auto' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '2.25rem',
                fontWeight: 700,
                textAlign: 'center',
                color: colors.gray[800],
                mb: 5
              }}
            >
              Integrated Business Modules
            </Typography>

            {/* FIXED GRID: Using 4 columns on large screens, 2 on small, 1 on extra small */}
            <Grid container spacing={3} sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)'
              },
              gap: 3
            }}>
              {modules.map((module, index) => (
                <Grid item key={index} sx={{ display: 'flex' }}>
                  <Card
                    sx={{
                      bgcolor: 'white',
                      p: 3,
                      borderRadius: '1rem',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                      },
                      border: `1px solid ${colors.gray[100]}`,
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column', '&:last-child': { pb: 0 } }}>
                      <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 2
                      }}>
                        {module.icon}
                        {module.hasTTS && (
                          <IconButton
                            onClick={(e) => handleGenerateModuleAudio(module.title, module.description, e)}
                            sx={{
                              color: colors.gray[500],
                              '&:hover': {
                                color: colors.erpBlue,
                                bgcolor: colors.erpBg,
                                transform: 'scale(1.1)'
                              },
                              p: 1,
                              transition: 'all 0.15s ease',
                              '& .MuiSvgIcon-root': {
                                fontSize: '1.25rem'
                              }
                            }}
                          >
                            <VolumeUp />
                          </IconButton>
                        )}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          mb: 1.5,
                          color: colors.gray[900],
                          lineHeight: 1.5
                        }}
                      >
                        {module.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.gray[600],
                          fontSize: '0.875rem',
                          lineHeight: 1.5,
                          flex: 1
                        }}
                      >
                        {module.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Screenshots Section - FIXED: Now shows 2 columns in a row on desktop */}
        <Box sx={{ py: 16, bgcolor: 'white', borderTop: `1px solid ${colors.gray[200]}` }}>
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '2.25rem',
                fontWeight: 700,
                textAlign: 'center',
                color: colors.gray[800],
                mb: 8
              }}
            >
              A Beautiful, Intuitive Interface
            </Typography>

            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                fontSize: '1.125rem',
                color: colors.gray[600],
                mb: 12,
                maxWidth: '48rem',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              ERPNext is built on the Frappe Framework, offering a modern, clean, and highly customizable user experience that works great on desktop and mobile devices.
            </Typography>

            {/* FIXED SCREENSHOT GRID: Using 2 columns on large screens, 1 on mobile */}
            <Grid container spacing={5} sx={{
              display: 'grid',
              gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(2, 1fr)" },
              gap: 5
            }}>
              {screenshots.map((screenshot, index) => (
                <Grid item key={index} sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      borderRadius: '1rem',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                      overflow: 'hidden',
                      transform: 'scale(1)',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.01)'
                      },
                      border: `1px solid ${colors.gray[200]}`,
                      bgcolor: 'white',
                      width: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%' },
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                      image={screenshot.image}
                      alt={screenshot.title}
                      onError={(e) => {
                        e.target.src = `https://placehold.co/1200x750/34495e/ffffff?text=ERP+${screenshot.title.split(' ')[0]}+View`;
                      }}
                    />
                    <Box sx={{
                      p: 4,
                      bgcolor: colors.gray[50],
                      borderTop: `1px solid ${colors.gray[200]}`,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          mb: 1,
                          color: colors.gray[800],
                          lineHeight: 1.5
                        }}
                      >
                        {screenshot.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: colors.gray[600],
                          lineHeight: 1.5,
                          flex: 1
                        }}
                      >
                        {screenshot.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Why Open Source Section - Exact match */}
        <Box sx={{
          py: 16,
          textAlign: 'center',
          bgcolor: colors.erpBg,
          borderTop: `1px solid ${colors.gray[200]}`
        }}>
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: '2.25rem',
                fontWeight: 700,
                color: colors.gray[800],
                mb: 2
              }}
            >
              Why Choose Open Source?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.25rem',
                color: colors.gray[600],
                mb: 3,
                maxWidth: '72rem',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              With ERPNext, you <strong>own your data</strong> and your freedom. No vendor lock-in, complete transparency, and a massive community contributing to its continuous improvement.
            </Typography>
            <Link
              href="https://www.erpnext.com/pricing"
              target="_blank"
              sx={{
                color: colors.erpBlue,
                fontSize: '1rem',
                fontWeight: 500,
                textDecoration: 'none',
                borderBottom: `2px solid ${colors.erpBlue}`,
                pb: 0.5,
                '&:hover': {
                  color: '#2563eb'
                },
                transition: 'color 0.3s ease'
              }}
            >
              Learn about Hosting and Customization Options →
            </Link>
          </Container>
        </Box>


        {/* AI Modal - Exact match */}
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            backdropFilter: 'blur(4px)'
          }}
        >
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              width: '100%',
              maxWidth: '32rem',
              maxHeight: '90vh',
              overflow: 'auto',
              outline: 'none'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Box sx={{ p: 4 }}>
              {loading && (
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 192
                }}>
                  <CircularProgress
                    sx={{
                      color: colors.erpBlue,
                      width: '3rem !important',
                      height: '3rem !important'
                    }}
                    thickness={4}
                  />
                  <Typography sx={{
                    color: colors.gray[600],
                    ml: 2
                  }}>
                    Analyzing market trends...
                  </Typography>
                </Box>
              )}
              {modalContent && (
                <Box
                  sx={{
                    color: colors.gray[700],
                    lineHeight: 1.625,
                    '& strong': {
                      fontWeight: 700
                    },
                    '& h3': {
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: colors.gray[800],
                      mb: 2
                    },
                    '& p': {
                      mb: 2
                    },
                    '& a': {
                      color: colors.erpBlue,
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }
                  }}
                  dangerouslySetInnerHTML={{ __html: modalContent }}
                />
              )}
            </Box>
            <Box sx={{
              p: 3,
              bgcolor: colors.gray[50],
              borderTop: `1px solid ${colors.gray[200]}`,
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <Button
                onClick={() => setModalOpen(false)}
                sx={{
                  bgcolor: colors.gray[200],
                  '&:hover': {
                    bgcolor: colors.gray[300]
                  },
                  color: colors.gray[800],
                  fontWeight: 600,
                  py: 1,
                  px: 3,
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  textTransform: 'none',
                  transition: 'background-color 0.15s ease'
                }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default ErpNextPage;