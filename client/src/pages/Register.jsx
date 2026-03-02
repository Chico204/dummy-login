import React from 'react'
export default function Register() {
  return (
    <div className='register'>
     <form action="">
      <label htmlFor="">Name</label>
      <input type="text" placeholder='enter name...'/>
      <label htmlFor="">Email</label>
      <input type="email" placeholder='enter email...'/>
      <label htmlFor="">Password</label>
      <input type="password" placeholder='enter password...'/>
      <button type='submit'>Register</button>
     </form>
    </div>
  )
}