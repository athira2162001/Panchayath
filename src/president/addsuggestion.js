import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Addsuggestion() {
 
  const [title, setTitle] = useState('');
  
 
  const [status, setStatus] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(true);

    try {
      const result = await axios.post("http://localhost:4000/president/addsuggestion", {
        
        title,
       
       
      });
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <div style={{ width: 500, maxWidth: '100%', marginLeft: '450px' }}>
      <h3 style={{ marginLeft: '130px', marginTop: '70px' }}>Add Suggestion</h3>

      <div style={{ marginTop: '60px' }}>
        <form style={{ display: 'table-caption', width: '450px' }} onSubmit={handleSubmit}>
          
          <label>Title</label>
          <TextField fullWidth label="" id="fullWidth" onChange={(e) => setTitle(e.target.value)} value={title} />
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
          <p>title: {title}</p>
          {/* Display other form data here */}
        </div>
      )}
    </div>
  );
}
