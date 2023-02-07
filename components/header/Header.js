import React from 'react'
import { changeTheme } from '../../redux/themeSlice'
import { useSelector , useDispatch} from 'react-redux'
import ThemeToggle from '../ThemeToggle'

const Header = () => {
    const dispatch  = useDispatch()
    const theme = useSelector((state)=> state.theme)


  return (
    <div>
        <h1 className=''>Header</h1>
        <p>{theme}</p>
        <button onClick={()=> dispatch(changeTheme())}>change theme</button>
        <ThemeToggle />
    </div>
  )
}

export default Header