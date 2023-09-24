import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projectreview() {
  const [project, setProject] = useState([]); // Corrected variable name: setproject -> setProject

  useEffect(() => {
    axios.get('http://localhost:4000/president/addproject')
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.log(error, 'code error');
      });
  }, []);

  console.log(project);

  return (
    <div
      style={{
        borderStyle: 'solid',
        borderWidth: '1px',
        width: '60%',
        height: '65%',
        marginLeft: '300px',
        marginTop: '10%',
        position: 'absolute',
      }}
    >
      <div style={{ paddingTop: '1px', marginLeft: '-299px' }}>
        <Box
          style={{ paddingLeft: '300px' }}
          sx={{ flexGrow: 1 }}
        >
          <AppBar position="static">
            <Toolbar>
              <Stack direction="row" spacing={74}>
                <Avatar>A</Avatar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 2 }}
                >
                  Project
                </Typography>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      {/* TODO: Add image */}
      <div style={{ width: '100px', height: '50px' }} >
        <div></div>
        <h3>description</h3>
      </div>
      <div
        style={{
          padding: '100px',
          display: 'flex',
          paddingLeft: '50px',
          paddingTop: '30px',
        }}
      >
        {/* Corrected 'borderBloock' to 'borderBlock' */}
        <Card style={{ width: '350px', height: '280px', backgroundColor: '#F9F8FC', borderBlock: '5px' }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              <ul style={{ paddingRight: '250px', listStyle: 'none' }}>
                <li>
                  ProjectName: {project.projectname} {/* Assuming 'projectname' is a property of the project object */}
                </li>

                <li>
                  Fund: {project.fund} {/* Assuming 'fund' is a property of the project object */}
                </li>

                <li>
                  StartDate: {project.startdate} {/* Assuming 'startdate' is a property of the project object */}
                </li>

                <li>
                  CurrentStatus: {project.currentstatus} {/* Assuming 'currentstatus' is a property of the project object */}
                </li>

                <li>
                  EndDate: {project.enddate} {/* Assuming 'enddate' is a property of the project object */}
                </li>
                <br />
              </ul>
              <Button style={{ paddingLeft: '30px', background: 'blue', marginLeft: '50%', color: 'white', textAlign: 'center' }}>
                Review
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Projectreview;
