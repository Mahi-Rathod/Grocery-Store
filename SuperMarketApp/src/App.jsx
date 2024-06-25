import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './components/home/Home';
import NewProducts from './components/pages/NewProducts';
import ContactUs from './components/pages/ContactUs';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/new-products' element={ <NewProducts />} />
            <Route path='/featured-products' element={ <NewProducts />} />
            <Route path='/contact-us' element={ <ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
