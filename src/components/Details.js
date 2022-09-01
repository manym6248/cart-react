import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductContetProvider';
import styles from './Details.module.scss';

 const Details = (props) => {
      const id = props.match.params.id ;
     const data = useContext(ProductsContext);
     const product = data[id - 1];
     const {title , price, description , category, image} = product;
     return(

         <div>
           <div className={styles.row}>
            <img src={image} className={styles.img} alt="product" />
            <div>

            <h3>{title}</h3>
            <p>
                {description}
            </p>
            <span>{category}</span>
            <span>{price}$</span>
            </div>
            </div> 

            
        </div>
     )
  
}

export default Details;
