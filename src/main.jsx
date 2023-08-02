import ReactDOM from 'react-dom/client'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import { AppProvider } from './context'
import './index.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Booklist from './Components/BookList/Booklist'
import Bookdetails from './Components/BookDetails/Bookdetails'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='book' element={<Booklist />} />
        <Route path='/book/:id' element={<Bookdetails />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
)
