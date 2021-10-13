import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spotlight from './components/screens/Spotlight';
import Foot from './components/include/Foot';
import Feature from './components/screens/Feature';
import About from './components/screens/About';
import Testimonial from './components/screens/Testimonial';
import Contact from './components/screens/Contact';

function App() {
  return (
    <>
      <Spotlight />
      <Feature />
      <About />
      <Testimonial />
      <Contact />
      <Foot />
    </>
  );
}

export default App;
