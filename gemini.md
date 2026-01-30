# GEMINI.md — Creative UI & Design Assistant (MUI-first)

> **Purpose:** A MUI-centric version of the "Creative UI and Design Assistant" spec. This file contains setup, conventions, MUI-first implementation examples, component templates, theme system, accessibility notes, and multiple visual variants.

---

## 1. Project Overview

**Goal:** Build beautiful, modern, responsive React UIs using Material UI (MUI) as the primary component system, with Framer Motion for animation and custom SVG icons. Keep components modular, accessible, and production-ready.

**Primary stack**

* React (functional components, hooks)
* @mui/material, @mui/icons-material, @mui/system
* framer-motion
* emotion (for MUI styling) or styled-components (optional)
* TypeScript optional (examples here use JS but are easily converted)

---

## 2. Design Rules (MUI-first)

1. **Design Style**

   * Use MUI tokens and `createTheme` for consistent spacing, typography, and color.
   * Soft shadows via `elevation` and `Box` `sx` props. Use `borderRadius: '16px'` to `32px` for xl–2xl feel.
   * Gradients: apply subtly with `linear-gradient` on `Paper` or `Box` backgrounds.

2. **Layout**

   * Use MUI `Grid` and `Stack` for responsive layout. Mobile-first breakpoints in the theme.
   * Avoid fixed positioning. Prefer `position: sticky` for headers or sidebars when needed.

3. **SVG & Icons**

   * Provide small React-based SVG components that accept `size` and `color` props.
   * Wrap custom icons with MUI's `SvgIcon` when you want MUI's color/size handling.

4. **Animation**

   * Use Framer Motion's `motion()` wrapper around MUI components. Keep animations subtle: `opacity`, `y`, `scale`.

5. **Code Format**

   * Functional components with hooks only. Keep each major UI piece in its own file.

---

## 3. Modern UI Requirements & Instructions

### 3.1 Advanced Visual Effects
- Implement glass morphism effects using backdrop filters with semi-transparent backgrounds
- Create floating elements with subtle shadows and depth layers
- Use gradient borders and animated gradient backgrounds
- Implement particle effects for hero sections using canvas or libraries like tsparticles
- Add shimmer loading effects for better perceived performance

### 3.2 Complex Layout Patterns
- Implement asymmetric grid layouts with varying card sizes
- Create masonry layouts for image galleries and content grids
- Design overlapping elements with proper z-index management
- Build responsive layouts that transform significantly between breakpoints
- Implement sticky scroll effects and parallax scrolling

### 3.3 Advanced Interaction Patterns
- Add hover transformations with scale, rotation, and elevation changes
- Implement drag-and-drop interfaces for dashboards and lists
- Create swipeable carousels and touch-friendly navigation
- Add context menus and right-click interactions
- Implement keyboard navigation with focus management

### 3.4 Data Visualization
- Integrate modern chart libraries (Chart.js, Recharts, D3) with MUI theming
- Create interactive dashboards with real-time data updates
- Implement custom gauges, progress indicators, and metric displays
- Add data filtering, sorting, and search with smooth transitions
- Create responsive data tables with advanced features (pagination, row expansion)

### 3.5 Micro-interactions & Feedback
- Implement skeleton screens for all loading states
- Add success/error states with animated feedback
- Create progress indicators for multi-step processes
- Implement toast notifications with entrance/exit animations
- Add haptic feedback patterns for mobile interactions

### 3.6 Advanced Navigation
- Create mega menus with categorized content and images
- Implement breadcrumb navigation with responsive collapse
- Design off-canvas navigation with smooth transitions
- Add quick action floating buttons with expandable options
- Implement tabbed interfaces with animated indicators

### 3.7 Form Enhancements
- Create multi-step forms with progress tracking
- Implement real-time validation with visual feedback
- Add auto-save functionality with status indicators
- Design advanced form controls (date range pickers, color pickers, file upload)
- Implement form wizard patterns with step validation

### 3.8 Content Presentation
- Create card variations with different content densities
- Implement expandable/collapsible content sections
- Design timeline components for chronological content
- Add tooltip systems with rich content support
- Implement modal/dialog systems with multiple size variants

### 3.9 Performance & UX
- Implement virtual scrolling for long lists
- Add image lazy loading with blur-up placeholders
- Create infinite scroll with loading thresholds
- Implement service worker integration for offline functionality
- Add PWA capabilities with install prompts

### 3.10 Theming & Personalization
- Implement dynamic theme switching (light/dark/auto)
- Create color customization options for users
- Add layout density preferences (compact/comfortable)
- Implement font size adjustment accessibility feature
- Create preset theme variations for different use cases

### 3.11 Accessibility Enhancements
- Implement screen reader announcements for dynamic content
- Add keyboard shortcut support for power users
- Create high contrast theme variants
- Implement reduced motion preferences
- Add focus management for modal and route transitions

### 3.12 Advanced Animation Patterns
- Implement page transition animations between routes
- Create shared element transitions for gallery items
- Add staggered animations for list items
- Implement morphing animations between component states
- Create physics-based animations for natural movement

