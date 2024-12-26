import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import LeftSection from './LeftPane';
import RightSection from './RightPane';

const MainLayout = () => {
  const [qrCodes, setQrCodes] = useState([]);
  const [texts, setTexts] = useState([]);

  const handleGenerateQRCode = (dataUrls, inputArray) => {
    setQrCodes(dataUrls);  // Set the generated QR codes
    setTexts(inputArray);  // Set the corresponding texts for QR codes
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        padding: 2,
        boxSizing: 'border-box',
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          marginBottom: 3,
          textAlign: 'center',
          color: 'primary.main',
        }}
      >
        QR Code Generator
      </Typography>

      {/* Layout Boxes */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '90%',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: 3,
        }}
      >
        {/* Left Section (40%) */}
        <Box sx={{ width: '40%' }}>
          <LeftSection onGenerateQRCode={handleGenerateQRCode} />
        </Box>

        {/* Right Section (60%) */}
        <Box sx={{ width: '60%' }}>
          <RightSection qrCodes={qrCodes} texts={texts} />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;

