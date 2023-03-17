import { useState } from 'react';

const FormWithFc = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');

  return (
    <>
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <p>UserEmail: {userEmail}</p>
      <p>UserPass: {password}</p>
    </>
  );
};

export default FormWithFc;
