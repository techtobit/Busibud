import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Components/Home/HeroSection';
import SectionTwo from './Components/Home/SectionTwo';
import NavBar from './Components/Shared/Nav/NavBar';
import './Style/Main.scss'

function App() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <SectionTwo />
    </div>
  );
}

export default App;
