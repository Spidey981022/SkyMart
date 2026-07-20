import Navbar from './components/Home/Navbar.jsx'
import Banner from "./components/Home/Banner.jsx";
import CategoriesCard from "./components/Home/CategoriesCard.jsx";
import Carasoul from "./components/Home/Carasoul.jsx";
import Footer from "./components/Home/Footer.jsx";
import About from "./components/About/About.jsx";
import AboutCards from "./components/About/AboutCards.jsx";
import OurStory from "./components/About/OurStory.jsx";
import Purpose from "./components/About/Purpose.jsx";
import GoToShop from "./components/About/GoToShop.jsx";

function App() {
  return (
      <>
          {/*<div className="home">*/}
          {/*    <Navbar/>*/}
          {/*    <Banner/>*/}
          {/*    <CategoriesCard/>*/}
          {/*    <Carasoul/>*/}
          {/*    <Footer/>*/}
          {/*</div>*/}
          <div className="shop"></div>
          <div className="about">
              <Navbar/>
              <About />
              <AboutCards/>
              <OurStory/>
              <Purpose/>
              <GoToShop/>
              <Footer/>
          </div>
      </>
  )
}
export default App;