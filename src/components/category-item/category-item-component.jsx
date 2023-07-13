import './category-item.styles.scss'
import { useNavigate } from 'react-router-dom'
import { useStoreActions, useStoreState} from "easy-peasy";


const CategoryItem = ({category:{imageUrl,title}}) => {
  const navigate = useNavigate()
  const cat = useStoreState((state)=> state.screenModel.cat)
  const setCat = useStoreActions((state)=> state.screenModel.changeCat)
  return (
      <div className='category-container' onClick={()=>{navigate(`/category/${title}`);
      setCat(title) }}>
      <div className='background-image'
      style={{backgroundImage: `url(${imageUrl})`}}>
        </div>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
        </div>
        </div>
  )
}

export default CategoryItem