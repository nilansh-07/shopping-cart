import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <div className='navbar'>
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;