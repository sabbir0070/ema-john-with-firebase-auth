import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Proveders/AuthProviders';
const Login = () => {
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const [show, setShow] = useState(false)

const navigate = useNavigate();
const location = useLocation();
console.log(location)

const from = location.state?.form?.pathname || '/'

const {signInUser} = useContext(AuthContext);

const handleSignIn= (event) =>{
event.preventDefault();
const form = event.target;
const email = form.email.value;
const password = form.password.value 
console.log(email,password);
form.reset();
navigate(from,{replace:true})
signInUser(email, password)
.then(result=>{
const loggedUser = result.user;
console.log(loggedUser);
})
.catch(error=>{
console.log(error.message)
setError(error.message)
})

}

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login coming soon</h2>
            <form onSubmit={handleSignIn} >
               
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Your Email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text": 'password'} name="password" id="password" placeholder='Your password' required />
                < p onClick={()=>setShow(!show)}><small>
{
show? <span>Hide password</span> : <span>Show password</span>
}
</small></p>

</div>
                <input className='btn-submit' type="submit" value='Login' />
                <p><Link to="/signup">New Sign Up? Please Sign Up</Link></p>
                <p><span>{error}</span></p>            
</form>
        </div>
    );
};

export default Login;