import React from 'react';

function Form({
  form,
  setForm,
  grocery,
  setGrocery,
  updateId,
  setUpdateId,
  groceryInit,
  setAlert,
}) {
  function onSubmit(e) {
    e.preventDefault();
    if (!grocery.trim()) {
      setAlert({ status: true, msg: 'Please Enter Value', type: 'danger' });
      return setGrocery('');
    }
    if (updateId !== 0) {
      // Update
      const tester = JSON.parse(localStorage.getItem('item'));
      const oldValue = tester.filter((test) => test.id !== updateId);
      setForm([...oldValue, { id: updateId, title: grocery }]);
      localStorage.setItem(
        'item',
        JSON.stringify([...oldValue, { id: updateId, title: grocery }])
      );
      setUpdateId(0);
      setGrocery('');
      setAlert({ msg: 'Value Changed', status: true, type: 'success' });
    } else {
      // Add
      const id = Math.random().toString(16).slice(2);
      setForm([...form, { id: id, title: grocery }]);
      localStorage.setItem(
        'item',
        JSON.stringify([...form, { id: id, title: grocery }])
      );
      setGrocery('');
      setAlert({
        msg: 'Item Added To The List',
        type: 'success',
        status: true,
      });
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
