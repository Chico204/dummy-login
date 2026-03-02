import React from 'react'
export default function Login() {

  const loginUser = (e) => {
    e.preventDefault();
    console.log('logging in user...');
  }
  return (
    <div className='login'>
     <form onSubmit={loginUser}>
       <label htmlFor="">Email</label>
      <input type="email" placeholder='enter email...'/>
      <label htmlFor="">Password</label>
      <input type="password" placeholder='enter password...'/>
      <button type='submit'>
        Login
      </button>
     </form>
    </div>
  )
}