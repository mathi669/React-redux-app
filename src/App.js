import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { login } from './features/user/userSlice';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/validate",{
      method:"POST",
      credentials:'include'
    })
    .then(res=>res.json())
    .then(data=>{
      dispatch(login(data.user.firstName))
      console.log(data)
    })
  })

  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
