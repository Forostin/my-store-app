import { useSelector } from "react-redux";
import Poster from "../components/Poster";
import Products from "../components/Products";

const Home = ()=>{
  // const {list} = useSelector((products) => products);

    return (
    <>
     <Poster />
     {/* <Products products={list} amount={5} title="Trending"/> */}
    </>
      );
  }
  
  export default Home;