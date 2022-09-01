import React, { useContext } from 'react'
import { cartContext } from '../../context/CartContextProvider'
import style from './card.module.scss'


const Cart = (props) => {
    const {title, price ,image, quantity} = props.data
    const {dispatch} = useContext(cartContext)
  return (
    <div className={style.cart} >
        <img style={{width :"200px", height:"200px"}} src={image} alt="image1" />
        <div>

        <h3>{title}</h3>
        <p>{price}$</p>
        </div>

        <div style={{display:'flex'}}>
        <button size="small" onClick={() => dispatch({type:"INCREASE", payload: props.data})} >+</button>
            <span>{quantity}</span>
            {quantity > 1 && <button size="small" onClick={() => dispatch({type:"DECREASE", payload: props.data})} >-</button>}
            {quantity === 1  && <button size="small" onClick={() => dispatch({type:"REMVE_ITEM", payload: props.data})} >delet</button>} 
           

        </div>


    </div>
  )
}

export default Cart