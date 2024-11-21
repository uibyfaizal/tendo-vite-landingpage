import {Routes, Route} from 'react-router-dom'
import HomePages from './pages/HomePages';
import ShopPages from './pages/ShopPages';
import AboutPages from './pages/AboutPages';
import AllProductPages from './pages/AllProductPages';

import NavbarComponents from './components/NavbarComponents';
import ContactPages from './pages/ContactPages';
import FooterComponents from './components/FooterComponents';

function App() {
  return (
   <div>

      <NavbarComponents />
      <Routes>
        <Route path='/' Component={HomePages} />
        <Route path='shop' Component={ShopPages} />
        <Route path='contact' Component={ContactPages} />
        <Route path='about' Component={AboutPages} />
        <Route path='allproduct' Component={AllProductPages} />
      </Routes>
      <FooterComponents />
   </div>
  )
}

export default App
