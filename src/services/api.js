import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

 const getProducts= async () =>{
     const res = await axios(`${BASE_URL}/products`);
     return res.data

}

export  {getProducts}
