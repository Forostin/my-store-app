import styles from '../../styles/categories.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";



const Categories = ({title, id, name,  categories , amount})=>{
   // const list = products.filter((_, i) => amount < 5)
   const { list } = useSelector(({ categories }) => categories);
    return(
       <section className={styles.section}>
          <h2>{title}</h2>    
          <div className={styles.list}>
            {
               // list.map((id, name, image)=>(
               //   <li  key={id}> 
               //    <div className={styles.item}   >
               //      <Link to={`/${id}`}  key={id}>
                       
               //           <div className={styles.image}  style={{backgroundImage: `url(${image})`}}></div> 
               //           <h3 className={styles.title} key={id} >{name}</h3>
               //      </Link>
               //    </div>
               //    </li>
               // ))
               list.map(({ id, name, image }) => (
                  <li key={id}>
                    {/* <NavLink
                      className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ""}`
                      }
                      to={`/categories/${id}`}
                    >
                      {name}
                    </NavLink> */}
                    <Link to={`/${id}`}  key={id}>
                           <div className={styles.image}  style={{backgroundImage: `url(${image})`}}></div> 
                           <h3 className={styles.title} key={id} >{name}</h3>
                    </Link>                   
                  </li>
                ))
            }
          </div>      
       </section>
    )
}
// const Categories = ({ title, products = [], amount }) => {
//    const list = products.filter((_, i) => i < amount);
 
//    return (
//      <section className={styles.section}>
//        <h2>{title}</h2>
 
//        <div className={styles.list}>
//          {list.map(({ id, name, image }) => (
//            <Link to={`/categories/${id}`} key={id} className={styles.item}>
//              <div
//                className={styles.image}
//                style={{ backgroundImage: `url(${image})` }}
//              />
//              <h3 className={styles.title}>{name}</h3>
//            </Link>
//          ))}
//        </div>
//      </section>
//    );
//  };
export default Categories