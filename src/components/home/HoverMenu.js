import React, { useState } from 'react';
import { Menu, Box } from '@mui/material';

const HoverMenu = ({ trigger, content }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Render the content with handleClose function
  const renderContent = () => {
    if (typeof content === 'function') {
      return content(handleClose);
    }
    return content;
  };

  return (
    <Box 
      sx={{ display: 'inline-block' }}
      onMouseEnter={handleOpen}
    >
      {React.cloneElement(trigger, { onMouseEnter: handleOpen })}
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        disableScrollLock={true} 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        {renderContent()}
      </Menu>
    </Box>
  );
};

export default HoverMenu;