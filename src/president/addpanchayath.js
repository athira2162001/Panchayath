import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Addpanchayath() {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  
  const [status, setStatus] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(true);

    try {
      const result = await axios.post("http://localhost:4000/president/panchayathinfo", {
        image,
        description,
       
      });
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (event) => {
    // Handle file selection and update the state
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
  };

  return (
    <div style={{ width: 500, maxWidth: '100%', marginLeft: '450px' }}>
      <h3 style={{ marginLeft: '130px', marginTop: '70px' }}>Add panchayth  detiles</h3>

      <div style={{ marginTop: '60px' }}>
        <form style={{ display: 'table-caption', width: '450px' }} onSubmit={handleSubmit}>
          <input
            style={{ width: '430px', height: '50px', margin: '10px' }}
            type="file"
            id="myFile"
            name="file name"
            placeholder="Department Profile"
            onChange={handleImageChange}
          />
          <br />
          <label>Description</label>
          <TextField fullWidth label="" id="fullWidth" onChange={(e) => setDescription(e.target.value)} value={description} />
          <br />
          

          <div style={{ marginLeft: '210px', marginTop: '40px' }}>
            <Button type="submit" variant="contained">
              Add
            </Button>
          </div>
        </form>
      </div>
      {status && (
        <div>
          <p>description: {description}</p>
          {/* Display other form data here */}
        </div>
      )}
    </div>
  );
}
