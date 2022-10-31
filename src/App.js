import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Components/Home/HeroSection';
import SectionTwo from './Components/Home/SectionTwo';
import SectionThree from './Components/Home/SectionThree';
import SectionFour from './Components/Home/SectionFour';
import SectionFive from './Components/Home/SectionFive';
import SectionSix from './Components/Home/SectionSix';
import NavBar from './Components/Shared/Nav/NavBar';
import './Style/Main.scss'

function App() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default App;
