// KYCStatus.jsx
import React from 'react';
import { Typography, Grid, IconButton, Box, Paper } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const KYCStatus = ({ kycStatus }) => (
 <Grid item xs={12} sm={6} md={6}>
    <Paper elevation={5} sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', px: 2, }}>
        <Typography variant="h6" component="h2" align="center" color='secondary.main' fontWeight='fontweightBold'>
          KYC Status
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton aria-label="kyc status" sx={{ mr: 2 }}>
            <VerifiedUserIcon sx={{ fontSize: '3rem', color: 'warning.main' }} />
          </IconButton>
          <Typography variant="body1">{kycStatus}</Typography>
        </Box>
      </Box>
    </Paper>
 </Grid>
);

export default KYCStatus;
