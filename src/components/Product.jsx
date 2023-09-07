import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {ROUTES} from "../utils/routes"
import { useEffect,useState } from "react";

import styles from "../styles/product.module.css"
import { addItemToCart } from "../Redux/slices/userSlice";

const Product = ( item )=>{
  const { title, price, images, description } = item;

  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState();
  // const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

return (
    <section className={styles.product}>
    <div className={styles.images}>
      <div
        className={styles.current}
        style={{ backgroundImage: `url(${currentImage})` }}
      />
      <div className={styles.imagesList}>
        {images.map((image, i) => (
          <div
            key={i}
            className={styles.image}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => {setCurrentImage(image)}}
          />
        ))}
      </div>
    </div>
    <div className={styles.info}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.price}>{price}$</div>
      <div className={styles.color}>
        <span>Color:</span> Green
      </div>
      

      <p className={styles.description}>{description}</p>

      <div className={styles.actions}>
        <button className={styles.add}  onClick={addToCart}>
        Додати до кошика
        </button>
        <button className={styles.favourite}>Сподобалося</button>
      </div>

      <div className={styles.bottom}>
        <Link to={ROUTES.HOME} >Повернутися на головну сторінку</Link>
      </div>
    </div>
  </section>
     )
 }
 
 
 export default Product
