import React, { useState } from 'react';
import { Fab, Badge, Tooltip } from '@mui/material';
import { Chat, Close } from '@mui/icons-material';
import LiveChatDialog from './LiveChatDialog';

const LiveChatButton = ({ open, onOpen, onClose, isChatbotOpen }) => {
  const [notificationCount, setNotificationCount] = useState(0);

  const handleOpen = () => {
    onOpen();
    setNotificationCount(0);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Tooltip title="Live Chat Support" arrow placement="top">
        <Fab
          onClick={handleOpen}
          sx={{
            position: 'fixed',
            bottom: 84,
            right: 34,
            background: 'linear-gradient(135deg, #25d366 0%, #128C7E 100%)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
            },
            zIndex: 9999,
            display: (open || isChatbotOpen) ? 'none' : 'flex' // Hide when chatbot OR live chat is open
          }}
          size="medium"
        >
          <Badge 
            badgeContent={notificationCount} 
            color="error"
            invisible={notificationCount === 0}
          >
            {open ? <Close /> : <Chat />}
          </Badge>
        </Fab>
      </Tooltip>

      <LiveChatDialog open={open} onClose={handleClose} />
    </>
  );
};

export default LiveChatButton;