import { Card, CardContent, Typography, Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import axios from 'axios';
import React, { useState,useEffect } from 'react';


function Complaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get('http://localhost:4000/complaint_pan');
      setComplaints(response.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  return (
    <div style={{ marginTop: '5%', marginLeft: '25%' }}>
      <h2 style={{ textAlign: 'center' }}>Complaints</h2>
      <Box sx={{ minWidth: 120, marginLeft: '15%' }}>
        {/* Rest of your existing code */}
      </Box>

      {/* Mapping through complaints data and rendering cards */}
      {complaints.map((complaint) => (
        <Card key={complaint.id}>
          <div style={{ marginLeft: '25%' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {complaint.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {complaint.description}
              </Typography>
            </CardContent>
          </div>
          {/* Rest of your existing code */}
        </Card>
      ))}
    </div>
  );
}

export default Complaints;

