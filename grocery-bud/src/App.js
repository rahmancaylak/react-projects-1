import React, { useState } from 'react';
// COMPONENTS
import Form from './components/Form';
import Content from './components/Content';
import Alert from './components/Alert';

function App() {
  const [form, setForm] = useState([]);
  const [statusClass, setStatusClass] = useState('');
  const [grocery, setGrocery] = useState('');
  const [updateId, setUpdateId] = useState(0);
  const groceryInit = (e) => setGrocery(e.target.value);

  return (
    <section className='section-center'>
      <Alert statusClass={statusClass} setStatusClass={setStatusClass} />
      <Form
        form={form}
        setForm={setForm}
        setStatusClass={setStatusClass}
        grocery={grocery}
        setGrocery={setGrocery}
        groceryInit={groceryInit}
        updateId={updateId}
        setUpdateId={setUpdateId}
      />
      <Content
        form={form}
        setForm={setForm}
        setStatusClass={setStatusClass}
        setGrocery={setGrocery}
        setUpdateId={setUpdateId}
      />
    </section>
  );
}

export default App;
