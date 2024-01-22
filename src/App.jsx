import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Removalbackground from "./components/removalBackground/Removalbackground"

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='h-screen'>
      <Removalbackground/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
