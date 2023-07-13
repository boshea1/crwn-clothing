import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Item = ({category:{imageUrl,titles,individual}, title2}) => {
let {title}=useParams()
  const navigate = useNavigate()
  if (title === undefined){
    title = title2
  }

  console.log('titles',titles)
  return (
      <div className='category-container' onClick={()=>{navigate(`/category/${title}/${titles.item}`);
      // setProduct(title)
      }}>
      <div className='background-image'
      style={{backgroundImage: `url(${titles.img})`}}>
        </div>
      <div className='category-body-container'>
        <h2>{titles.item}</h2>
        <p>Shop Now</p>
        </div>
        </div>
  )
}

export default Item