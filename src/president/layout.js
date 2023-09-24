import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HouseSharpIcon from '@mui/icons-material/HouseSharp';


import { Outlet,Link } from 'react-router-dom';
const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Outlet/>
      <CssBaseline/>
      <AppBar position="fixed" open={open}>
        <Toolbar style={{background:'white',color:'black'}}>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{marginLeft:'90%',color:'black'}}>
          
            <SearchIcon></SearchIcon>
           <NotificationsNoneIcon></NotificationsNoneIcon>
           <HouseSharpIcon></HouseSharpIcon>
          </Typography>
        </Toolbar>
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        
        <Divider />
      
<Avatar  style={{padding:'30px',left:'90px'}} src="/broken-image.jpg" />
<h4 style={{textAlign:'center'}}>Name</h4>



        <Divider />
        <List>
          {['Panchayath info'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <Link to="/layout2_nav" style={{ color:'black',textDecoration:'none'}}>Panchayath Info</Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <List>
          {['Complaints'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                
                  <Link to="/complaints" style={{color:'black',textDecoration:'none'}}>Complaints</Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {[ 'Suggestions'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton> 
      <Link to="/suggestion" style={{ color:'black',textDecoration:'none'}}>Suggestions</Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {['Locate'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
               
                <Link to="/locate" style={{ color:'black',textDecoration:'none'}}>Locate</Link>
     
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {['Surveys'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
               
               
      <Link to="/surveys" style={{color:'black',textDecoration:'none'}}>Surveys</Link>
     
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {[ ' Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>                          
      <Link to="/login" style={{ color:'black',textDecoration:'none'}}>Logout</Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
       
      </Main>
    </Box>
  );
}