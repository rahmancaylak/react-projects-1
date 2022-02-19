import React, {useState} from 'react'
import Button from './Button'
import Content from './Content'

function Form() {

  const [filterData, setFilterData] = useState(true);

  return (
    <>
      <Content filterData={filterData}/>
      <Button setFilterData={setFilterData}/>
    </>
  )
}

export default Form