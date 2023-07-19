import logo from '../public/airbnb-logo.png'
import './styles/navbar.css'
export default function Navbar(){
    return (
        <nav className='navbar'>
            <img src={logo}  className='logo'/>
        </nav>
    )
}