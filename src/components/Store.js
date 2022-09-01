import React, { useContext } from 'react'
import Product from './shared/Product'
import { ProductsContext } from '../context/ProductContetProvider';
import styles from './store.module.scss';
const Store = () => {
    const products = useContext(ProductsContext);


  return (
   <div className={styles.row}>
      {products.map(item => <Product key={item.id} item={item} />)}
   </div>
  )
}

export default Store;