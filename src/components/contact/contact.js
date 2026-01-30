import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
  Paper,
  Grid,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  useTheme,
  useMediaQuery,
  styled,
  CircularProgress // Import CircularProgress for loading
} from '@mui/material';
import { CloudUpload, AttachFile, Send, Schedule } from '@mui/icons-material';

// Styled components for custom styling
const FileUploadArea = styled(Paper)(({ theme, isDragOver }) => ({
  border: `2px dashed ${isDragOver ? theme.palette.primary.main : theme.palette.grey[300]}`,
  backgroundColor: isDragOver ? theme.palette.primary.light : theme.palette.grey[50],
  padding: theme.spacing(3),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
  },
}));

const PhoneNumberContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[300]}`,
  overflow: 'hidden',
  '&:focus-within': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
  },
}));

const CountryCodeSelect = styled(Select)(({ theme }) => ({
  border: 'none',
  borderRight: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: 0,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    message: '',
  });

  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state
  
  const fileInputRef = useRef(null);

  // Handle form input changes
  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  // File handling functions
  const handleFileSelect = (files) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      const maxSizeBytes = 5 * 1024 * 1024; // 5 MB

      if (selectedFile.size > maxSizeBytes) {
        setDialogContent({
          title: 'File Error',
          message: `The file "${selectedFile.name}" is too large. Max size is 5 MB.`
        });
        setOpenDialog(true);
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleFileInputChange = (event) => {
    handleFileSelect(event.target.files);
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  // Drag and drop handlers
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    handleFileSelect(event.dataTransfer.files);
  };

  // Form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Simple validation
    if (!formData.firstName || !formData.email || !formData.message) {
      setDialogContent({
        title: 'Validation Error',
        message: 'Please fill out all required fields (First name, Email, Message).'
      });
      setOpenDialog(true);
      return;
    }

    setIsSubmitting(true); // Start loading

    try {
      // *** THIS IS THE FIX ***
      // Use the absolute URL just like in your successful PowerShell test
      const response = await fetch('https://hippochatbot.netlify.app/.netlify/functions/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // We expect JSON now, so we can parse it directly
      const responseData = await response.json();

      if (!response.ok) {
        // Handle server-side errors (e.g., 500, 400)
        throw new Error(responseData.details || responseData.error || 'Something went wrong on the server.');
      }

      // --- Success ---
      setDialogContent({
        title: 'Success!',
        message: 'Thank you for your message. We have received your request and will be in touch shortly.'
      });
      setOpenDialog(true);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        phoneNumber: '',
        message: '',
      });
      setFile(null);

    } catch (error) {
      // --- Error ---
      console.error('Submission Error:', error);
      // This will catch network errors (Failed to fetch) or JSON parsing errors
      setDialogContent({
        title: 'Submission Error',
        message: `We couldn't send your message. Please try again later. (${error.message})`
      });
      setOpenDialog(true);
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: { xs: 3, md: 5 }, 
          borderRadius: 2,
          border: `1px solid ${theme.palette.grey[200]}`
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              color: 'text.primary'
            }}
          >
            Contact us
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              fontWeight: 'normal'
            }}
          >
            Our friendly support team is here to help you.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          {/* Full Name Fields */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First name"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange('firstName')}
                required
                disabled={isSubmitting} // Disable when submitting
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last name"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange('lastName')}
                required
                disabled={isSubmitting} // Disable when submitting
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Grid>
          </Grid>

          {/* Email Field */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleInputChange('email')}
            required
            disabled={isSubmitting} // Disable when submitting
            sx={{ mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />

          {/* Phone Number Field */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" color="text.primary" fontWeight="medium">
                Phone number
              </Typography>
            </Box>
            <PhoneNumberContainer>
              <FormControl sx={{ minWidth: 120 }}>
                <CountryCodeSelect
                  value={formData.countryCode}
                  onChange={handleInputChange('countryCode')}
                  variant="outlined"
                  disabled={isSubmitting} // Disable when submitting
                >
                  <MenuItem value="+91">IN +91</MenuItem>
                </CountryCodeSelect>
              </FormControl>
              <TextField
                fullWidth
                placeholder="0203 0407291"
                value={formData.phoneNumber}
                onChange={handleInputChange('phoneNumber')}
                variant="outlined"
                disabled={isSubmitting} // Disable when submitting
                sx={{
                  '& .MuiOutlinedInput-root': {
                    border: 'none',
                    borderRadius: 0,
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  }
                }}
              />
            </PhoneNumberContainer>
          </Box>

          {/* Message Field */}
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            placeholder="Hello WorkScale team,"
            value={formData.message}
            onChange={handleInputChange('message')}
            required
            disabled={isSubmitting} // Disable when submitting
            sx={{ mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />

          {/* File Upload Section */}
          <Box sx={{ mb: 4 }}>
            {/* ... (File upload UI remains the same, still disabled during submit) ... */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" color="text.primary" fontWeight="medium">
                Attach file
              </Typography>
              <Typography variant="body2" color="text.secondary">
                (Optional)
              </Typography>
            </Box>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              style={{ display: 'none' }}
              accept=".png,.jpg,.jpeg,.pdf,.gif,.svg"
              disabled={isSubmitting}
            />
            <FileUploadArea
              isDragOver={isDragOver}
              onClick={!isSubmitting ? handleClickUpload : undefined} // Disable click
              onDragOver={!isSubmitting ? handleDragOver : undefined}
              onDragLeave={!isSubmitting ? handleDragLeave : undefined}
              onDrop={!isSubmitting ? handleDrop : undefined}
              sx={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
            >
              <CloudUpload sx={{ fontSize: 32, color: 'grey.400', mb: 1 }} />
              <Typography variant="body1" fontWeight="medium" gutterBottom>
                Click or drag and drop to upload your file
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {file 
                  ? `File attached: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`
                  : 'PNG, JPG, PDF, GIF, SVG (Max 5 MB)'
                }
              </Typography>
            </FileUploadArea>
          </Box>

          {/* Action Buttons */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send />}
                disabled={isSubmitting}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  backgroundColor: 'grey.900',
                  '&:hover': {
                    backgroundColor: 'grey.800',
                  },
                  '&:disabled': {
                    backgroundColor: 'grey.400',
                  }
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                size="large"
                startIcon={<Schedule />}
                disabled={isSubmitting}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  borderColor: 'grey.300',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'grey.400',
                    backgroundColor: 'grey.50',
                  },
                  '&:disabled': {
                    borderColor: 'grey.200',
                    color: 'grey.500',
                  }
                }}
              >
                Schedule a call
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Success/Error Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {dialogContent.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContent.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ContactForm;