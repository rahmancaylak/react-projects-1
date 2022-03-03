import React, { useEffect } from 'react';

function Alert({ type, msg, status, setAlert, form }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ type: '', msg: '', status: false });
    }, 3000);
    return () => {
      clearInterval(timeout);
    };
  }, [form, status]);

  return (
    <>{status !== false && <p className={`alert alert-${type}`}>{msg}</p>}</>
  );
}

export default Alert;
