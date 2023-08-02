import Navbar from '../Navbar/Navbar'
import Searchform from '../SearchForm/Searchform'
import "./Header.css";


const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>
                    find yout book
                </h2><br />
                <p className='header-text fs-18 fw-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit sollicitudin diam ut porta. Aliquam suscipit elit sem, a molestie risus maximus eu. Aenean fermentum auctor sollicitudin. Proin molestie magna vitae dapibus euismod. Vestibulum quis porttitor orci. Ut aliquet maximus mauris ut vestibulum. Phasellus ac risus massa. Nulla mattis in orci non dapibus. Sed cursus enim orci, nec ullamcorper eros semper quis. Phasellus a fringilla nisi, sed elementum mi. Vivamus sed ante tempor, ultrices risus eget, gravida risus. Proin nec facilisis mi. 
                </p>
                <Searchform />
            </div>
        </header>
    </div>
  )
}

export default Header