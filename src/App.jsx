import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Call from './components/call/Call';
import Features from './components/features/Features';
import Services from './components/Services/Services';
import Rating from './components/Rating/Rating';
import Testimonial from './components/Testimonial/Testimonial';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';
import VideoSection from './components/VideoSection/VideoSection';
import AyurServices from './components/AyurServices/AyurServices';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Profile from './components/Profile/Profile';
import FootereHeader from './components/FootereHeader/FootereHeader';
import ContactForm from './components/ContactForm/contform';
import ProductPage from './components/ProductPage/ProductPage';
import ContactUs from './components/ContactUs/ContactUs'; // <-- Add this line

function Home() {
  return (
    <>
      <Hero />
      <Call />
      <Profile />
      <About />
      <Features />
      <WhyChooseUs />
      <VideoSection />
      <AyurServices />
      <Product />
      <ContactForm />
      <Rating />
      <Testimonial />
      <FootereHeader />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactUs />} /> {/* Add this line */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;