import React, { useEffect } from 'react';

function Alert({ statusClass, setStatusClass }) {
  useEffect(() => {
    const statusClassInterval = setInterval(() => {
      setStatusClass(false);
    }, 3000);
    return () => {
      clearInterval(statusClassInterval);
    };
  }, [statusClass]);
  return (
    <>
      {statusClass === 'added' && (
        <p className='alert alert-success'>Item Added To The List</p>
      )}
      {statusClass === 'remove' && (
        <p className='alert alert-danger'>Item Removed</p>
      )}
      {statusClass === 'clear' && (
        <p className='alert alert-danger'>Empty List</p>
      )}
      {statusClass === 'updated' && (
        <p className='alert alert-success'>Value Changed</p>
      )}
    </>
  );
}

export default Alert;
