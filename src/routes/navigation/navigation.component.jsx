import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
import { useStoreActions, useStoreState} from "easy-peasy";


const Navigation = () => {
  const darkMode = useStoreState((state)=> state.screenModel.darkMode)
  const setScreenMode = useStoreActions((state)=> state.screenModel.changeMode)
  const cart = useStoreState((state)=> state.screenModel.cart)
  const total = useStoreState((state) => state.screenModel.total)
  const setTotal = useStoreActions((state)=> state.screenModel.setTotal)
  // const cart2 =
   setTotal(cart.reduce((total, num )=>
              total + num.price ,0).toFixed(2))
  
  console.log(cart)
  // console.log(cart2)
  
 

  
  const elementCounts = {};
  cart.forEach(element => {
    elementCounts[element.item] = (elementCounts[element.item] || 0) + 1;
  },[])


  
  
  


  var col = darkMode ? 'beige' : 'white'
    return(
        <div 
          style={{backgroundColor: col}}>
            <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <button style={{marginTop:'12px', padding:'2px'}} 
                onClick={()=>setScreenMode()}>Darkmode</button>
        <div className='nav-links-container'>
          <Link 
          className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
          <Link className='nav-link' to='/checkout'>
            TROLLEY
          </Link>
        </div>
        <p style={{marginRight:'15px',marginTop:'25px'}}>Total: £{total}</p>
      </div>
      <Outlet />
        </div>
    )
}

export default Navigation;