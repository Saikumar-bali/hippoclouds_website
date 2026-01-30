import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  CircularProgress
} from '@mui/material';
import { Close, Send } from '@mui/icons-material';

const LiveChatDialog = ({ open, onClose }) => {
  const [sessionId, setSessionId] = useState(null);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('Start a conversation with our support team!');
  const messagesEndRef = useRef(null);
  
  const workerUrl = 'https://hippoclouds2025.saikumarbali555.workers.dev';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    let pollInterval;
    
    if (sessionId) {
      pollInterval = setInterval(() => {
        loadMessages();
      }, 2000);
      
      // Load messages immediately
      loadMessages();
    }
    
    return () => {
      if (pollInterval) {
        clearInterval(pollInterval);
      }
    };
  }, [sessionId]);

  const startChat = async () => {
    if (!userName.trim()) {
      alert('Please enter your name to start the chat');
      return;
    }

    setIsLoading(true);
    setStatus('Starting chat...');

    try {
      const response = await fetch(`${workerUrl}/live-chat/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: userName.trim(),
          email: email.trim()
        })
      });

      const data = await response.json();
      
      if (data.sessionId) {
        setSessionId(data.sessionId);
        setStatus('Connected to support! Our team will respond shortly.');
      } else {
        throw new Error('Failed to start chat session');
      }
    } catch (error) {
      console.error('Error starting chat:', error);
      setStatus('Failed to start chat. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const loadMessages = async () => {
    if (!sessionId) return;

    try {
      const response = await fetch(`${workerUrl}/live-chat/messages?sessionId=${sessionId}`);
      const data = await response.json();
      
      if (data.messages) {
        setMessages(data.messages);
        if (data.messages.length > 0) {
          setStatus(null);
        }
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const sendMessage = async () => {
    if (!sessionId || !newMessage.trim()) return;

    const messageToSend = newMessage.trim();
    setNewMessage('');

    try {
      const response = await fetch(`${workerUrl}/live-chat/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          message: messageToSend,
          sender: 'user'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        await loadMessages(); // Reload messages to show the new one
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const resetChat = () => {
    setSessionId(null);
    setUserName('');
    setEmail('');
    setMessages([]);
    setNewMessage('');
    setStatus('Start a conversation with our support team!');
  };

  const handleClose = () => {
    resetChat();
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          height: '600px',
          maxHeight: '90vh',
          borderRadius: '15px',
          overflow: 'hidden'
        }
      }}
    >
      <DialogTitle sx={{ 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        textAlign: 'center',
        py: 2
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flex: 1, textAlign: 'center' }}>
            💬 Live Chat Support
          </Typography>
          <IconButton 
            onClick={handleClose}
            sx={{ color: 'white' }}
            size="small"
          >
            <Close />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
          We're here to help you!
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Chat Messages Area */}
        <Box sx={{ 
          flex: 1, 
          p: 2, 
          overflowY: 'auto',
          background: '#fafafa',
          minHeight: 0 // Important for flexbox scrolling
        }}>
          {!sessionId ? (
            // Start Chat Form
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Start Live Chat
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Our support team is ready to help you
              </Typography>
              
              <Stack spacing={2} sx={{ maxWidth: 300, margin: '0 auto' }}>
                <TextField
                  label="Your Name *"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Email (optional)"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="small"
                  fullWidth
                />
                <Button
                  variant="contained"
                  onClick={startChat}
                  disabled={isLoading || !userName.trim()}
                  startIcon={isLoading ? <CircularProgress size={16} /> : null}
                  sx={{
                    background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
                    borderRadius: '25px',
                    py: 1
                  }}
                >
                  {isLoading ? 'Starting Chat...' : 'Start Chat'}
                </Button>
              </Stack>
            </Box>
          ) : (
            // Chat Messages
            <>
              {status && (
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  textAlign="center" 
                  sx={{ mb: 2, fontStyle: 'italic' }}
                >
                  {status}
                </Typography>
              )}
              
              {messages.length === 0 ? (
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  textAlign="center" 
                  sx={{ py: 4 }}
                >
                  No messages yet. Start the conversation!
                </Typography>
              ) : (
                <Stack spacing={1.5}>
                  {messages.map((msg) => (
                    <Box
                      key={msg.id}
                      sx={{
                        maxWidth: '80%',
                        alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                        background: msg.sender === 'user' ? '#dcf8c6' : '#e3f2fd',
                        borderRadius: '18px',
                        p: 1.5,
                        borderBottomRightRadius: msg.sender === 'user' ? '4px' : '18px',
                        borderBottomLeftRadius: msg.sender === 'user' ? '18px' : '4px',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                      }}
                    >
                      <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                        {msg.message}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        color="text.secondary" 
                        sx={{ 
                          display: 'block',
                          textAlign: 'right',
                          mt: 0.5,
                          fontSize: '0.7rem'
                        }}
                      >
                        {new Date(msg.timestamp).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </Typography>
                    </Box>
                  ))}
                  <div ref={messagesEndRef} />
                </Stack>
              )}
            </>
          )}
        </Box>

        {/* Chat Input Area */}
        {sessionId && (
          <Box sx={{ 
            p: 2, 
            borderTop: '1px solid',
            borderColor: 'divider',
            background: 'white'
          }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <TextField
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '25px',
                    paddingRight: '12px'
                  }
                }}
              />
              <IconButton
                onClick={sendMessage}
                disabled={!newMessage.trim()}
                sx={{
                  background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #27ae60 0%, #219653 100%)',
                  },
                  '&.Mui-disabled': {
                    background: '#bdc3c7',
                    color: '#7f8c8d'
                  }
                }}
              >
                <Send fontSize="small" />
              </IconButton>
            </Stack>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LiveChatDialog;