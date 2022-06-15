import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import ListUser from './Components/ListUser/ListUser';
import { Routes, Route} from 'react-router-dom';
import Details from './Components/Details/Details';
import NavbarUser from './Components/Navbar/Navbar';


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users',{
      params: {
        _limit: 8
       }
    })
  
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  }, [])
  
  return (
   <div>
    <NavbarUser />

     <Routes>
        <Route path='/' element= { <div> <ListUser data={data} /></div>} />
        <Route path='/details/:id' element= {<Details   data={data}/>} />
      </Routes>
   </div>
  );
}

export default App;
