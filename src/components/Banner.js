import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import BannerImage from '../assets/images/Banner.png';

function Banner() {
  return (
    <Box
      sx={{
        mt: { lg: '22px', xs: '70px' },
        ml: { sm: '50px' },
        position: 'relative',
        p: '20px',
        display: 'flex', // Use flexbox for layout
        alignItems: 'center', // Center align vertically
        justifyContent: 'space-between' // Space items evenly
      }}
    >
      <Stack spacing={2} sx={{ maxWidth: '60%', marginRight: '20px' }}>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          Fitness Guide
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
          Empower Body <br /> and Mind
        </Typography>

        <Typography fontSize="22px" lineHeight="35px" mb={3}>
          Unleash Your Strength and Confidence
        </Typography>

        <Button variant="contained" color="error" href="#exercises">
        Discover Excercises
        </Button>
      </Stack>

      <img src={BannerImage} alt="banner" className="hero-banner-img" style={{ width: '80%' }} />
    </Box>
  );
}

export default Banner;
