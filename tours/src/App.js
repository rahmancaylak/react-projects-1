import React, { useState, useEffect } from 'react'
import Tours from './components/Tours';
import Loading from './components/Loading';
import axios from 'axios';

function App() {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const removeTour = (id) =>{
    const updateTour = tours.filter((tours) => tours.id !== id )
    setTours(updateTour)
  }
  
  useEffect(() => {
      getTours()
  }, [])
  
  const url = 'https://course-api.com/react-tours-project'
  const getTours = async () => {
    axios.get(url).then(function (response) {
      setTours(response.data)
      setIsLoading(false)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <>
      {isLoading ? <Loading/> : <Tours tours={tours} setTours={setTours} removeTour={removeTour}/>}
    </>
  );
}

export default App;
