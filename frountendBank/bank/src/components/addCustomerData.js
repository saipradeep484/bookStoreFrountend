import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(4, 'auto'),
  maxWidth: 400,
  backgroundColor: '#f5f5f5',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: 10,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  fontSize: '1.1rem',
  background: 'linear-gradient(to right, #6a11cb, #2575fc)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(to right, #2575fc, #6a11cb)',
  },
}));

const AddCustomer = () => {
  // Updated customerData to include 'customerName'
  const [customerData, setCustomerData] = useState({
    customerName: '',    // New field for customer name
    customerBooks: '',
    customerAmount: ''
  });
  const [message, setMessage] = useState('');

  // Handle input change for form fields
  const handleChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission to add a customer
  const handleSubmit = (e) => {
    e.preventDefault();

    // Adjusted to send the updated customerData object with 'customerName'
    axios.post('http://localhost:8085/bank/saveCustomer', customerData)
      .then((response) => {
        console.log('Success:', response);
        setMessage('Customer added successfully!');
        // Reset the form fields, including the new 'customerName' field
        setCustomerData({ serialNumber: '', customerBooks: '', customerAmount: '' });
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
      <StyledForm elevation={3}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#6a11cb' }}>
          Add Customer Data
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          
          {/* New TextField for customerName */}
          <TextField
            label="Customer Name"
            name="customerName"
            value={customerData.customerName}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <TextField
            label="Number of Books"
            name="customerBooks"
            value={customerData.customerBooks}
            onChange={handleChange}
            variant="outlined"
            required
          />
          
          <TextField
            label="Customer Amount"
            name="customerAmount"
            value={customerData.customerAmount}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <StyledButton type="submit" variant="contained" fullWidth>
            Submit
          </StyledButton>
        </Box>

        {message && <Typography variant="body1" sx={{ marginTop: 2, color: '#ff1744', textAlign: 'center' }}>{message}</Typography>}
      </StyledForm>
    </Box>
  );
};

export default AddCustomer;
