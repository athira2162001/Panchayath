import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardContent, Typography } from '@mui/material';
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';

function Wardinfo() {
  const [wardinfo, setWardinfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/president/wardinfo')
      .then((response) => {
        setWardinfo(response.data);
      })
      .catch((error) => {
        console.log(error, 'code error');
      });
  }, []);

  console.log(wardinfo)
  return (
    <div style={{ paddingLeft: '300px', paddingTop: '10%', paddingRight: '2%' }}>
      <div style={{ marginTop: '41px' }}>
        <Card style={{ width: '30rem', marginTop: '10%' }}>
          <h1 style={{ padding: '1px 246px 37px 25px', textAlign: 'center' }}> Ward Gallery </h1>
          {wardinfo.map((ward) => (
            <div key={ward.id}>
              <Card.Img variant="top" style={{ width: '30rem', height: '15rem' }} src={ward.image} />
              <Card.Body>
                <Card.Text>{ward.description}</Card.Text>
              </Card.Body>
              <WardDetails ward={ward} />
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

function WardDetails({ ward }) {
  return (
    <div style={{ display: 'flex', marginTop: '-450px', marginLeft: '650px',  borderStyle: 'solid', borderWidth: '1px', borderRadius: '5px', height: '30rem', width: '18rem' }}>
      <Box sx={{ minWidth: 175, marginTop: '10px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom></Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <div style={{ paddingLeft: '85px' }}>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </div>
            <p style={{ fontWeight: 'bold', color: 'black' }}>Member Name: {ward.membername}</p>
            
          </Typography>
          <br />
          <br />
          <Typography variant="body2">
            ward No: {ward.wardno}
            <br />
            <br />
          </Typography>
          <Typography variant="body2">
            Party: {ward.party}
            <br />
            <br />
          </Typography>
          <Typography variant="body2">
            Voters Count: {ward.count}
            <br />
            <br />
          </Typography>
        </CardContent>
      </Box>
    </div>
  );
}

export default Wardinfo;
