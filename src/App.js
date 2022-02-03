import './App.css';
import React, { useState, useEffect } from 'react';

import Loading from './Loading';
import Tour from './Tour';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])
  const removetour = (id) => {
    const newtour = tours.filter((tour) =>
    tour.id !== id);
    setTours(newtour)
  }
  const fetchaa = async () =>{
    setLoading(true)

 try{
  const resp =  await fetch(url)
  const data =  await resp.json()
  setLoading(false)
  setTours(data)
 }catch (error){
  setLoading(false)
  console.log(error)
 }
   
  }
  useEffect(() => {
    fetchaa()
  },[])
  if(loading){
    return (<main>
      <Loading />
    </main>);
    
  }
  return (
    <main>
      <Tours tours={tours} removetour={removetour}/>
      </main>
  );
}

export default App;
