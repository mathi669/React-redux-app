import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { validate } from "./features/user/userSlice";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(validate())
  },[])
                                                                                                                                                                                                                                
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
