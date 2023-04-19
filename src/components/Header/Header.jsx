import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Proveders/AuthProviders';

const Header = () => {

const {user,logOutUser} = useContext(AuthContext)

const handleLogout = () =>{
logOutUser()
.then((result)=>{})
.catch(error=>{
console.log(error.message);
})
}

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link> 
                {user && <span className='text-white'>{user.email} <button onClick={handleLogout}>Log out</button> </span> }

            </div>
        </nav>
    );
};

export default Header;