import React from 'react';
import { Box, Typography } from '@mui/material';

const ScrollingText = () => {
  return (
    <Box
      sx={{
        width: '100%', // Full width of the container
        overflow: 'hidden', // Hide the overflowing text
        whiteSpace: 'nowrap', // Prevent line breaks
        position: 'relative',
        backgroundColor: 'rgba(36, 114, 36, 0.3)', // Optional background color
        padding: {xs:'1px',lg:'10px'}, // Optional padding
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          paddingLeft: '100%', // Start text off-screen to the right
          animation: 'scroll-left 30s linear infinite', // Animation
        }}
      >
        <Typography variant="body1" sx={{ display: 'inline', fontSize:{xs:'12px', lg:'20px'} }}>
            | FOR HOME COLLECTION OF PATHOLOGICAL SAMPLE PLEASE DIAL OR WHATSAPP AT 6292235660 | FOR HOME COLLECTION OF PATHOLOGICAL SAMPLE PLEASE DIAL OR WHATSAPP AT 6292235660
        </Typography>
      </Box>
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default ScrollingText;
