import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page Components
import Home from './components/Home/Home';
import Loan from './components/Loan/Loan';
import About from './components/About/About';
import Pages from './components/Page/Pages';
import Blog from './components/Blog/Blog';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact'; // Import Contact Component

// Shared Components
import Card from './components/Home/Card';
import WhyChooseUS from './components/Home/WhyChooseUs';
import HowItWorks from './components/Home/HowItWorks';
import Frequently from './components/Home/Frequently';
import Testimonial from './components/Home/Testimonial';
import SkyColors from './components/Home/SkyColors';
import Footer from './components/Home/Footer';
import MapError from './components/Contact/MapError';
import ContactForm from './components/Contact/ContactForm';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <Card />
              <WhyChooseUS />
              <HowItWorks />
              <Frequently />
              <Testimonial />
              <SkyColors />
              <Footer />
            </>
          } 
        />

        {/* Loan Route */}
        <Route 
          path="/loan" 
          element={
            <>
              <Loan />
              <Card />
              <WhyChooseUS />
              <HowItWorks />
              <Frequently />
              <Testimonial />
              <SkyColors />
              <Footer />
            </>
          } 
        />

        {/* About Route */}
        <Route 
          path="/about" 
          element={
            <>
              <About />
              <Card />
              <WhyChooseUS />
              <HowItWorks />
              <Frequently />
              <Testimonial />
              <SkyColors />
              <Footer />
            </>
          } 
        />

        {/* Pages Route */}
        <Route 
          path="/pages" 
          element={
            <>
              <Pages />
              <Card />
              <WhyChooseUS />
              <HowItWorks />
              <Frequently />
              <Testimonial />
              <SkyColors />
              <Footer />
            </>
          } 
        />

        {/* Blog Route */}
        <Route 
          path="/blog" 
          element={
            <>
              <Blog />
              <Card />
              <WhyChooseUS />
              <HowItWorks />
              <Frequently />
              <Testimonial />
              <SkyColors />
              <Footer />
            </>
          } 
        />

        {/* FAQ Route */}
        <Route 
          path="/faq" 
          element={
            <>
              <FAQ />
              <Card />
              <WhyChooseUS />
              <HowItWorks />
              <Frequently />
              <Testimonial />
              <SkyColors />
              <Footer />
            </>
          } 
        />

        {/* Contact Route */}
        <Route 
          path="/contact" 
          element={
            <>
              <Contact />
              <MapError/>
              <ContactForm/>
              <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
