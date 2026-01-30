
import { styled, Box, Button } from '@mui/material';

export const NavTrigger = styled(Button)(({ theme }) => ({
  fontFamily: 'var(--font-sans, "Inter", sans-serif)',
  cursor: 'pointer',
  background: 'transparent',
  border: 0,
  borderRadius: '9999px',
  outline: 'none',
  padding: '8px 12px',
  fontSize: '14px',
  lineHeight: 1,
  transitionProperty: 'color, background',
  transitionDuration: '90ms',
  transitionTimingFunction: 'ease',
  color: '#666666',
  textTransform: 'none',
  fontWeight: 400,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
}));

export const NavLink = styled(Button)(({ theme }) => ({
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  userSelect: 'none',
  fontFamily: 'var(--font-sans, "Inter", sans-serif)',
  cursor: 'pointer',
  background: 'transparent',
  border: 0,
  borderRadius: '9999px',
  outline: 'none',
  padding: '8px 12px',
  fontSize: '14px',
  lineHeight: 1,
  transitionProperty: 'color, background',
  transitionDuration: '90ms',
  transitionTimingFunction: 'ease',
  color: '#666666 !important',
  textTransform: 'none',
  fontWeight: 400,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'var(--ds-gray-alpha-200, rgba(0,0,0,0.04))',
    background: 'transparent',
    color: '#666666 !important',
  },
}));
