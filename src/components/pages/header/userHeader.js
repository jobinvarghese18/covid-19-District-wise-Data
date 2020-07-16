import React ,{useState}from 'react'
import {Typography,Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {lightBlue} from '@material-ui/core/colors'
import { Form } from 'formik';

const lightBluee = lightBlue[400]
const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Header(){
  const classes = useStyles
  return(
    <div className={classes.root}> 
      <Grid xs={12} >
           <Typography style={{
             color:'#004d40',
             height:10,
             fontSize:20,
             textAlign: 'center', 
             flex: 1, 
             fontFamily: 'my-custom-font'
           }} variant="h3" gutterBottom>
            Covid-19 Details
            </Typography>
        </Grid>
    </div>  
  )
}