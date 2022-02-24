import React, {useState} from 'react'
import data from './data'
import Accordion from './components/Accordion'

function App() {
  const [Questions, setQuestions] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
        <section className='info'>
          {
            Questions.map((Question) => <Accordion key={Question.id} {...Question}></Accordion>)
          }
        </section>
      </div>
    </main>
  );
}

export default App;
