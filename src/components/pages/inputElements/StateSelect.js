import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useFormik} from 'formik'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  export default function SimpleSelect(props) {
    const classes = useStyles();
    const [state, updateState] = React.useState('');
    // const {handleChange,handleSubmit,values,errors} = useFormik({
    //     initialValues:{
    //         state:''
    //     },
    //     onSubmit(values){
    //         console.log(values)
    //     }
    // })
  
    const handleChange = (event) => {
      updateState(event.target.value);
      props.filter(event.target.value)
    };
    console.log(state)
  
    return (
        <div>
         <form>
         <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">None</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          name='state'
          value={state?state:''}
          onChange={handleChange}
        >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    props.data.map((state,i)=>{
                        return(
                                <MenuItem key={i}  value={state}>{state}</MenuItem>
                          
                        )
                    })
                }
               
        </Select>
      <FormHelperText>Select your state</FormHelperText>
      </FormControl>
      </form>
        </div>
    )
}