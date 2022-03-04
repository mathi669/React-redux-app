import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import { login, logout } from "../features/user/userSlice";
import {FcGoogle} from 'react-icons/fc'
import '../static/css/login.css'


export default function Login() {
  //¿Quiero consultar el estado global?
  const user = useSelector((state) => state.user);

  //¿Quiero actualizar el estado global?
  const dispatch = useDispatch();
  

  // const iniciarSesion = (event) => {
  //   const {email,password} = event.target

  //   event.preventDefault();
  //   fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: email.value,
  //       password: password.value,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((user) => {
  //       dispatch(login(user.firstName))
  //       navigate(-1)
  //     })
  //     .catch((error) => console.log(error));
  // };

  const iniciarSesion = (event) => {
    event.preventDefault()
    const {email:{value:email},password:{value:password}} = event.target
    dispatch(login({email,password}))
}

  return (
    <div>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
      {console.log(user)}
      <p>
        Usuario: {user.logged ? "Bienvenido " + user.name : "Inicia sesión"}
      </p>
      <form onSubmit={iniciarSesion}>
        <label htmlFor="username">Username</label>
        <input type="email" name="email" id="email" placeholder="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="password"/>
        <button className="btn">Iniciar sesion</button>
        <button className="btn" onClick={()=>{dispatch(logout())}}>Cerrar sesion</button> 
        <h3>Inicia sesion con</h3>
        <a href="https://backendtzuzulcode.wl.r.appspot.com/auth/google">
          <div className="social">
            <div className="go"><FcGoogle/>Google</div>
          </div>
        </a>
      </form>
      {user.loading&&<p>Loading...</p>}
      {/* <button onClick={()=>{dispatch(login("Matias"))}}>Iniciar sesion</button> */}
    </div>
  );
}
