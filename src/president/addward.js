import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function AddWard() {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [wardno, setWardno] = useState('');
  const [wardmember, setWardmember] = useState('');
  const [membername, setMembername] = useState('');
  const [count, setcount] = useState('');
  const [party, setparty] = useState('');
  const [status, setStatus] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(true);

    try {
      const result = await axios.post("http://localhost:4000/president/wardinfo", {
        image,
        description,
        wardno,
        wardmember,
        membername,count,party,
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
      <h3 style={{ marginLeft: '130px', marginTop: '70px' }}>Add ward information</h3>

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
          <label>Ward No</label>
          <TextField fullWidth label="" id="fullWidth" onChange={(e) => setWardno(e.target.value)} value={wardno} />
          <br />
          <label>Ward Member</label>
          <TextField fullWidth label="" id="fullWidth" onChange={(e) => setWardmember(e.target.value)} value={wardmember} />
          <br />
          <br />
          <label>Member Name</label>
          <TextField fullWidth label="" id="fullWidth" onChange={(e) => setMembername(e.target.value)} value={membername} />
          <br />
          <br />
          <label>Voters Count</label>
          <TextField fullWidth label="" id="fullWidth" onChange={(e) => setcount(e.target.value)} value={count} />
          <br />
          <br />
          <label>party</label>
          <TextField fullWidth label="" id="fullWidth" onChange={(e) => setparty(e.target.value)} value={party} />
          <br />
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
