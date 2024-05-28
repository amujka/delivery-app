import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import InfoForm from './pages/infoForm/InfoForm'
import './App.css'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route  exact path='/' element={<Home />} />
        <Route   path='/cart' element={<Cart />} />
        <Route   path='/infoForm' element={<InfoForm />} />
      </Routes>
    </div>
  )
}

export default App