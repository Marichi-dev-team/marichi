import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import EventsPage from './components/EventsPage';
import Academia from './components/Academia';
import Footer from './components/Footer';
import Events from './components/Events';
import Blogs from './components/Blogs';
import Offerings from './components/Offerings';
import CarrerCounseling from './components/Offerings/CarrerCounseling';
import EventOrganization from './components/Offerings/EventOrganization';
import ExecutiveCoaching from './components/Offerings/ExecutiveCoaching';
import ExecutiveSearch from './components/Offerings/ExecutiveSearch';
import Leadership from './components/Offerings/Leadership';
import StaffingSolutions from './components/Offerings/StaffingSolutions';
import StrategicConsulting from './components/Offerings/StrategicConsulting';
import Tnp from './components/Offerings/Tnp';
import Headroom from 'react-headroom';
import GoToTop from './components/GoToTop';
import TestimonialsCarousel from './components/TextTestimaonials';  
import RewardsRecognition from './components/RewardsRecognition'; 
import PastEvents from "./pages/PastEvents";
import UpcomingEvents from "./pages/UpcomingEvents";
import IndustryConnects from "./pages/IndustryConnects";
import AcademiaConnects from "./pages/AcademiaConnects";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  return (
    <>
      <Router>
        <Headroom>
          <Navbar />
        </Headroom>
        <Routes>
          <Route path='/' exact Component={Hero} />
          <Route path='/offerings' Component={Offerings} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
          
          <Route path='/blogs' Component={Blogs} />
          <Route path='/offerings/carrercounselling' Component={CarrerCounseling} />
          <Route path='/offerings/eventsorganization' Component={EventOrganization} />
          <Route path='/offerings/executivecoaching' Component={ExecutiveCoaching} />
          <Route path='/offerings/executivesearch' Component={ExecutiveSearch} />
          <Route path='/offerings/leadership' Component={Leadership} />
          <Route path='/offerings/staffingsolutions' Component={StaffingSolutions} />
          <Route path='/offerings/strategicconsulting' Component={StrategicConsulting} />
          <Route path='/offerings/tnp' Component={Tnp} />
          <Route path='/services/academia' Component={Academia} />

          {/* Route for Testimonials */}
          <Route path='/testimaonials' Component={TestimonialsCarousel} />
          <Route path='/events' Component={EventsPage} />
          <Route path="/rewards-recognition" Component={RewardsRecognition} />

          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/industry-connects" element={<IndustryConnects />} />
          <Route path="/academia-connects" element={<AcademiaConnects />} />
        
      
        </Routes>
        {/*Route for events*/}
        <GoToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
