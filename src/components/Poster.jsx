
import styles from '../styles/home.module.css';
import imgPoster from "../assets/images/image_1.jpg"

const Poster = ()=>{
    return(
        <section className={styles.home}>
           <div className={styles.home}>Акційна пропозиція -20%</div>
           <div className={styles.product}>
             <div className={styles.text}>
               <div className={styles.subtitle}>the bestseller 2023</div>
               <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
               <button className='button' >купити зараз</button>
             </div>
             <div className={styles.image}>
                <img src='imgPoster' alt=''></img>
             </div>
           </div>
        </section>

    )
}
export default Poster