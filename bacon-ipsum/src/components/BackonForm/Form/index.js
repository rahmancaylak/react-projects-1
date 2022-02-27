import React from 'react'

function Form({amount, setAmount,setForm}) {
    const onSubmit = (e) =>{
        e.preventDefault()
        setForm(amount)
      }

  return (
    <form className="lorem-form" onSubmit={onSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" className="amount" id="amount" value={amount} onChange={((e) => setAmount(Number(e.target.value)))}/>
        <button type="submit" className="btn">Generate</button>
    </form>
  )
}

export default Form