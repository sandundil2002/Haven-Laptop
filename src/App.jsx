import './App.css'
import Navbar from './Components/Home/Navbar'
import Carousal from './Components/Home/Carousal'
import About from './Components/About/About'
import Stats from './Components/About/Stats'
import Service from './Components/Service/Service'
import Brands from './Components/Service/Brands'

function App() {
  return (
    <>
      <Navbar />
      <Carousal />
      <About />
      <Stats />
      <Service />
      <Brands />
    </>
  )
}

export default App
