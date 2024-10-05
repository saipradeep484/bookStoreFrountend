import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';

const Edit = () => {
  const [customerData, setCustomerData] = useState({
    id: '',
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

  // Handle form submission to update a customer
  const handleSubmit = (e) => {
    e.preventDefault();

    // Destructure customerData to get the ID separately
    const { id, ...updatedData } = customerData;

    // Send PUT request to update customer data by ID
    axios.put(`http://localhost:8085/bank/customers/${id}`, updatedData)
      .then((response) => {
        console.log('Success:', response);
        setMessage('Customer updated successfully!');
        setCustomerData({ id: '', customerBooks: '', customerAmount: '' }); // Reset the form
      })
      .catch((error) => {
        if (error.response) {
          // Server responded with a status other than 200
          console.error('Server Error:', error.response.data);
          setMessage(`Error: ${error.response.data.message || 'Server Error'}`);
        } else if (error.request) {
          // Request was made but no response was received
          console.error('No Response:', error.request);
          setMessage('Error: No response from server.');
        } else {
          // Something happened in setting up the request
          console.error('Error:', error.message);
          setMessage(`Error: ${error.message}`);
        }
      });
  };

  return (
    <div>
      <Typography variant="h4">Update Customer Data</Typography>

      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, marginTop: 3 }}
      >
        <TextField
          label="Customer ID"
          name="id"
          value={customerData.id}
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

        <Button type="submit" variant="contained" color="primary">
          Update Customer
        </Button>
      </Box>

      {message && <Typography variant="body1" sx={{ marginTop: 2 }}>{message}</Typography>}
    </div>
  );
};

export default Edit;
