import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  MenuItem,
  Box,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  useTheme,
  useMediaQuery,
  Stack,
  Dialog,
  DialogContent,
  Collapse,
} from '@mui/material';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { NavTrigger, NavLink } from './Navbar.styles';
import {
  AIInfrastructureIcon,
  FlowTechIcon,
  HippoHRMIcon,
  HippoCRMIcon,
  DeliveryNetworkIcon,
  HippoMintIcon,
  InfrastructureIcon,
  AssetManagementIcon,
  TransportManagementIcon,
  MaterialManagementIcon,
  StaffIcon,
  DevelopmentIcon,
  ConsultancyIcon,
  BPOIcon,
  DigitalMarketingIcon,
  InfraSupportIcon,
  StaffAugmentationIcon,
  TrainingsProjectsIcon,
  InternshipsIcon,
} from './Icons';
import HoverMenu from './HoverMenu';
import ContactForm from '../contact/contact';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleContactClick = () => {
    setContactOpen(true);
  };

  const handleContactClose = () => {
    setContactOpen(false);
  };

  const handleMobileClose = () => {
    setMobileDrawerOpen(false);
    setExpandedMenu(null);
  };

  const handleMenuToggle = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const productsMenu = (handleClose) => (
    <Box sx={{ p: 2, width: 760, maxWidth: '90vw' }}>
      <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
        <Box sx={{ minWidth: 180, flex: 1 }}>
          <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--ds-gray-900, #11181C)', lineHeight: '1.25rem', mb: 1 }}>
            Software Products / Platforms
          </Typography>
          <Stack spacing={1}>
            <Link to="/erpnext" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <AIInfrastructureIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      ERPNext
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/flowtech" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <FlowTechIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      Enquery Management System
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/hippohrm" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <HippoHRMIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      HippoHRM
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/hippocrm" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <HippoCRMIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      HippoCRM
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/hippotripzone" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <DeliveryNetworkIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      HippoTripZone
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/hippomint" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <HippoMintIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      HippoMint
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
          </Stack>
        </Box>
        <Box sx={{ minWidth: 200, flex: 1 }}>
          <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--ds-gray-900, #11181C)', lineHeight: '1.25rem', mb: 1 }}>
            Operations, Logistics & Asset Management
          </Typography>
          <Stack spacing={1}>
            <Link to="/hippobuildx-material" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <MaterialManagementIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      HippoBuildX – Material
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/hippobuildx-transport" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <TransportManagementIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      HippoBuildX – Transport
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/hippobuildx-asset" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <AssetManagementIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      HippoBuildX – Asset
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
          </Stack>
        </Box>
        <Box sx={{ minWidth: 200, flex: 1 }}>
          <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--ds-gray-900, #11181C)', lineHeight: '1.25rem', mb: 1 }}>
            IT & Infrastructure Services
          </Typography>
          <Stack spacing={1}>
            <Link to="/appdevsupport" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <DevelopmentIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      App Dev & Support
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/itopssupport" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <InfrastructureIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      IT Ops & Support
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );

  const solutionsMenu = (handleClose) => (
    <Box sx={{ p: 2, width: 400 }}>
      <Stack spacing={2}>
        <Box>
          <Stack spacing={1}>
            <Link to="/consultancy" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <ConsultancyIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      Consultancy
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/bpo" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <BPOIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      BPO
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/digitalmarketing" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <DigitalMarketingIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      Digital Marketing
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/infrasupport" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <InfraSupportIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      Infra Support & Managed Services
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
            <Link to="/staffaugmentation" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <StaffAugmentationIcon />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                      Staff Augmentation
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );

  const resourcesMenu = (handleClose) => (
    <Box sx={{ p: 2, width: 400 }}>
      <Stack spacing={2}>
        <Link to="/trainingsprojects" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <TrainingsProjectsIcon />
              <Box>
                <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                  Trainings & Projects
                </Typography>
              </Box>
            </Stack>
          </MenuItem>
        </Link>
        <Link to="/internships" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem sx={{ py: 1, borderRadius: 1 }} onClick={handleClose}>
            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <InternshipsIcon />
              <Box>
                <Typography variant="subtitle2" sx={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.25rem', color: 'var(--ds-gray-900, #11181C)' }}>
                  Internships
                </Typography>
              </Box>
            </Stack>
          </MenuItem>
        </Link>
      </Stack>
    </Box>
  );

  // Mobile menu items with submenus
  const mobileMenuItems = [
    { label: 'Home', path: '/' },
    { 
      label: 'Products', 
      submenu: [
        { 
          category: 'Software Products / Platforms',
          items: [
            { label: 'ERPNext', path: '/erpnext', icon: <AIInfrastructureIcon /> },
            { label: 'Enquery Management System', path: '/flowtech', icon: <FlowTechIcon /> },
            { label: 'HippoHRM', path: '/hippohrm', icon: <HippoHRMIcon /> },
            { label: 'HippoCRM', path: '/hippocrm', icon: <HippoCRMIcon /> },
            { label: 'HippoTripZone', path: '/hippotripzone', icon: <DeliveryNetworkIcon /> },
            { label: 'HippoMint', path: '/hippomint', icon: <HippoMintIcon /> },
          ]
        },
        { 
          category: 'Operations, Logistics & Asset Management',
          items: [
            { label: 'HippoBuildX – Material', path: '/hippobuildx-material', icon: <MaterialManagementIcon /> },
            { label: 'HippoBuildX – Transport', path: '/hippobuildx-transport', icon: <TransportManagementIcon /> },
            { label: 'HippoBuildX – Asset', path: '/hippobuildx-asset', icon: <AssetManagementIcon /> },
          ]
        },
        { 
          category: 'IT & Infrastructure Services',
          items: [
            { label: 'App Dev & Support', path: '/appdevsupport', icon: <DevelopmentIcon /> },
            { label: 'IT Ops & Support', path: '/itopssupport', icon: <InfrastructureIcon /> },
          ]
        }
      ]
    },
    { 
      label: 'Services', 
      submenu: [
        { label: 'Consultancy', path: '/consultancy', icon: <ConsultancyIcon /> },
        { label: 'BPO', path: '/bpo', icon: <BPOIcon /> },
        { label: 'Digital Marketing', path: '/digitalmarketing', icon: <DigitalMarketingIcon /> },
        { label: 'Infra Support & Managed Services', path: '/infrasupport', icon: <InfraSupportIcon /> },
        { label: 'Staff Augmentation', path: '/staffaugmentation', icon: <StaffAugmentationIcon /> },
      ]
    },
    { 
      label: 'Skill Hub', 
      submenu: [
        { label: 'Trainings & Projects', path: '/trainingsprojects', icon: <TrainingsProjectsIcon /> },
        { label: 'Internships', path: '/internships', icon: <InternshipsIcon /> },
      ]
    },
    { label: 'Partnership', path: '/partnership' },
    { label: 'About Us', path: '/about' }
  ];

  const mobileDrawer = (
    <Box sx={{ width: 280, p: 1.5, maxHeight: '100vh', overflow: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <IconButton onClick={handleMobileClose} sx={{ padding: 0.5, mr: 1 }}>
            <CloseIcon sx={{ color: '#666666', fontSize: '1.25rem' }} />
          </IconButton>
          <Typography variant="h6" sx={{ color: '#666666', fontSize: '1.1rem', fontWeight: 600 }}>Menu</Typography>
        </Box>
      </Box>
      <Divider sx={{ mb: 1 }} />
      <List sx={{ py: 0 }}>
        {mobileMenuItems.map((item) => (
          <Box key={item.label}>
            {item.submenu ? (
              <>
                <ListItem 
                  sx={{ 
                    px: 1, 
                    py: 1,
                    cursor: 'pointer',
                    minHeight: '40px',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      borderRadius: '4px'
                    }
                  }}
                  onClick={() => handleMenuToggle(item.label)}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    {expandedMenu === item.label ? (
                      <KeyboardArrowUp sx={{ color: '#666666', fontSize: '1.1rem', mr: 1.5 }} />
                    ) : (
                      <KeyboardArrowDown sx={{ color: '#666666', fontSize: '1.1rem', mr: 1.5 }} />
                    )}
                    <Typography 
                      sx={{ 
                        flex: 1,
                        color: '#000',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </ListItem>
                <Collapse in={expandedMenu === item.label} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 1.5 }}>
                    {item.submenu.map((subItem, index) => (
                      <Box key={index}>
                        {subItem.category ? (
                          // Category header for Products submenu
                          <>
                            <Typography 
                              variant="subtitle2" 
                              sx={{ 
                                fontSize: '0.7rem', 
                                fontWeight: 600, 
                                color: 'var(--ds-gray-700, #687076)', 
                                lineHeight: '1rem', 
                                mt: 1.5, 
                                mb: 0.5,
                                pl: 0.5,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                              }}
                            >
                              {subItem.category}
                            </Typography>
                            {subItem.items.map((categoryItem, catIndex) => (
                              <ListItem key={catIndex} sx={{ px: 0.5, py: 0.25 }}>
                                <NavLink
                                  component={Link}
                                  to={categoryItem.path}
                                  sx={{
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    color: '#000 !important',
                                    fontSize: '0.8rem',
                                    py: 0.75,
                                    pl: 0.5,
                                    minHeight: '36px'
                                  }}
                                  onClick={handleMobileClose}
                                >
                                  <Stack direction="row" spacing={1} alignItems="center">
                                    <Box sx={{ display: 'flex', width: 16, height: 16 }}>
                                      {categoryItem.icon}
                                    </Box>
                                    <Typography sx={{ fontSize: '0.8rem', lineHeight: '1.1' }}>
                                      {categoryItem.label}
                                    </Typography>
                                  </Stack>
                                </NavLink>
                              </ListItem>
                            ))}
                          </>
                        ) : (
                          // Regular menu item for Services and Skill Hub
                          <ListItem sx={{ px: 0.5, py: 0.25 }}>
                            <NavLink
                              component={Link}
                              to={subItem.path}
                              sx={{
                                width: '100%',
                                justifyContent: 'flex-start',
                                color: '#000 !important',
                                fontSize: '0.8rem',
                                py: 0.75,
                                pl: 0.5,
                                minHeight: '36px'
                              }}
                              onClick={handleMobileClose}
                            >
                              <Stack direction="row" spacing={1} alignItems="center">
                                <Box sx={{ display: 'flex', width: 16, height: 16 }}>
                                  {subItem.icon}
                                </Box>
                                <Typography sx={{ fontSize: '0.8rem', lineHeight: '1.1' }}>
                                  {subItem.label}
                                </Typography>
                              </Stack>
                            </NavLink>
                          </ListItem>
                        )}
                      </Box>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              // Regular menu item without submenu
              <ListItem sx={{ px: 1, py: 1, minHeight: '40px' }}>
                <NavLink
                  component={Link}
                  to={item.path}
                  sx={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    color: '#000 !important',
                    fontSize: '0.9rem',
                    py: 0.5,
                  }}
                  onClick={handleMobileClose}
                >
                  {item.label}
                </NavLink>
              </ListItem>
            )}
            <Divider sx={{ my: 0.75 }} />
          </Box>
        ))}
      </List>
      <Box sx={{ mt: 1.5, px: 0.5 }}>
        <Button
          variant="outlined"
          fullWidth
          sx={{ 
            borderRadius: '4px', 
            height: '34px', 
            textTransform: 'none', 
            fontSize: '0.85rem', 
            fontWeight: 500, 
            borderColor: 'var(--ds-gray-alpha-400, rgba(0,0,0,0.1))', 
            color: 'var(--ds-gray-1000, #000000)',
            minHeight: '34px'
          }}
          onClick={() => {
            handleContactClick();
            handleMobileClose();
          }}
        >
          Contact
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: 'background.paper', color: 'text.primary', borderBottom: '1px solid', borderColor: 'var(--ds-gray-alpha-200, rgba(0,0,0,0.08))' }}>
        <Container maxWidth="xl" disableGutters>
          <Toolbar sx={{ 
            justifyContent: 'space-between', 
            minHeight: '64px !important', 
            px: { xs: 2, md: 4 },
            gap: 2
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Link to="/">
                <Box component="img" src={process.env.PUBLIC_URL + "/hippo.jpg"} alt="Vercel" sx={{ height: 40, width: 100, color: 'transparent' }} />
              </Link>

              {!isMobile && (
                <Stack direction="row" spacing={0} sx={{ 
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  gap: 0
                }}>
                  <NavLink component={Link} to="/" sx={{ whiteSpace: 'nowrap' }}>Home</NavLink>
                  <HoverMenu
                    trigger={
                      <NavTrigger
                        endIcon={<KeyboardArrowDown sx={{ fontSize: 16, color: '#666666' }} />}
                        sx={{
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            borderRadius: '4px'
                          }
                        }}
                      >
                        Products
                      </NavTrigger>
                    }
                    content={productsMenu}
                  />

                  <HoverMenu
                    trigger={
                      <NavTrigger
                        endIcon={<KeyboardArrowDown sx={{ fontSize: 16, color: '#666666' }} />}
                        sx={{
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            borderRadius: '4px'
                          }
                        }}
                      >
                        Services
                      </NavTrigger>
                    }
                    content={solutionsMenu}
                  />
                  <HoverMenu
                    trigger={
                      <NavTrigger
                        endIcon={<KeyboardArrowDown sx={{ fontSize: 16, color: '#666666' }} />}
                        sx={{
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            borderRadius: '4px'
                          }
                        }}
                      >
                        Skill Hub
                      </NavTrigger>
                    }
                    content={resourcesMenu}
                  />
                  <NavLink component={Link} to="/partnership" sx={{ whiteSpace: 'nowrap' }}>Partnership</NavLink>
                  <NavLink component={Link} to="/about" sx={{ whiteSpace: 'nowrap' }}>About Us</NavLink>
                  {/* <NavLink component={Link} to="/three" sx={{ whiteSpace: 'nowrap' }}>3D Page</NavLink> */}
                </Stack>
              )}
            </Box>

            {!isMobile ? (
              <Box sx={{ flexShrink: 0 }}>
                <Button
                  variant="outlined"
                  sx={{ 
                    borderRadius: '6px', 
                    height: '32px', 
                    textTransform: 'none', 
                    fontSize: '14px', 
                    fontWeight: 500, 
                    borderColor: 'var(--ds-gray-alpha-400, rgba(0,0,0,0.1))', 
                    color: 'var(--ds-gray-1000, #000000)', 
                    px: 2,
                    whiteSpace: 'nowrap'
                  }}
                  onClick={handleContactClick}
                >
                  Contact
                </Button>
              </Box>
            ) : (
              <IconButton onClick={() => setMobileDrawerOpen(true)} sx={{ color: '#666666', padding: 1, flexShrink: 0 }}>
                <MenuIcon sx={{ fontSize: '1.5rem' }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer 
        anchor="right" 
        open={mobileDrawerOpen} 
        onClose={handleMobileClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
          },
        }}
      >
        {mobileDrawer}
      </Drawer>

      <Dialog
        open={contactOpen}
        onClose={handleContactClose}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            margin: { xs: 1, sm: 2 },
            width: '100%',
            maxWidth: '650px !important',
            borderRadius: 2,
            overflow: 'hidden'
          }
        }}
      >
        <DialogContent sx={{ p: 0, '&:first-of-type': { pt: 0 } }}>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;