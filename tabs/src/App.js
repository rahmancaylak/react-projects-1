import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Experience from './components/Experience'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [jobTitle, setJobTitle] = useState([])

  const getJobTitle = async () => {
    const response = await axios.get('https://course-api.com/react-tabs-project')
      .then((response) => response.data)
    setJobTitle(response);
    setIsLoading(false)
  }
  useEffect(() => {
    getJobTitle()
  }, [])

  return (
    isLoading ? <h2>Loading...</h2> :
      <section className="section">
        <div className='title'>
          <h2>Experience</h2>
          <div className='underline'></div>
        </div>
        <Experience jobTitle={jobTitle} />
        <button className='btn'>More Info</button>
      </section>

  )
}

export default App;
