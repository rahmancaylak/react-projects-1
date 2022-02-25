import React, { useState } from 'react'
import Job from './Job'
import Button from './Button'

function Experience({ jobTitle }) {
  const [index, setIndex] = useState(0)
  return (
    <div className='jobs-center'>
      <Button setIndex={setIndex} jobTitle={jobTitle} />
      <Job jobTitle={jobTitle[index]} />
    </div>
  )
}

export default Experience