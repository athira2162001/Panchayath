import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';

// ... (other imports)

function Announcement() {
  const [announce, setAnnounce] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/president/addannouncement")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAnnounce(response.data);
        } else {
          console.error('Invalid response data:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (
    <>
      <Box
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '90px',marginLeft:'35%',width:'100%',borderBlock: '5px' }}
      >
        <AppBar position="static">
          <Toolbar>
            <Stack direction="row" spacing={34}>
              <Avatar>H </Avatar>
              
              <Typography variant="h6" component="div">
                
              </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
              Announcement
            </Typography>
            </Stack>
            
          </Toolbar>
        </AppBar>
        {announce.map((announcement) => (
          <div key={announcement.id} style={{ paddingTop: '30px',width:'600px' }}>
            <Card sx={{ maxWidth: 800 }}>
              <CardMedia sx={{ height: 140 }} image={announcement.image} title="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {announcement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {announcement.announcement}
                </Typography>
              </CardContent>
              
            </Card>
          </div>
        ))}
      </Box>
    </>
  );
}

export default Announcement;
