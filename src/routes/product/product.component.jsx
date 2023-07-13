import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../categories.json'
import './product.styles.scss'

const Product = () => {
  const products = useStoreState((state)=> state.screenModel.product)
  const {product,title}=useParams()
  const setProduct = useStoreActions((state)=> state.screenModel.setProduct)
  const x = data.filter((item)=>item.title===title).pop().items.filter((item)=>item.item === product).pop()
  useEffect(()=>{
    setProduct(x)
  })
  const setCart = useStoreActions((state)=> state.screenModel.setCart)
  const minusCart = useStoreActions((state) => state.screenModel.minusCart)
  // const cart = useStoreState((state)=> state.screenModel.cart)


  // const handleMinus = (products) => {
  //     let idx = cart.findIndex(p => p.item === products.item );
  //     if (idx >= 0){
  //         minusCart(idx)
  //     }
  //     else{
  //       console.log('handleminus not found')
  //     }
  // }
  


console.log(products)
  return (
    
    <div>
    {products ? <>
    <div  className='title-container'>
      <p>{products.item}</p> 
      <img src={products.img} alt={products.item}></img>
       <p>{products.price}</p>
    </div>
    <div className='button-container'>
      <button  onClick={()=>setCart(x)}>+</button>
      <button onClick = {()=> minusCart(products)}>-</button>
    </div>
    </>
    :
    <p>No items here</p>
    }
      </div>
    
  )
}

export default Product