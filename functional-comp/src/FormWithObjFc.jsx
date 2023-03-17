import { useState } from 'react';

const FormWithObjFc = () => {
  /* const [userEmail, setUserEmail] = useState("");
  const [password, setUserPassword] = useState(""); */

  const [profile, setProfile] = useState({
    userEmail: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    //setProfile({ [name]: value }); -> It will override the entire object

    setProfile((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  console.log('Re-render: ', profile);

  return (
    <>
      <input
        type="text"
        name="userEmail"
        placeholder="Enter email"
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter password"
        onChange={handleInputChange}
      />
      <p>UserEmail: {'userEmail'}</p>
      <p>UserPass: {'password'}</p>
    </>
  );
};

export default FormWithObjFc;
