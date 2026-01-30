import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    IconButton,
    TextField,
    Typography,
    Paper,
    Fab,
    Slide,
    Fade,
    Avatar,
    CircularProgress
} from '@mui/material';
import {
    Close as CloseIcon,
    Send as SendIcon,
    SmartToy as BotIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const ChatContainer = styled(Box)(({ theme }) => ({
    position: 'fixed',
    bottom: 5,
    right: 24,
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
}));

const ChatFab = styled(Fab)(({ theme }) => ({
    backgroundColor: '#000000',
    color: 'white',
    '&:hover': {
        backgroundColor: '#333333',
    },
    width: 60,
    height: 60,
}));

const ChatWindow = styled(Paper)(({ theme }) => ({
    width: 350,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 12,
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    overflow: 'hidden',
    border: '1px solid rgba(0,0,0,0.1)',
}));

const ChatHeader = styled(Box)(({ theme }) => ({
    backgroundColor: '#000000',
    color: 'white',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
}));

const MessagesContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    padding: '16px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    backgroundColor: '#f8f9fa',
}));

const MessageBubble = styled(Box)(({ theme, isUser }) => ({
    maxWidth: '80%',
    padding: '12px 16px',
    borderRadius: '18px',
    alignSelf: isUser ? 'flex-end' : 'flex-start',
    backgroundColor: isUser ? '#000000' : '#ffffff',
    color: isUser ? 'white' : 'black',
    border: isUser ? 'none' : '1px solid #e0e0e0',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
}));

const InputContainer = styled(Box)(({ theme }) => ({
    padding: '16px',
    borderTop: '1px solid #e0e0e0',
    backgroundColor: 'white',
    display: 'flex',
    gap: 1,
    alignItems: 'center',
}));

const Chatbot = ({ open, onOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! Welcome to HippoClouds. I'm here to help you with any questions about our products and services. How can I assist you today?",
            isUser: false,
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
      if (!inputValue.trim() || isLoading) return;

      const userMessage = {
        id: messages.length + 1,
        text: inputValue,
        isUser: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsLoading(true);

      try {
        const targetUrl = 'https://hippochatbot.netlify.app/.netlify/functions/chat';
         
        const response = await fetch(targetUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: inputValue }),
        });
        console.log("response",response);

        if (!response.ok) {
          const errorData = await response.json();
          console.error("API Error Response:", errorData);
          throw new Error(errorData.details || errorData.error || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        const botMessage = {
          id: messages.length + 2,
          text: data.reply,
          isUser: false,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        console.error('Error:', error);
        
        const errorMessage = {
          id: messages.length + 2,
          text: `I'm having connection issues. Please try again later. (${error.message})`,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const toggleChat = () => {
        if (open) {
            onClose();
        } else {
            onOpen();
        }
    };

    return (
        <ChatContainer>
            <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                <ChatWindow sx={{mt:-50}}>
                    <ChatHeader>
                        <Avatar sx={{ bgcolor: 'white', color: 'black', width: 32, height: 32 }}>
                            <BotIcon fontSize="small" />
                        </Avatar>
                        <Typography variant="h6" sx={{ flex: 1, fontSize: '1rem', fontWeight: 600 }}>
                            Hippo Assistant
                        </Typography>
                        <IconButton
                            size="small"
                            sx={{ color: 'white' }}
                            onClick={toggleChat}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </ChatHeader>

                    <MessagesContainer>
                        {messages.map((message) => (
                            <Fade key={message.id} in={true}>
                                <MessageBubble isUser={message.isUser}>
                                    <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                                        {message.text}
                                    </Typography>
                                </MessageBubble>
                            </Fade>
                        ))}
                        {isLoading && (
                            <MessageBubble isUser={false}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CircularProgress size={16} />
                                    <Typography variant="body2">Thinking...</Typography>
                                </Box>
                            </MessageBubble>
                        )}
                        <div ref={messagesEndRef} />
                    </MessagesContainer>

                    <InputContainer>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Type your message..."
                            size="small"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disabled={isLoading}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                    backgroundColor: '#f8f9fa',
                                }
                            }}
                        />
                        <IconButton
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim() || isLoading}
                            sx={{
                                color: 'black',
                                '&:disabled': {
                                    color: '#ccc'
                                }
                            }}
                        >
                            <SendIcon />
                        </IconButton>
                    </InputContainer>
                </ChatWindow>
            </Slide>

            <Fade in={!open}>
                <ChatFab onClick={toggleChat}>
                    <BotIcon />
                </ChatFab>
            </Fade>
        </ChatContainer>
    );
};

export default Chatbot;