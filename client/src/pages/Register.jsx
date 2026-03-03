import {useState} from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

export default function Register() {
 const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

 const registerUser = async (e) => {
  e.preventDefault();
  const { name, email, password } = data;

  try {
    const { data } = await axios.post('http://localhost:8000/register', 
      { name, email, password },
      { withCredentials: true }
    );

    if (data.error) {
      toast.error(data.error);
    } else {
      setData({ name: '', email: '', password: '' });
      toast.success('Registration successful!');
      navigate('/login');
    }

  } catch (error) {
    console.log(error);
    toast.error('Registration failed. Check console for details.');
  }
};

  return (
    <div className='register'>
     <form onSubmit={registerUser}>
      <label >Name</label>
      <input type="text" placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
      <label >Email</label>
      <input type="email" placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
      <label >Password</label>
      <input type="password" placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
      <button type='submit'>Register</button>
     </form>
    </div>
  )
}