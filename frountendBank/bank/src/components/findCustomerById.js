import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';

const FindCustomer = () => {
  const [customerId, setCustomerId] = useState('');
  const [customerData, setCustomerData] = useState(null);
  const [message, setMessage] = useState('');

  // Handle input change for Customer ID
  const handleChange = (e) => {
    setCustomerId(e.target.value);
  };

  // Handle form submission to fetch customer details
  const handleSearch = (e) => {
    e.preventDefault();

    // Send GET request to fetch customer by ID
    axios.get(`http://localhost:8085/bank/customers/${customerId}`)
      .then((response) => {
        console.log('Customer found:', response.data);
        setCustomerData(response.data);
        setMessage('');
      })
      .catch((error) => {
        if (error.response) {
          // Server responded with a status other than 200
          console.error('Server Error:', error.response.data);
          setMessage(`Error: ${error.response.data.message || 'Customer not found.'}`);
          setCustomerData(null);
        } else if (error.request) {
          // Request was made but no response was received
          console.error('No Response:', error.request);
          setMessage('Error: No response from server.');
          setCustomerData(null);
        } else {
          // Something happened in setting up the request
          console.error('Error:', error.message);
          setMessage(`Error: ${error.message}`);
          setCustomerData(null);
        }
      });
  };

  return (
    <div>
      <Typography variant="h4">Find Customer by ID</Typography>

      <Box 
        component="form" 
        onSubmit={handleSearch} 
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, marginTop: 3 }}
      >
        <TextField
          label="Customer ID"
          name="id"
          value={customerId}
          onChange={handleChange}
          variant="outlined"
          required
        />

        <Button type="submit" variant="contained" color="primary">
          Find Customer
        </Button>
      </Box>

      {message && <Typography variant="body1" sx={{ marginTop: 2 }}>{message}</Typography>}

      {customerData && (
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6">Customer Details:</Typography>
          <Typography><strong>ID:</strong> {customerData.id}</Typography>
          <Typography><strong>Books:</strong> {customerData.customerBooks}</Typography>
          <Typography><strong>Amount:</strong> {customerData.customerAmount}</Typography>
        </Box>
      )}
    </div>
  );
};

export default FindCustomer;
