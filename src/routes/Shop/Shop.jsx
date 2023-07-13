import React from 'react'
import data from '../../categories.json'
import Item from '../item/item.component'
import './shop.styles.scss';

const Shop = () => {
    
    for (let i in data){
        console.log(data[i])
        for (let j in data[i].items){
            console.log(data[i].items[j])
        }
    }

  return (

    <>
    <div>
        <div>
       {data.map(item1 =><>
       <p>{item1.title}</p>
       { item1.items.map((item)=>
       <Item key={item.item} title2={item1.title}
       category={{ titles: item}}/>
)
       } 
       </>
       )}
        </div>
    </div>
    </>
  )
}

export default Shop