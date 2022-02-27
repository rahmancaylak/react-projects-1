import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Form from './Form';
import Content from './Content';

function BackonForm() {
    const [data, setData] = useState([])
    const [form, setForm] = useState(0)
    const [amount, setAmount] = useState(0)
  
    useEffect(() => {
      if(form > 0) {
        axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${form}&start-with-lorem=0`)
        .then((response => setData(response.data)))
      }
      setData([]);
    }, [form])
  
  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <Form amount={amount} setAmount={setAmount} setForm={setForm}/>
      <Content data={data}/>
    </section>
  )
}

export default BackonForm