import React ,{ useEffect, createContext, useState } from 'react'
import {getProducts} from '../services/api'




export const ProductsContext = createContext()
 // children = Components sent as Parps (props.children)
const ProductContetProvider = ({children})=> {
     const [products ,setProducts] = useState([])

     useEffect(()=>{
      const fetchApi = async () =>{
        setProducts(await getProducts())
      }
      fetchApi()


     },[])

  return (
    <ProductsContext.Provider value={products}>
       {children}
    </ProductsContext.Provider>
  )
}


export default ProductContetProvider
