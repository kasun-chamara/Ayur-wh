import './App.css';
import Header from './components/header/Header'; // Import the Header component
import Hero from './components/hero/Hero'; // Import the Hero component
import About from './components/about/About'; // Import the About component
import Call from './components/call/Call'; // Import the Call component
import Features from './components/features/Features';
import Services from './components/Services/Services';
import Rating from './components/Rating/Rating';
import Testimonial from './components/Testimonial/Testimonial';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
      <Header /> {/* Add the Header component */}
      <Hero /> {/* Add the Hero component */}
      <About /> {/* Add the About component */}
      <Call /> {/* Add the Call component */}
      <Features />
      <Rating /> 
      <Services />  
      <Product />
      {/* <Testimonial /> 
      <Footer />  */}
    </>
  );
}

export default App;