### 3.13 Responsive Behavior
- Implement adaptive components that change structure between breakpoints
- Create mobile-first designs with progressive enhancement
- Add touch-optimized interfaces for mobile devices
- Implement responsive typography that scales appropriately
- Create conditional rendering based on device capabilities

### 3.14 Error Handling & Empty States
- Design comprehensive error boundaries with fallback UI
- Create meaningful empty states with calls to action
- Implement retry mechanisms for failed operations
- Add offline states with reconnection logic
- Design loading states that match the final content structure

### 3.15 Internationalization
- Implement RTL (right-to-left) language support
- Add locale-specific formatting for dates and numbers
- Create language switcher with flag icons
- Implement dynamic content based on user locale
- Add translation management system integration

---

## 4. Install & Quick Setup

```bash
# using npm
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled framer-motion

# optional (for icons and lab components)
npm install @mui/lab
```

Create a minimal theme and provider.

```jsx
// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6750A4' },
    secondary: { main: '#03DAC6' },
    background: { default: '#F7F7FB', paper: '#FFFFFF' },
  },
  shape: { borderRadius: 16 },
  typography: {
    h1: { fontSize: '2rem', fontWeight: 700 },
    h2: { fontSize: '1.5rem', fontWeight: 600 },
    body1: { fontSize: '1rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '8px 14px',
        },
      },
    },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
});

export default theme;
```

```jsx
// src/main.jsx or src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
```

---

## 5. File Structure (suggested)

```
src/
├─ components/
│  ├─ ui/                 # small reusable UI pieces (Card, Badge, Avatar)
│  ├─ layout/             # Header, Sidebar, Footer
│  ├─ sections/           # Hero, Features, Pricing
│  ├─ partnership/
│  │  └─── PartnershipPage.js
│  └─ icons/              # custom svg icons (as React components)
├─ pages/
│  └─ Dashboard.jsx
├─ theme.js
├─ App.jsx
└─ index.jsx
```

---

## 6. Component Examples (MUI-heavy)

> **NOTE:** Code blocks include file path comments. Copy files as-is into your project.

### 6.1 Theme-aware Animated Hero (uses Framer Motion + MUI)

```jsx
// src/sections/Hero.jsx
import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import RocketIcon from '../icons/RocketIcon';

const MotionPaper = motion(Paper);

export default function Hero() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        elevation={6}
        sx={{ px: { xs: 3, md: 6 }, py: { xs: 4, md: 6 }, borderRadius: 3 }}
      >
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" gap={4}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" gutterBottom>
              Build beautiful UIs faster with Gemini & MUI
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Modern, accessible components—styled with MUI and animated with Framer Motion.
            </Typography>
            <Button variant="contained" size="large" sx={{ mr: 2 }}>
              Get Started
            </Button>
            <Button variant="outlined" size="large">
              Explore Templates
            </Button>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 320 }, textAlign: 'center' }}>
            <RocketIcon size={120} />
          </Box>
        </Box>
      </MotionPaper>
    </Container>
  );
}
```

### 6.2 Responsive Sidebar with MUI Drawer

```jsx
// src/layouts/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Avatar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar({ open, onClose, variant = 'temporary' }) {
  return (
    <Drawer open={open} onClose={onClose} variant={variant} PaperProps={{ sx: { width: 260, borderRadius: 0 } }}>
      <Box sx={{ p: 2 }}>
        <Box display="flex" alignItems="center" gap={2} sx={{ mb: 1 }}>
          <Avatar sx={{ width: 48, height: 48 }}>G</Avatar>
          <Box>
            <Typography variant="subtitle1">Gemini</Typography>
            <Typography variant="caption" color="text.secondary">Creative UI</Typography>
          </Box>
        </Box>

        <List>
          <ListItemButton>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
```

### 6.3 Dashboard Grid (responsive cards)

```jsx
// src/sections/DashboardGrid.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

export default function DashboardGrid({ items = [] }) {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {items.map((it, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={it.id || idx}>
            <MotionCard initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }} elevation={3}>
              <CardContent>
                <Typography variant="h6">{it.title}</Typography>
                <Typography variant="body2" color="text.secondary">{it.subtitle}</Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
```

### 6.4 Custom SVG Icon Example (wrapped in MUI SvgIcon)

```jsx
// src/icons/RocketIcon.jsx
import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function RocketIcon({ size = 48, color = 'inherit', ...props }) {
  return (
    <SvgIcon {...props} sx={{ fontSize: size, color }} viewBox="0 0 24 24">
      <path d="M12 2c1.1 0 2 .9 2 2 0 .74-.4 1.38-1 1.73v2.04l3 3V9c0-1.1.9-2 2-2s2 .9 2 2v6c0 .55-.22 1.05-.59 1.41l-5 5c-.36.37-.86.59-1.41.59H8c-1.1 0-2-.9-2-2v-6c0-.55.22-1.05.59-1.41L14 6.27V4.73C13.4 4.38 13 3.74 13 3c0-1.1-.9-2-2-2z" />
    </SvgIcon>
  );
}
```

