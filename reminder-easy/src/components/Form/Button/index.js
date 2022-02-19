import React from 'react'

function Button({setFilterData}) {
  return (
    <div className='reminder-footer'>
      <button className='reminder-button' onClick={(() => setFilterData(false))}>Clear All</button>
    </div>
  )
}

export default Button