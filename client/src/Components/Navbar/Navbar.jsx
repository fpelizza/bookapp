import { useState } from "react"
import { Link } from "react-router-dom"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import Logoimg from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const handleNavbar = () => setToggleMenu(!toggleMenu)

    return (
    <div className="navbar" id="navbar">
        <div className="container navbar-content flex">
            <div className="brand-and-toggler flex flex-sb">
                <Link to="/" className="navbar-brand flex">
                    <img src={Logoimg} alt = "site logo"/>
                    <span className="text-uppercase fw-7 fs-24 ls-1">bookshub</span>
                </Link>
                <button type="button" className="navbar-toggle-btn" onClick={handleNavbar}>
                    <HiOutlineMenuAlt3 size={35} style={{color: `${toggleMenu ? "#fff" : "#010101"}`}} />
                </button>
            </div>
            <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to = "/book" className="nav-link text-uppercase text-white fw-6 fs-22 ls-1">Home</Link>
                        <Link to = "/about" className="nav-link text-uppercase text-white fw-6 fs-22 ls-1">About</Link>
                        <Link to = "/favourites" className="nav-link text-uppercase text-white fw-6 fs-22 ls-1">Favourites</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar