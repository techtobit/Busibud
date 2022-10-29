import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Components/Home/HeroSection';
import SectionThree from './Components/Home/SectionThree';
import SectionTwo from './Components/Home/SectionTwo';
import NavBar from './Components/Shared/Nav/NavBar';
import './Style/Main.scss'

function App() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;
