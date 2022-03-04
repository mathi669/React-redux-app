import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/user/userSlice';
import '../static/css/navbar.css'

export default function Navbar() {
    const {logged} = useSelector(state=>state.user)
    const dispatch = useDispatch()

    const signOut = () =>{
        fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/logout", {
          method: "POST",
          credentials: "include",
        })
          .then(res => res.json())
          .then(data => {
            dispatch(logout());
            console.log(data);
          });
      }

  return (
    <nav>
        <button className='btnNav'>
            {logged?<li onClick={signOut}>Cerrar sesión</li>:<li><Link to="/login">Iniciar sesión</Link></li>}
        </button>
    </nav>
  )
}
