import React from 'react'
import data from '../../../data';

function Form({filterData}) {
  
  const filtered = data.filter((data) => filterData === true ? data : null)
  
  return (
    <div className='reminder-form'>
      <h2>{filtered.length} birthdays today</h2>
      {
        filtered.map((data) => 
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