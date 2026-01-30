// components/layout/ScrollToTop.js
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Temporarily disable smooth scrolling
    const html = document.documentElement;
    const originalStyle = html.style.scrollBehavior;
    
    // Disable smooth scrolling
    html.style.scrollBehavior = 'auto';
    
    // Instant scroll
    window.scrollTo(0, 0);
    
    // Restore original scroll behavior after a tiny delay
    const timer = setTimeout(() => {
      html.style.scrollBehavior = originalStyle;
    }, 10);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;