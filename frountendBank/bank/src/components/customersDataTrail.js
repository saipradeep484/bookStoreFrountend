import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, List, ListItem, ListItemText, CircularProgress, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styled Paper component for the customer list container
const StyledContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(4, 'auto'),
  maxWidth: 600,
  backgroundColor: '#fafafa',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
}));

// Styled Button for refresh
const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  background: 'linear-gradient(to right, #ff5f6d, #ffc371)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(to right, #ffc371, #ff5f6d)',
  },
}));

const ViewCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch customer data from the backend
  useEffect(() => {
    axios.get('http://localhost:8085/bank/customers')
      .then(response => {
        setCustomers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Error fetching customer data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}><CircularProgress /></Box>;
  }

  if (error) {
    return <Typography color="error" sx={{ textAlign: 'center', marginTop: 4 }}>{error}</Typography>;
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f4f7' }}>
      <StyledContainer elevation={3}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#6a11cb' }}>
          Customer's Data
        </Typography>

        {customers.length > 0 ? (
          <List>
            {customers.map((customer) => (
              <ListItem key={customer.id} divider sx={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '8px', marginBottom: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <ListItemText 
                
                  primary={` Name: ${customer.customerName} (ID: ${customer.id})`} 
                  secondary={`Books: ${customer.customerBooks}, Amount: ${customer.customerAmount}`} 
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1" align="center">No customers found.</Typography>
        )}

        <StyledButton variant="contained" onClick={() => window.location.reload()} fullWidth>
          Refresh Customer Data
        </StyledButton>
      </StyledContainer>
    </Box>
  );
};

export default ViewCustomers;
