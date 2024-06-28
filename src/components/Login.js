import React, { useRef, useState } from 'react';
import validateData from '../constant/validate';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
  const toggleVisibility = () => {
    setShowPassword(!showPassword);
    };
    
    const country = useRef();
    const brand = useRef();
    const userId = useRef();
    const password = useRef();
    
    const handleClick = () => {
        const errorMessage=validateData(userId.current.value, password.current.value);
        setErrorMessage(errorMessage);
    }

  return (
    <div className='w-3/12 p-10 shadow-2xl mx-auto my-32 bg-white rounded-xl'>
      <div className='text-center mb-5'>
        <img src={'lg.jpg'} alt="logo" className='w-3/4 ml-5' />
        <span className='text-gray-700 text-lg'>Welcome Back!</span><br />
        <span className='text-xs text-gray-400'>Login to your account</span>
      </div>
      <form onSubmit={(e)=>e.preventDefault()}>
        <select ref={country} name="country" className='border border-gray-300 w-full mb-5 p-2 text-gray-400 rounded-lg'>
          <option value="">Country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
          <option value="australia">Australia</option>
        </select>
        <select ref={brand} name="brand" className='border border-gray-300 w-full mb-5 p-2 text-gray-400 rounded-lg'>
          <option value="">Brand</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="sony">Sony</option>
          <option value="lg">LG</option>
        </select>
        <select ref={userId} name="userid" className='border border-gray-300 w-full mb-5 p-2 text-gray-400 rounded-lg'>
            <option value="">User Id</option>
          <option value="kmithalesh356@gmail.com">kmithalesh356@gmail.com</option>
          <option value="user2@example.com">user2@example.com</option>
          <option value="user3@example.com">user3@example.com</option>
          <option value="user4@example.com">user4@example.com</option>
        </select>
        <div className='relative mb-8'>
          <input ref={password}
            type={showPassword ? 'text' : 'password'} 
            name="password" 
            placeholder="Password" 
            className='border border-gray-300 w-full p-2 text-gray-400 rounded-lg'
          />
          <i 
            className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400`}
            onClick={toggleVisibility}
          />
              </div>
              <span className='text-red-400'>{errorMessage}</span>
        <button className='bg-red-500 w-full mb-4 p-2 rounded-lg text-white' onClick={handleClick}>Login</button>
      </form>
    </div>
  );
}

export default Login;
