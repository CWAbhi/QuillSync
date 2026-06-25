import {useState} from 'react';
import '../styles/Signup.css';

export default function Signup(){
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function checkPasswordStrength(password) {
        return(
        password.length===0?<div> {/*If password is empty*/}
        <p class='text-red-500'>Password must contain at least one number</p>
        <p class='text-red-500'>Password must be at least 8 characters long</p>
        </div>

        :password.length<8? 
        /\d/.test(password)? <p class='text-red-500'>Password must be at least 8 characters long</p>:
        <div>
        <p class='text-red-500'>Password must contain at least one number</p>
         <p class='text-red-500'>Password must be at least 8 characters long</p>
        </div>:

        /\d/.test(password)?'':<p class='text-red-500'>Password must contain at least one number</p>
    )}

    return (<div className='flex items-center justify-center gap-10 min-h-screen'>
        <div classNAme='flex items-center justify-center h-full'>
            <img src='/Signup.png' className='w-full h-full object-cover'></img>
        </div>

    <div className='border-3 border-gray-300 p-4 h-full shadow-gray-600 shadow-lg rounded-2xl'>
        <form action='/api/auth/register' className='flex flex-col gap-4' method='POST'>

        <label for='name'>Name:</label>
        <input type='text' id='name' name='name' className='input-class' placeholder='Name' required />

        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' className='input-class' placeholder='Email' required />

        <label for='password'>Password:</label>
        <input type='password' id='password' name='password' className='input-class' placeholder='Password' required onChange={e=>setPassword(e.target.value)}/>

        {/* The below logic is to check wether the password matched the condition or not?*/}
        {checkPasswordStrength(password)}

        <label for='confirm-password'>Confirm Password:</label>
        <input type='password' id='confirm-password' name='confirm-password' className='input-class' placeholder='Confirm Password' required onChange={e=>setConfirmPassword(e.target.value)}/>

        {password!==confirmPassword? <p className='text-red-500'>Passwords do not match</p>:''}

        <button type='submit' disabled={password!==confirmPassword} className={`${password===confirmPassword ? 'bg-indigo-600 opacity-100' : 'bg-gray-400 opacity-60'} text-white rounded-4xl text-2xl px-10 py-3 cursor-pointer`}>
            Create Account</button>

        </form>

    </div>
    </div>)
}