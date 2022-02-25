import React, { useState } from 'react'

function Button({ setIndex, jobTitle }) {
  const [buttonActive, setButtonActive] = useState('tommy');

  const changeIndex = (index) => {
    index.toLowerCase() === 'bigdrop'
      ? setIndex(1)
      : index.toLowerCase() === 'cuker'
        ? setIndex(2)
        : setIndex(0)
    setButtonActive(index)
  }
  return (
    <div className='btn-container'>
      {
        jobTitle.map((button) =>
          <button key={button.company} className={`job-btn${button.company.toLowerCase() === buttonActive.toLowerCase() ? ' active-btn' : ''}`} onClick={() => { changeIndex(button.company); }}>{button.company}</button>
        )
      }

    </div>
  )
}

export default Button