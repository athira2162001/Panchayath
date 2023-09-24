import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

export default function ActionAreaCard() {
  return (
    <div style={{ paddingLeft: '200px' }}>
      <Card sx={{ marginLeft: '30%', marginTop: '10%', width: '100%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            width="100%" // Set the image width to 100%
            image="https://media.geeksforgeeks.org/wp-content/uploads/20230222104738/file.png"
            alt="green iguana"
            paddingright="500"
         />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lorem ipsum
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
          style={{ marginLeft: '80%', color: 'black', borderBlockColor: 'black', width: '10px' }}
          variant="outlined"
          startIcon={<AddIcon/>}
        ></Button>
        <Button style={{ color: 'black', borderBlockColor: 'black' }} variant="outlined" startIcon={<EditIcon />}>
          Edit
        </Button>
      </Card>
    </div>
  );
}
