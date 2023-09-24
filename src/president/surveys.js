import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';




export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
  <div style={{marginTop:'5%',marginLeft:'25%'}}>
    <h2 style={{textAlign:'center'}}> Panchayath Survey</h2>
 
<br></br>
    <Box sx={{ minWidth: 120 , marginLeft:'5%'}}>
      <br></br>
      <label>Sort By:</label>
      <FormControl style={{width:300,background:'lightgray'}} >
      
        <InputLabel id="demo-simple-select-label">  Complaint Solve Rate</InputLabel> 
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>300</MenuItem>
          <MenuItem value={20}>250</MenuItem>
          <MenuItem value={30}>150</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <br></br>
    <br></br>
    <TableContainer component={Paper}>
      <Table sx={{ Width:'75%',marginBottom:'25%' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell>No</TableCell>
            <TableCell align="right">Panchayath Name</TableCell>
            <TableCell align="right">No.Of Users</TableCell>
            <TableCell align="right">No.Of Voters</TableCell>
            <TableCell><Button></Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 1 ,borderColor:'gray',height:'100'} }}
            >
              <TableCell component="th" scope="row">
                {}
              </TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              
             <TableCell ><Button sx={{background:'green',color:'white',borderRadius:'60'}}>Inspect</Button></TableCell>
            </TableRow>
    
        </TableBody>
      </Table>
    </TableContainer>
    
            </div>
  );
}