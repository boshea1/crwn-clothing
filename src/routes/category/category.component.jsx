import React from 'react'
import data from '../../categories.json'
import Item from '../item/item.component'
import { useParams } from 'react-router-dom'

const Category = () => {
  const {title}= useParams()

  
  
  const x = data.filter((item)=>item.title === title)[0].items.map((item)=><Item key={item.item}
                                                                  category={{ titles: item}}/>)
  
  return (
    <div>
    <div>Category {title}</div>
    <ul>
    {x}
    </ul>
    </div>
  )
}

export default Category