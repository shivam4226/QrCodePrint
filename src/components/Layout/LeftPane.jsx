import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import QRCode from 'qrcode';
import './Styles.css'

const LeftSection = ({ onGenerateQRCode }) => {
  const [inputText, setInputText] = useState('');
  const [qrCodes, setQrCodes] = useState([]);

  const handleGenerateQRCode = async () => {
    try {
      // Split input text into lines and commas, remove empty items
      const inputArray = inputText
        .split(/\n|,/) // Split on new lines or commas
        .map((item) => item.trim())
        .filter((item) => item !== '');

      // Generate QR codes for new input items
      const newQrCodes = await Promise.all(
        inputArray.map(async (text) => ({
          text,
          qrCode: await QRCode.toDataURL(text, { margin: 2 }),
        }))
      );

      // Combine existing QR codes with new ones
      const updatedQrCodes = [...qrCodes, ...newQrCodes];

      setQrCodes(updatedQrCodes);
      if (onGenerateQRCode) {
        onGenerateQRCode(
          updatedQrCodes.map((item) => item.qrCode),
          updatedQrCodes.map((item) => item.text)
        );
      }
    } catch (error) {
      console.error('Failed to generate QR Codes:', error);
    }
  };

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <TextField
        label="Enter your Text..."
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        sx={{ marginBottom: 2 }}
        className='inputFields'
        multiline
        rows={6}
      />
      <Button variant="contained" color="primary" onClick={handleGenerateQRCode}>
        Generate QR Codes
      </Button>
    </Box>
  );
};

export default LeftSection;
