
import React, { useEffect } from 'react'
import {userParams} from 'react-router-dom'

export default function ProductPage() {
  return 
    const { productID } = userParams
    const [product,setProducts] = useState([])
    
    
    useEffect(() => {
axios.get('https://dummyjson.com/products/${categoryName}').then(
  json => setProducts(json.data.products))
    },[categoryName])
    (
    <div>
        ProductPage
    </div>
 
 ) 
}