import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button,Box,TextField} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#2e7d32'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [search ,setSearch] = useState('')
  function handleSearch(e){
    setSearch(e.target.value)
    console.log(search)
  }
  function handle(){
    console.log('Clicked')
  }
  console.log(search)
  return (
    <div className={classes.root}>
      <AppBar  style={{
          height:70,
          flex: "auto",
          width:'101%',
          flexShrink: 0,
          flexFlows:'wrap',
          justifyContent:"center",
          backgroundColor:'#1de9b6'
      }} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Box mr={15}>
          <TextField  id="outlined-basic" size='small'
          onChange={handleSearch}
          label="Search" variant="outlined" autocomplete="off"style={{
              backgroundColor:'#1de9b6',
              borderColor:'#212121'
          }}
          InputProps={{
            autoComplete: 'off',
            classes: {
              notchedOutline: classes.notchedOutline
            },
            endAdornment: (
              <InputAdornment autocomplete="off">
                <IconButton>
                  <SearchIcon onClick={handle} />
                </IconButton>
              </InputAdornment>
            )
          }} />
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
