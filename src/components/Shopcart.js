import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../context/CartContextProvider'
import Cart from './shared/Cart'
import styles from './shpecart.module.scss'

export default function Shopcart() {

    const {state, dispatch} = useContext(cartContext)
  return (
    <div className={styles.row}>


{!state.selectItems.length && state.checkout && <Link className={styles.link} to="/Store">buy more</Link> }   
{!state.selectItems.length && !state.checkout && <Link className={styles.link} to="/Store">Let's go shopping</Link> }   
 
    <div className={styles.cart}>
        {state.selectItems.map(item=> <Cart  key={item.id} data={item}/> )}
    </div>

 
    <div className={styles.total}>
        <h3>
            total items: {state.itemsCounter}
        </h3>
        <h3>
            total Payment: {state.total}$
        </h3>


        <div>
            <button  onClick={()=> dispatch({type:"CLEAR"})}>clear</button>
            {state.selectItems.length ?
            <button onClick={()=> dispatch({type:"CHECKOUT"})}>check out</button>:
            <button disabled onClick={()=> dispatch({type:"CHECKOUT"})}>check out</button>
            }
        </div>

    </div>
    </div>
  )
}
