import React , {useContext} from 'react';
//components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//function
import {shorten, isInCart , quantityCount} from '../../helper/functions.js';

//router
import { Link } from 'react-router-dom';

//context
import { cartContext } from '../../context/CartContextProvider.js';

import styles from '../product.module.scss'


 const Product = ({item}) => {

  const {state , dispatch} = useContext(cartContext);
  return (
    <Card  sx={{ minWidth: 345 , m:2 }} >
      <div className={styles.images}>

    <CardMedia
      component="img"
      height="100%"
      width="100%"
      image={item.image}
      alt="green iguana"
    />
      </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {shorten(item.title)}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {item.price}$
      </Typography>
    </CardContent>
    <CardActions>
      <Link className={styles.btn} to={`/products/${item.id}`} size="small">Share</Link>
     { !isInCart(state , item.id)?
      <button className={styles.btn} size="small" onClick={() => dispatch({type:"ADD_ITEM", payload: item})} >add to cart</button>:
      <button className={styles.btn} size="small" onClick={() => dispatch({type:"INCREASE", payload: item})} >+</button>}
      {quantityCount(state , item.id) ? <span>{quantityCount(state , item.id)}</span> : ""}
      {quantityCount(state , item.id) > 1 && <button className={styles.btn} size="small" onClick={() => dispatch({type:"DECREASE", payload: item})} >-</button>}
      {quantityCount(state , item.id) === 1  && <button className={styles.btn} size="small" onClick={() => dispatch({type:"REMVE_ITEM", payload: item})} >delet</button>}
    </CardActions>
  </Card>
  )
}

export default Product;
