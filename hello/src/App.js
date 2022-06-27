import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Login from './components/Login';
//import Crud from './Crud';

//import InterceptorTest from './InterceptorTest'
//import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import { Provider }  from 'react-redux';

//import  detailSlice  from './store/index';

//const reducers = combineReducers(detailSlice)
//const store = configureStore(reducers)

function App() {
    const [ScreenLogin, setScreenLogin] = useState(true);


   const whichScreen1 = () => {
    setScreenLogin(false);
   }

   const whichScreen2 = () => {
    setScreenLogin(true);
   }

  return (
    <div className="App" style={{ background: "#3396FF" , justifyContent:'center', width:'100%', height:'100%'}}>
     
     { ScreenLogin ? <Login whichScreen={whichScreen1} /> : <Card whichScreen={whichScreen2} /> }

    </div>
  );
}

export default App;
