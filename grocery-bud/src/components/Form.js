import React from 'react';

function Form({
  form,
  setForm,
  setStatusClass,
  grocery,
  setGrocery,
  updateId,
  setUpdateId,
  groceryInit,
}) {
  function onSubmit(e) {
    e.preventDefault();
    if (updateId !== 0) {
      const oldValue = form.filter((test) => test.id !== updateId);
      setForm([...oldValue, { id: updateId, title: grocery }]);
      setUpdateId(0);
      setGrocery('');
      setStatusClass('updated');
    } else {
      const id = Math.random().toString(16).slice(2);
      setForm([...form, { id: id, title: grocery }]);
      setGrocery('');
      setStatusClass('added');
    }
  }
  return (
    <>
      <form className='grocery-form' onSubmit={onSubmit}>
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            className='grocery'
            placeholder='e.g. eggs'
            value={grocery}
            onChange={groceryInit}
          />
          <button className='submit-btn'>
            {updateId !== 0 ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
