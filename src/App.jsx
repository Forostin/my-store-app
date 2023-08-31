import AppRoutes from "./components/Routes/Routes";
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer"
import SideBar from "./components/SideBar";


import './App.css';

import {getCategories} from "./Redux/slices/categorySlice"

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className='app'>
      <Header />
      <div className="container">
        <SideBar />
        <AppRoutes />
      </div>
     
      <Footer />
      <h1>Hello !</h1>
    </div>
     );
}

export default App;
