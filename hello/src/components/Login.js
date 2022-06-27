import React, { useState,useEffect,useRef } from 'react';
import Axios from 'axios';
import * as Icon from "react-bootstrap-icons";
import { FormControl, InputLabel, Input } from '@mui/material';
import { Form , Button} from "react-bootstrap";
import Pagination from '@material-ui/lab/Pagination';
import { DataGrid } from '@material-ui/data-grid';
import { Container } from '@mui/material';
//import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'



function Login(props) {

   
    const [Email,setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Success, setSuccess] = useState('');

    const [Editing,setEditing]= useState(false);
    const [EmployeeData, setEmployeeData] = useState([]);

    
    
   
    const emailref = useRef();
    const passwordref = useRef();

   

   
   const LoginTest = () => {
      Axios.post(`http://localhost:3001/api/login/`,({
       email:emailref.current.value, 
       password : passwordref.current.value
      })).then((response)=>{ setEmployeeData(response.data) });
      EmployeeData[0].email == emailref.current.value && EmployeeData[0].password == passwordref.current.value ? setSuccess('Success'): setSuccess('') 
    }
   

   const handleClear = () => {
   // idref.current.value = '';
   // firstnameref.current.value = '';
   // lastnameref.current.value = '';
    emailref.current.value='';
    passwordref.current.value='';
    props.whichScreen();
   }

    return (<div style={{ width:'100%', height:'100%'}}>
              <Form>
              <Form.Group>
            <Form.Label name="Email" >Email</Form.Label>
            <Form.Control
             // className="form-control"
             // style={{ background: "#DBECEA", lineHeight: 1 }}
              type="email"
              ref={emailref}
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </Form.Group>
          <br />


          <Form.Group>
          <Form.Label name="Password" >Password</Form.Label>
            <Form.Control
              //className="form-control"
             // style={{ background: "#DBECEA", lineHeight: 1 }}
              type="password"
              ref={passwordref}
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>

          </Form>
          <br />
          
          <br />
          <Button
            //style={{ lineHeight: 1 }}
            //className="btn btn-primary"
            onClick={() => LoginTest()}
          >
            Login
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
           // style={{ lineHeight: 1 }}
            //className="btn btn-primary"
            onClick={() => handleClear()}
          >
            <Icon.XCircle size={14} />
            &nbsp;SignUp
          </Button>
          <center>
         
            {Success == 'Success'? <h1>Successfull Login</h1> : <h1>Login Failed</h1>}
      
        </center>
       </div>
    );
}

export default Login;