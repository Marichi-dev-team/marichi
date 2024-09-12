import React from "react";

import EventItem from "../components/EventItem";

import ama from '../assets/amazon.jpg';
import Amista from '../assets/Amista.jpeg';
import wh from '../assets/wh.jpeg';
// No need to import the `td` image since you'll use a video instead

const pastEvents = [
  {
    title: "Health & Fitness Workshop at Amazon",
    image: ama,
    description: "A comprehensive workshop focusing on health and fitness.",
    details: "The workshop included expert talks on health, live fitness demonstrations, and a Q&A session."
  },
  {
    title: "Health & Fitness Workshop at Amista",
    image: Amista,
    description: "An engaging session on health and wellness at Amista.",
    details: "Participants learned about wellness strategies, nutrition tips, and stress management techniques."
  },
  {
    title: "Health & Fitness Workshop at WeHub",
    image: wh,
    description: "A dynamic workshop on fitness and well-being at WeHub.",
    details: "Topics covered included fitness routines, mental health awareness, and healthy eating habits."
  },
  {
    title: "Aug2024: Team Dynamics Workshop",
    video: "https://www.youtube.com/embed/4yy7FMNkMX8?si=oSaChiXrH94VQiPx", 
    details: "We conducted this comprehensive Team Dynamics workshop for around 50 participants, running from 10 AM to 4 PM. The session was designed to enhance collaboration and self-awareness within teams. We delved into Enneagram exercises to help individuals understand their personality types, followed by engaging case studies and group discussions that fostered practical insights into effective teamwork. Additionally, we shared valuable tips on holistic well-being, emphasizing the importance of mental and physical health in creating a thriving, cohesive team environment. The workshop successfully equipped participants with the tools to improve their team dynamics and overall performance.",
    description: "We facilitated a Team Dynamics workshop for 50 participants, focusing on enhancing collaboration and self-awareness."
  },
  // Add more past events if needed
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
    gap: '20px',
    margin: '25px'
  }
};

const PastEvents = () => {
  return (
    <div style={styles.container} className="events-page">
      <h1 style={styles.heading} className="text-center text-4xl font-bold my-8">Past Events</h1>
      <div style={styles.grid} className="past-events grid grid-cols-1 sm:grid-cols-2 gap-8">
        {pastEvents.map((event, index) => (
          <EventItem
            key={index}
            title={event.title}
            image={event.image}  // Image is optional, passed for events that have it
            video={event.video}  // Video is optional, passed for events that have it
            description={event.description}
            details={event.details}
          />
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