> Tip: Keep icons as minimal paths and reuse via `size` & `color` props.

---

## 7. Accessibility & ARIA

* Use `aria-label` on icon-only buttons (e.g., `<IconButton aria-label="open settings">`).
* Ensure `alt` attributes for images and `role="status"` for live-updating text.
* Use semantic HTML (MUI components map to semantic elements: `Button` -> `button`, `Typography` -> `p`/`h` tags when `variantMapping` set).

---

## 8. Two Visual Variants (A vs B)

### Variant A — Clean Dashboard (default)

* Light background, soft purple primary, elevated cards, rounded corners.
* Subtle slide-up entrance animations for cards.
* Primary CTA: filled `Button` (rounded) with subtle shadow.

### Variant B — Dark Studio

* Dark theme (mode: 'dark'), stronger contrast, glassy cards with semi-transparent backgrounds.
* Accent gradient on headers, slightly more pronounced hover scale on cards.
* Use `BackdropFilter` for frosted-glass effect in modern browsers.

Provide a theme snippet for dark:

```js
// src/theme.dark.js
import { createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7C4DFF' },
    background: { default: '#0B1020', paper: 'rgba(255,255,255,0.03)' },
  },
  shape: { borderRadius: 16 },
});
export default darkTheme;
```

---

## 9. Advanced Tips & Patterns

* **Utility `sx` + tokens:** Use `sx={{ p: 2, borderRadius: 3 }}` for inline one-off styles that remain theme-aware.
* **Composable small components:** `IconBox`, `Metric`, `MiniStat` — small single-purpose components make dashboards coherent.
* **Responsive Images/Vectors:** Use `Box` with `component="img"` + `srcSet` when needed.
* **Motion with MUI:** Wrap MUI components using `motion(MuiComponent)` to keep type-safety and props intact.
* **Performance:** Tree-shake icons by importing icon components you need instead of whole icon packs.

---

## 10. Example App Shell (how to assemble)

```jsx
// src/App.jsx
import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './layouts/Sidebar';
import Hero from './sections/Hero';
import DashboardGrid from './sections/DashboardGrid';

export default function App() {
  const [open, setOpen] = useState(false);
  const isMd = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <Box>
      <AppBar position="sticky" elevation={1}>
        <Toolbar>
          {!isMd && (
            <IconButton edge="start" aria-label="menu" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Gemini</Typography>
        </Toolbar>
      </AppBar>

      <Sidebar open={open} onClose={() => setOpen(false)} variant={isMd ? 'permanent' : 'temporary'} />

      <Box component="main" sx={{ ml: { md: '260px' }, transition: 'margin-left 0.3s' }}>
        <Hero />
        <DashboardGrid items={[{ id: 1, title: 'Revenue', subtitle: '$12.3k' }, { id: 2, title: 'Active Users', subtitle: '2,345' }]} />
      </Box>
    </Box>
  );
}
```

---

## 11. Component Export & Reuse Guidelines

* Export default each page/section file, and give small UI atoms named exports when needed.
* Keep small `ui/` components: `BadgePill.jsx`, `Metric.jsx`, `StatChip.jsx`.
* Put cross-cutting hooks in `src/hooks/` (e.g., `useResponsive`, `usePrefersReducedMotion`).

---

## 12. Migration Notes (Tailwind → MUI)

If you previously used Tailwind, prefer the following mapping:

* Spacing: `p-4` → `sx={{ p: 2 }}` (theme spacing uses 8px scale by default).
* Rounded corners: `rounded-xl` → `sx={{ borderRadius: 16 }}` or `theme.shape.borderRadius`.
* Shadows: `shadow-lg` → `elevation={6}` on `Paper`/`Card`.

You can still use Tailwind for low-level utility classes, but prefer MUI for consistent token usage.

---

## 13. Design Summary

This MUI-first design emphasizes consistency and developer ergonomics. Using `createTheme` centralizes visual tokens (colors, spacing, type), while MUI components accelerate building accessible, responsive UIs. Framer Motion integrates seamlessly for subtle, meaningful motion. Custom SVG icons wrapped with `SvgIcon` ensure visual harmony with MUI's sizing and color system.

### Why these choices?

* **MUI** provides a robust, accessible component library with theming built-in — perfect for fast prototyping and production-ready UIs.
* **Framer Motion** brings fluid motion without heavy implementation cost.
* **Custom SVGs** allow brand-specific visuals while staying consistent with MUI sizing.

---

## 14. Next steps / To iterate

* Convert examples to TypeScript for stricter type-safety.
* Add snapshot/visual tests for critical components.
* Add small storybook setup for interactive component exploration.
* Research and implement modern UI trends from leading design systems
* Conduct user testing for complex interaction patterns
* Optimize performance for advanced visual effects
* Create comprehensive documentation for custom components
* Implement A/B testing for different UI variations

---

*End of GEMINI.md*