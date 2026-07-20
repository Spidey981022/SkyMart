import Navbar from './components/Home/Navbar.jsx'
import Banner from "./components/Home/Banner.jsx";
import CategoriesCard from "./components/Home/CategoriesCard.jsx";
import Carasoul from "./components/Home/Carasoul.jsx";
import Footer from "./components/Home/Footer.jsx";

function App() {
  return (
      <div>
          <Navbar/>
          <Banner/>
          <CategoriesCard/>
          <Carasoul/>
          <Footer/>
      </div>
  )
}
export default App;