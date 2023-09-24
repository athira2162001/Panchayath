import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

const Institutes = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const infoMap = {
    'Agriculture': 'Agriculture information here.',
    'Animal Husbandry': 'Animal Husbandry information here.',
    'Fisheries': 'Fisheries information here.',
    'Education': 'Education information here.',
    'Health': 'Health information here.',
    'Welfare': 'Welfare information here.',
    'Rural Development': 'Rural Development information here.'
  };

  return (
    <div style={{ marginLeft: '250px', width: '290px', height: '30px', marginTop: '100px' }}>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="">Select a category</option>
        <option value="white">Agriculture</option>
        <option value="white">Animal Husbandry</option>
        <option value="white">Fisheries</option>
        <option value="white">Education</option>
        <option value="white">Health</option>
        <option value="white">Welfare</option>
        <option value="white">Rural Development</option>
      </select>
      {selectedColor && (
        <div
          style={{
            backgroundColor: selectedColor,
            marginTop: '20px',
            marginLeft: '550px',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '5px',
            height: '30rem',
            width: '18rem'
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {infoMap[selectedColor]}
            </Typography>
            <Typography variant="h5" component="div">
              {/* Title */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <p style={{ fontWeight: 'bold', color: 'black' }}>Information</p>
            </Typography>
            <br />
            <br />
            <Typography variant="body2">
              Contact
              <br />
              <br />
            </Typography>
          </CardContent>
        </div>
      )}
    </div>
  );
};

export default Institutes;
