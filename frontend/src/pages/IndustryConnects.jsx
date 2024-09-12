import React from "react";
import EventItem from "../components/EventItem";
import capgemini from '../assets/capgemini.jpg';
import cio from '../assets/cio.jpg';

const industryConnects = [
  {
    title: "SMART CIO SUMMIT 2024",
    description: "A summit that brought together top CIOs from around the world to discuss innovations and trends in IT and digital transformation.",
    details: "The event featured keynote speeches from industry leaders, panel discussions on future technologies, and networking sessions that fostered collaboration among CIOs. Key topics included AI integration, cybersecurity challenges, and cloud infrastructure strategies.",
    image: cio 
  },
  {
    title: "CAPGEMINI INNOVATION HEALTH ROUNDTABLE",
    description: "An exclusive roundtable where Capgemini's thought leaders and healthcare executives explored digital innovations in the healthcare sector.",
    details: "The roundtable focused on the impact of technology on patient care, operational efficiency, and the future of healthcare data management. The discussion included emerging technologies such as telemedicine, AI in diagnostics, and blockchain in healthcare data security.",
    image: capgemini
  },
  // Add more industry connects events here
];

const styles = {
  container: {
    padding: '20px',
    margin: '0 auto',
    maxWidth: '1200px',
    minHeight: 'calc(100vh - 100px)', // Adjust based on footer height
    boxSizing: 'border-box'
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '20px 0'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px'
  }
};

const IndustryConnects = () => {
  return (
    <div style={styles.container} className="events-page">
      <h1 style={styles.heading} className="text-center text-4xl font-bold my-8">Industry Connects</h1>
      <div style={styles.grid} className="industry-connects grid grid-cols-1 sm:grid-cols-2 gap-8">
        {industryConnects.map((event, index) => (
          <EventItem
            key={index}
            title={event.title}
            description={event.description}
            details={event.details}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default IndustryConnects;
