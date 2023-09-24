import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import { Card } from '@mui/material';

const styles = {
  container: {
    marginTop: '5%',
    marginLeft: '25%',
  },
  card: {
    padding: '20px',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    fill: "black",
  },
  districtSelect: {
    width: 300,
    background: 'lightgray',
  },
  inspectButton: {
    background: 'green',
    color: 'white',
    marginLeft: '60%',
  },
};

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <form style={styles.form}>
          <TextField
            id="search-bar"
            className="text"
            placeholder="search for panchayath..."
            size="small"
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={styles.searchIcon} />
          </IconButton>
        </form>

        <br />

        <Box sx={{ minWidth: 120 }}>
          <br />
          <label>District:</label>
          <FormControl style={styles.districtSelect}>
            <InputLabel> </InputLabel>
            <Select
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>nilgiri</MenuItem>
              <MenuItem value={20}>Calicut</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
      </Card>

      <h2 style={{ textAlign: 'center' }}> List of panchayath</h2>
      <br />

      <Card style={styles.card}>
        <Button sx={styles.inspectButton}>Inspect</Button>
      </Card>

      <br />

      <Card style={styles.card}>
        <Button sx={styles.inspectButton}>Inspect</Button>
      </Card>
    </div>
  );
}
