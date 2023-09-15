import { Routes, Route } from "react-router-dom";
import Home from '../../Home/Home'
import { ROUTES } from "../../utils/routes";
import SingleProduct from "../SingleProduct";



const appRoutes = ()=>{
  return (
   <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />}  />
      <Route path={ROUTES.PROFILE} element={<SingleProduct />}  />
   </Routes>
    );
}

export default appRoutes;
