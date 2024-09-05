
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from './Layout/Navbar';
import Header from './Components/Heading';
import WineSection from './Components/WineSection';
import VodkaSection from './Components/VodkaSection';


function App() {


  return (
    <>
     <NavbarMenu/>
     <Header/>
     <WineSection/>
     <VodkaSection/>
    </>
  )
}

export default App
