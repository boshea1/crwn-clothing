import { useStoreActions, useStoreState } from 'easy-peasy'
import React from 'react'
import './checkout.styles.scss'

const Checkout = () => {
    const minusCart = useStoreActions((state) => state.screenModel.minusCart)
    const setCart = useStoreActions((state)=> state.screenModel.setCart)
    const cart = useStoreState((state)=> state.screenModel.cart)
    const total = useStoreState((state)=> state.screenModel.total)
    const unique = [...new Set(cart.map((item)=>item.item))]
    const arr = []
    for (let i in unique){
        let y = unique[i]
        let innerdict = {item:unique[i],ammount: cart.filter(x=> x.item === y).length, 
            price: cart.find(element => element.item === unique[i]).price}
        arr.push(innerdict)
    }

  
    const handleAdd = (item) => {
        delete item.ammount;
        setCart(item)
    }

    return (
    <div className='container'>
        <h1>Trolley</h1>
        <div className='list-container'>
            <ul>
                {arr.map((item)=>(
                        
                    <li>{`${item.item} @ £${item.price} x ${item.ammount} = £${item.ammount * item.price}`} <span><button style={{marginRight: '5px'}} onClick={()=> handleAdd(item)}>+</button><button onClick={()=>minusCart(item)}>-</button></span></li>
                    )
                )}
            </ul>
        </div>
        
        <div className='total-container'>
            {arr[0]? '':<img src='https://cdn-icons-png.flaticon.com/128/2838/2838895.png' alt='basket'></img>}
       <p> {arr[0]  ? `total: £${total}`: 'Your trolley is empty'}</p>
        </div>
        <div className='pay-btn-container'>
            {arr[0]?<button>Click here to pay</button> : ''}
        </div>
    </div>
  )
}

export default Checkout