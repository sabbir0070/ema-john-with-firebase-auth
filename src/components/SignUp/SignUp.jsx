import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Proveders/AuthProviders';
const SignUp = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')
const {createUser} =useContext(AuthContext);   

const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    console.log(email, password, confirmPassword);
    setError('')
    setSuccess('')
    if (password.length < 6) {
      setError('Please password must be 6 characters')
      return;
    }
    else if (password !== confirmPassword) {
      setError('Your password did not match');
      return;
    }
    else {
      setSuccess('Sign up successfull');
      //  setError('')
    }

createUser(email,password)
.then(result=>{
const loggedUser = result.user;
console.log(loggedUser)
})
.catch(error =>{
console.log(error.message);
setError(error.message);
})

  }

  return (
    <div className='form-container'>
      <h2 className='form-title'>Sign Up Please</h2>
      <form onSubmit={handleSignUp} >
        {/* <div className='form-control'>
          <label htmlFor="name">User Name</label>
          <input type="text" name="name" id="name" placeholder='Your name' required />
        </div> */}
        <div className='form-control'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='Your Email' required />
        </div>
        <div className='form-control'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder='Your password' required />
        </div>
        <div className='form-control'>
          <label htmlFor="confirm"> Confirm Password</label>
          <input type="password" name="confirm" id="confirm" placeholder='Confirm Password' required />
        </div>
        <input className='btn-submit' type="submit" value='Sign Up' />
        <p><Link to="/login">Already have a account? Please login</Link></p>
        <p><span>{error}</span></p>
        <p><span>{success}</span></p>
      </form>
    </div>
  );
};

export default SignUp;