import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'
import Header from './pages/header/userHeader'
import {Paper,Button,Box,Typography,Grid} from '@material-ui/core'
import UserNavBar from './pages/navbar/UserNavBar'
import UserForm from './pages/forms/userForms'
import Table from './pages/table/table'
import Select from  './pages/inputElements/StateSelect'
const schema =  Yup.object().shape({
    username:Yup.string().required()
})
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
 
function JobApp(props){
    const [states ,setStates] = useState([])
    const [data,setData] = useState({})
    const [date,setDate] = useState([])
    const [state,setState] = useState('')
    const [filteredData,setFilteredData] = useState([])
    const [loading, setLoadin] = useState(true)
    let States
    useEffect(()=>{
            axios.get('https://api.covid19india.org/v3/data.json')
        .then((response)=>{
             States= Object.keys(response.data.KL.districts)
             console.log(response.data.KL)
             setDate(response.data.KL.meta.last_updated)
             setStates(States)
             setData(response.data.KL.districts)
             console.log(response.data.KL.districts)
             
             setLoadin(false)
            // setStates(Object.keys(response.data.KL.districts))
            
        })
        .catch((err)=>{
            console.log(err)
        })
          
        
    },loading)
    
    const classes = useStyles();

    function filter(state){
        for(const ele in data){
            if(ele === state){
                setFilteredData(data[ele])
            }
        }
       setState(state)
    }
    return(
       
        <div>
           
            <Formik
               initialValues={{
                   username:'',
                   email:''
               }}
               validationSchema={schema}
                onSubmit ={(values)=>{
                    console.log(values)
                }}
                >
                     
            <Box >  
            <Box mt={-0.95} ml={-1}>
            <UserNavBar/>    
            </Box> 
                    <Box mt={2}>
                    <Paper >
                    <Header/> 
                    <Box mt={5}>
                    <Grid container  spacing={3}>
                    <Grid  style={{ justifyContent:"center",flex:'auto' }}item xs={6} sm={3}>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                    <Box mt={2}>
                    <Typography variant="caption" style={{color:'#e91e63'}}display="block" gutterBottom>
                    Last updated on {date}
                    </Typography>
                    <Table data ={data} date={date} filteredData={filteredData} state={state} />
                    </Box>
                    </Grid>
                    {/* <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid> */}
                    
                    <Grid style={{ justifyContent:"center",flex:'auto'}} item xs={6} sm={3}>
                    {/* <Paper className={classes.paper}>xs=6 sm=3</Paper> */}
                    <Select data={states} filter={filter}/>
        </Grid>
                    </Grid>
                    </Box>
                    </Paper>
                    </Box>
                    <Grid xs={3}></Grid>
                
            </Box> 
            </Formik>
        </div>
    )
}
export default JobApp