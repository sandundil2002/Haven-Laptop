import './App.css'
import Navbar from './Components/Home/Navbar'
import Carousal from './Components/Home/Carousal'
import About from './Components/About/About'
import Stats from './Components/About/Stats'
import Service from './Components/Service/Service'
import Brands from './Components/Service/Brands'
import Products from './Components/Products/Products'

function App() {
  return (
    <>
      <Navbar />
      <Carousal />
      <About />
      <Stats />
      <Service />
      <Brands />
      <Products />
    </>
  )
}

export default App
