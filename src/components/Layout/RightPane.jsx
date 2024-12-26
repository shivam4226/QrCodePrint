import React, { useState } from 'react';
import { Box, Grid2 as Grid, Typography, Button, TextField } from '@mui/material';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import './Styles.css'

const RightSection = ({ qrCodes, texts }) => {
  const [qrCodeSize, setQrCodeSize] = useState(150); // Default size in pixels

  // Function to handle printing all QR Codes
  const handlePrintAll = () => {
    const printWindow = window.open('', '', 'width=800,height=800');
    let qrCodesHtml = '';

    // Loop through each QR code and arrange them in 4 per row
    qrCodes.forEach((qrCodeDataUrl, index) => {
      qrCodesHtml += `
        <div style="display: inline-block; text-align: center; width: ${qrCodeSize}px; height: ${qrCodeSize + 20}px;">
          <img src="${qrCodeDataUrl}" alt="QR Code ${index + 1}" style="width: ${qrCodeSize}px; height: ${qrCodeSize}px;" />
          <p style="margin: 0; padding: 0; font-size: 12px;">${texts[index]}</p>
        </div>
      `;
    });

    // Print content with 4-column grid
    printWindow.document.write(`
      <html>
        <head>
          <title>Print QR Codes</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
            .qr-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(${qrCodeSize}px, 1fr)); gap: 5px; }
          </style>
        </head>
        <body>
          <div class="qr-grid">
            ${qrCodesHtml}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // Function to handle downloading all QR Codes as a ZIP file
  const handleDownloadZip = () => {
    const zip = new JSZip();

    qrCodes.forEach((qrCodeDataUrl, index) => {
      const img = qrCodeDataUrl.split(',')[1];
      const imgName = `QRCode_${index + 1}.png`;
      zip.file(imgName, img, { base64: true });
    });

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'QR_Codes.zip');
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 10px',
      }}
    >
      {/* Global Action Buttons */}
      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', pr: 3 }}>
        <TextField
          label="QR Code Size (px)"
          type="number"
          value={qrCodeSize}
          onChange={(e) => setQrCodeSize(Math.max(50, Math.min(300, parseInt(e.target.value, 10) || 0)))}
          size="small"
          sx={{ width: '150px', marginRight: 2 }}
          className='inputFields'
        />
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePrintAll}
            sx={{ marginRight: 2 }}
          >
            Print
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDownloadZip}
          >
            Download
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'auto', // Enables scrolling if content overflows
        }}
      >
        {/* Grid2 to display multiple QR codes */}
        <Grid container spacing={1} justifyContent="center">
          {qrCodes?.map((qrCodeDataUrl, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ textAlign: 'center', margin: 0, padding: 0 }}>
                <img
                  src={qrCodeDataUrl}
                  alt={`QR Code ${index + 1}`}
                  style={{ width: `${qrCodeSize}px`, height: `${qrCodeSize}px`, margin: 0 }}
                />
                <Typography variant="body2" sx={{ color: 'black', margin: 0, padding: 0, fontSize: '12px' }}>
                  {texts[index]}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RightSection;
