import './directory.styles.scss'
import data from '../../categories.json';
import CategoryItem from '../category-item/category-item-component';


const Directory = () => {
  return (
    <div className="categories-container">
      {data.map((category)=>(
        <CategoryItem
        key={category.id}
        category={category}/>
          ))
      }
    </div>
  )
}

export default Directory