import React from 'react'
import data from './data';
function Form() {
  
    console.log(data);
  
  return (
    <div className='reminder-form'>
      <h2>{data.length} birthdays today</h2>
      {
        data.map((data) => 
        <div className='reminder-items' key={data.id}>
        <img width="75px" height="75px" src={data.imageURL} alt='person' />
        <div className='reminder-info'>
          <h3>{data.fullname}</h3>
          <p>{data.age} years</p>
        </div>
      </div>
        )
      }
    </div>
  )
}

export default Form