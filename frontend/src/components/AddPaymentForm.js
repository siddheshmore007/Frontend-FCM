import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
//import { makeStyles } from '@mui/styles';
import axios from 'axios';



// const useStyle = makeStyles(theme => ({
//     root:{

//     }
// }))

/*
const initialValues = {
    studentId: 'pybk00',
    fullName: '',
    email: '',
    mobile: '',
    batchEnrolled: '',
    referenceId: '',
    paymentStatus: '',
}
*/


function AddPaymentForm() {
    const [payment, setPayment] = useState([{}]);
    //const classes = useStyle();
    const [studentId, setStudentId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [batch, setBatch] = useState('');
    const [status, setStatus] = useState('');
    const email_sent = JSON.stringify(false);

const addPaymentRecord = () => {

    axios.post(process.env.REACT_APP_API_ENDPOINT,
        {'student_id': studentId,
        'full_name': name,
        'email': email,
        'mobile_no': mobile,
        'batch': batch,
        'reference_id': studentId,
        'email_sent': email_sent,
        'payment_status': status,
}
    ).then(res => {
        alert("Payment Record added successfully");
        console.log(res);
    })
};


  return (  
    <form>
        <Grid container justifyContent='center'>
            <Grid item xs={6}>
            <TextField 
                id="outlined-student" 
                label="Student ID" 
                variant="outlined"
                onChange={Event => setStudentId(Event.target.value)} />

            
            <TextField 
                id="outlined-name" 
                label="Full Name" 
                variant="outlined"
                onChange={Event => setName(Event.target.value)} />

            <TextField 
                id="outlined-email" 
                label="Email" 
                variant="outlined"
                onChange={Event => setEmail(Event.target.value)} />

        
            </Grid>

            <Grid item xs={6}>
                <TextField 
                id="outlined-mobile" 
                label="Mobile Number" 
                variant="outlined"
                onChange={Event => setMobile(Event.target.value)} />

                <TextField 
                id="outlined-batch" 
                label="Batch Enrolled" 
                variant="outlined"
                onChange={Event => setBatch(Event.target.value)} />

                <TextField 
                id="outlined-status" 
                label="Payment Status" 
                variant="outlined"
                onChange={Event => setStatus(Event.target.value)} />
            </Grid>
            <Button variant="contained" color="primary" onClick={addPaymentRecord}
                >
                    Add New Payment
                </Button>
        </Grid>
    </form>
  )
}

export default AddPaymentForm