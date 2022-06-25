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
  return (
    <div className="App" style={{ background: "#3396FF" , justifyContent:'center', width:'100%', height:'100%'}}>
     
      <Card />

    </div>
  );
}

export default App;
