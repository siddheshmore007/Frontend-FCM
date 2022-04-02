import React, { Component }  from "react";
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter,
    IconButton,
  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddPaymentForm from "./AddPaymentForm";
import axios from "axios";





class NewTable extends Component {


    constructor(props) {
        super(props);
        this.state = {
            payments:[],
            isLoading: false,
            isError: false
        }
        this.deleteRecord=this.deleteRecord.bind(this);
    }

    // async function
    async componentDidMount() {
        this.setState({isLoading: true})

        const response = await fetch(process.env.REACT_APP_API_ENDPOINT);
        //const res = JSON.stringify(response.json)
        console.log(response.type)
        if(response.ok){
            const payments = await response.json()
            console.log(payments);
            const obj = payments.data
            console.log(obj)
            this.setState({ payments:obj, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
        }

        deleteRecord() {
          axios.delete(process.env.REACT_APP_API_ENDPOINT,
            {'student_id': "flstk01",}
          )
          .then(res => {
            alert("Payment Record added successfully");
            console.log(res);
        })
        }
    


    render() {
        const { payments, isLoading, isError } = this.state
        

        if (isLoading) {
            return <div>Loading...</div>
          }
      
          if (isError) {
            return <div>Error</div>
          }
      
          return payments.length > 0
            ? (
                <>
                
                <AddPaymentForm/>

                <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Full Name</TableCell>
                      <TableCell>Student ID</TableCell>
                      <TableCell>Email Address</TableCell>
                      <TableCell>Mobile </TableCell>
                      <TableCell>Batch Enrolled</TableCell>
                      <TableCell>Payment Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { this.state.payments.map(payment => payment.map(pay_rec => {
                        return (

                            <TableRow key={pay_rec.id}>
                        <TableCell>
                            <Grid container>
                                <Grid item lg={3}>
                                    <Avatar src='.' />
                                </Grid>
                                <Grid item lg={10}>
                                    <Typography ></Typography>
                                    <Typography color="textSecondary" variant="body2">{pay_rec.full_name}</Typography>
                                    <Typography color="textSecondary" variant="body2"></Typography>
                                </Grid>
                            </Grid>
                          </TableCell>
                        <TableCell>
                            <Typography color="primary" variant="subtitle2">{pay_rec.student_id}</Typography>
                            <Typography color="textSecondary" variant="body2"></Typography>
                          </TableCell>
                          <TableCell>
                            <Typography color="primary" variant="subtitle2">{pay_rec.email}</Typography>
                            <Typography color="textSecondary" variant="body2"></Typography>
                          </TableCell>
                          <TableCell>
                            <Typography color="primary" variant="subtitle2">{pay_rec.mobile_no}</Typography>
                            <Typography color="textSecondary" variant="body2"></Typography>
                          </TableCell>
                          <TableCell>
                            <Typography color="primary" variant="subtitle2">{pay_rec.batch}</Typography>
                            <Typography color="textSecondary" variant="body2"></Typography>
                          </TableCell>
                          <TableCell>
                            <Typography color="textSecondary" variant="subtitle2">{pay_rec.payment_status}</Typography>
                            <Typography color="textSecondary" variant="body2"></Typography>
                          </TableCell>
                          <TableCell>
                            <IconButton aria-label="delete" onClick={this.deleteRecord}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                      </TableRow>
                        )
                    })
                    )
    }
                  </TableBody>
                  <TableFooter>
                  <TablePagination
                      rowsPerPage={10}
                  />
                  </TableFooter>
                </Table>
              </TableContainer>
              </>
            ) : (
              <>
              <AddPaymentForm/>
              <div>
                No users.
            </div>
            </>
            )
            
    }
}

export default NewTable;
