import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import NewTable from './components/NewTable';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT
})



class App extends Component {
  
  
  constructor() {
    super();
    
    api.get('/').then(res => {
      console.log(res.data)
    })
  }

  //const [payments, setPayments] = useState([]);


  


  render() {
  return (
    <div className="App">
      <h1>Fee payment Status</h1>
      <div className="PaymentTable">
        
        <NewTable/>
      </div>
    </div>
  );
}
}

export default App;
