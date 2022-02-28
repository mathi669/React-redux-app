import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login, logout } from "../features/user/userSlice";
import '../static/css/login.css'


export default function Login() {
  //¿Quiero consultar el estado global?
  const user = useSelector((state) => state.user);

  //¿Quiero actualizar el estado global?
  const dispatch = useDispatch();

  

  const iniciarSesion = (event) => {
    const {email,password} = event.target

    event.preventDefault();
    fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user)
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
    <div className="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
      {console.log(user)}
      <p>
        Usuario: {user.logged ? "Bienvenido " + user.name : "Inicia sesión"}
      </p>
      <form onSubmit={iniciarSesion}>
        <label for="username">Username</label>
        <input type="email" name="email" id="email" placeholder="email" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="password"/>
        <button>Iniciar sesion</button>
        <button onClick={()=>{dispatch(logout())}}>Cerrar sesion</button> 
      </form>
      {/* <button onClick={()=>{dispatch(login("Matias"))}}>Iniciar sesion</button> */}
    </div>
  );
}
