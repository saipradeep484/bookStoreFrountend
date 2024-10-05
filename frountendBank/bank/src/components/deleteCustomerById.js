import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styled Paper component for the form container
const StyledFormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(4, 'auto'),
  maxWidth: 400,
  backgroundColor: '#f5f5f5',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: 12,
}));

// Styled Button for delete action
const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  background: 'linear-gradient(to right, #f12711, #f5af19)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(to right, #f5af19, #f12711)',
  },
}));

const DeleteCustomer = () => {
  const [customerId, setCustomerId] = useState('');
  const [message, setMessage] = useState('');

  // Handle input change for Customer ID
  const handleChange = (e) => {
    setCustomerId(e.target.value);
  };

  // Handle form submission to delete customer
  const handleDelete = (e) => {
    e.preventDefault();

    // Send DELETE request to delete customer by ID
    axios.delete(`http://localhost:8085/bank/${customerId}`)
      .then((response) => {
        console.log('Success:', response);
        setMessage('Customer deleted successfully!');
        setCustomerId(''); // Clear the input field
      })
      .catch((error) => {
        if (error.response) {
          console.error('Server Error:', error.response.data);
          setMessage(`Error: ${error.response.data.message || 'Server Error'}`);
        } else if (error.request) {
          console.error('No Response:', error.request);
          setMessage('Error: No response from server.');
        } else {
          console.error('Error:', error.message);
          setMessage(`Error: ${error.message}`);
        }
      });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#eef2f3' }}>
      <StyledFormContainer elevation={3}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#f12711' }}>
          Delete Customer
        </Typography>

        <Box 
          component="form" 
          onSubmit={handleDelete} 
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', marginTop: 3 }}
        >
          <TextField
            label="Customer ID"
            name="id"
            value={customerId}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />

          <StyledButton type="submit" variant="contained" fullWidth>
            Delete Customer
          </StyledButton>
        </Box>

        {message && (
          <Typography variant="body1" sx={{ marginTop: 2, color: message.includes('Error') ? 'red' : 'green', textAlign: 'center' }}>
            {message}
          </Typography>
        )}
      </StyledFormContainer>
    </Box>
  );
};

export default DeleteCustomer;
