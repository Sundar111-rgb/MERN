import React, { useState,useEffect,useRef } from 'react';
import Axios from 'axios';
import * as Icon from "react-bootstrap-icons";
import { FormControl, InputLabel, Input } from '@mui/material';
import { Form , Button} from "react-bootstrap";
import Pagination from '@material-ui/lab/Pagination';
import { DataGrid } from '@material-ui/data-grid';
import { Container } from '@mui/material';
//import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'



function Card(props) {

    const [Id, setId] = useState(0);
    const [FirstName, setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const [Email,setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [Editing,setEditing]= useState(false);
    const [EmployeeData, setEmployeeData] = useState([]);

    
    
    const idref = useRef();
    const firstnameref = useRef();
    const lastnameref = useRef();
    const emailref = useRef();
    const passwordref = useRef();

    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'first_name', headerName: 'First Name', width: 150 },
      { field: 'last_name', headerName: 'Last Name', width: 150 },
      { field: 'email', headerName: 'Email ID', width: 190 },
      { field: 'password', headerName: 'Password', width: 150 },

    ];

   
    useEffect(() => {
                Axios.get(`http://localhost:3001/api/get/`).then((response)=>{
               setEmployeeData(response.data);
                })},[0]);   


         const Insert = () => {
            Axios.post(`http://localhost:3001/api/insert/`,(
              {id:EmployeeData.length+1, 
                first_name: firstnameref.current.value, 
                last_name: lastnameref.current.value,
                email:emailref.current.value,
                password:passwordref.current.value
              }
              ))
            .then((response)=>{
                setEmployeeData([...EmployeeData,response.data]);
              })
            .catch(error => {
               console.error('There was an error!', error);
          });
          setEditing(false);
         }


         const Search = () => {
           setEmployeeData([]);
           Axios.get(`http://localhost:3001/api/getonerow/`,({
            id:idref.current.value 
           })).then((response)=>{
            setEmployeeData([response.data]);
              });
          console.log('Hello');
         }
        
         const Delete = (k) => {
            Axios.delete(`http://localhost:3001/api/delete/${k}`)
            .then((response)=>{
              console.log(response);
                EmployeeData.splice(response.data.k,1)
                setEmployeeData(EmployeeData);
             });
         }

         const Edit = (i) => {
        //   setEditing(true);
        //   idref.current.value = EmployeeData[i].id
         //  nameref.current.value = EmployeeData[i].name
         //  addressref.current.value = EmployeeData[i].address
           
          }

         const Update = () => {
              // Axios.put(`http://localhost:3001/api/update`,(
              //   {
              //       id:idref.current.value,
              //       name:nameref.current.value,
              //       address:addressref.current.value
              //   })).then((response)=>{
              //   setEmployeeData(response.data);
              //   });
              //   setEditing(false);
         }


         const handleClear = () => {
          idref.current.value = '';
          firstnameref.current.value = '';
          lastnameref.current.value = '';
          emailref.current.value='';
          passwordref.current.value='';
         }


         const SaveUpdate = () => {
           Editing ? Update() : Insert()
         }

    return (<>



        <Form>

          <Form.Group>
            <Form.Label name="Id" >ID</Form.Label>
            <Form.Control
              //className="form-control"
             // style={{ background: "#DBECEA", lineHeight: 1 }}
              type="text"
             // name="Id"
              ref={idref}
              onChange={(e) => setId(e.target.value)}
              placeholder="ID"
            /> &nbsp; &nbsp; &nbsp;
            <Button
           // style={{ lineHeight: 1 }}
            //className="btn btn-primary"
            onClick={() => Search()}
          >
            <Icon.XCircle size={14} />
            &nbsp;Search
          </Button>
          </Form.Group>
          <br />
       
         <Form.Group>
          <Form.Label name="First Name" >First Name</Form.Label>
            <Form.Control
             // className="form-control"
            //  style={{ background: "#DBECEA", lineHeight: 1 }}
              type="text"
              name="First Name"
              ref={firstnameref}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </Form.Group>
          <br />
         
          <Form.Group>
          <Form.Label name="Last Name" >Last Name</Form.Label>
            <Form.Control
              //className="form-control"
             // style={{ background: "#DBECEA", lineHeight: 1 }}
              type="text"
              ref={lastnameref}
              name="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </Form.Group>
          <br />

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
            onClick={() => Insert()}
          >
            <Icon.Save size={14} />
            Save
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
           // style={{ lineHeight: 1 }}
            //className="btn btn-primary"
            onClick={() => handleClear()}
          >
            <Icon.XCircle size={14} />
            &nbsp;Clear
          </Button>
          <center>
          <div  style={{ height: 500, width: '80%' }}>
          <DataGrid rows={EmployeeData} columns={columns} 
        pageSize={5} 
        rowsPerPageOptions={[2, 5, 7]}
        //lineHeight={12}
      />
        </div>      

      
        </center>
       </>
    );
}

export default Card;