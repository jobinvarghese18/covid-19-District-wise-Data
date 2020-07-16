import React from 'react'
import {useFormik} from 'formik'
import {Button,TextField,Box} from '@material-ui/core'

const mt = {
    marginTop:4,
    justifyContentL:'center'
}
export default function UserForm(Props){
    const {handleChange,handleSubmit,values,errors} = useFormik({
        initialValues:{
            username:'',
            number:'',
            addresss:''
        },
        onSubmit(values){
            console.log(values)
        }
    })
return(
    <div>
        <form  onSubmit={handleSubmit}>
                <TextField id="outlined-basic" variant="outlined" size='small' style={{
                    marginTop:10
                }}
                name='username'label='username'/><br/>
                <TextField id="outlined-basic" style={mt} variant="outlined" size='small'
                name='number' label='number'/><br/>
                <Box ml={14} style={{
                    justifyContent:'center'
                }}>
                <Button Button type='submit' variant="contained" size='small'
                 style={{
                     width:'20%',
                     flex:'auto',
                     height:35,
                     flexShirnk:10,
                     backgroundColor:'#69f0ae',
                     fontSize:12,
                     borderRadius:15,
                     marginTop:12,
                    }}
                color='primary'>Send</Button>
                </Box>
        </form>
    </div>
)
}