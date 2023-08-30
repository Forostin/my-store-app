import { Routes, Route } from "react-router-dom";
import Home from '../../Home/Home'



const appRoutes = ()=>{
  return (
   <Routes>
      <Route index element={<Home />} />
   </Routes>
    );
}

export default appRoutes;
