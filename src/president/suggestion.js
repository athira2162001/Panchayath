import { Card } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Suggestion() { // Changed the function name to start with an uppercase letter as it is a convention for React components
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/president/addsuggestion")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setSuggestions(response.data);
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
    <div style={{ marginTop: '5%', marginLeft: '25%',width:'400px' }}>
      <h2 style={{ textAlign: 'center' }}>Suggestions</h2>

      {suggestions.map((suggestion, index) => (
        <Card key={index} style={{ border: '2px solid black' }}>
          <div style={{ marginLeft: '25%' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* Assuming suggestion has a title property */}
                {suggestion.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* Assuming suggestion has some content property */}
                {suggestion.content}
              </Typography>
            </CardContent>
          </div>
          <Button style={{ marginLeft: '80%', background: 'green' }} variant="contained">
            View
          </Button>
          <br />
          <br />
          
        </Card>
      ))}
    </div>
  );
}

export default Suggestion; // Changed the component name to start with an uppercase letter as it is a convention for React components
