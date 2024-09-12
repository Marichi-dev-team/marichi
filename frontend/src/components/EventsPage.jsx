import React from "react";
import { Link } from 'react-router-dom'; 
import eve from '../assets/eve1.jpg';
import evee from '../assets/eve2.jpg';
import "./EventsPage.css";
import upceve from '../assets/upceve-1.png';
import td from '../assets/teamdynamics.jpeg';
import iimb from '../assets/iimb.jpg';
import bhu from '../assets/bhu.jpg';
import ama from '../assets/amazon.jpg';
import capgemini from '../assets/capgemini.jpg';
import cio from '../assets/cio.jpg';



const upcomingEvents = [
  {
    title: "Leadership Development Program 2024-25",
    date: "28,29-September-2024",
    description: "Join our Two Days Intensive Workshop",
    registrationLink: "https://tally.so/r/mRR5WK",
    image: upceve 
  },
  
];

const pastEvents = [
  {
    title: "Amazon: Mind Your Mind Program",
    image: ama,
    description: "A successful workshop on health and fitness at Amazon.",
    detailLink: "/past-events"
  },
  {
    title: "Aug2024: Team Dynamics Workshop",
    image: td,
    description: "We hosted a Team Dynamics workshop for 50 participants, focusing on collaboration, self-awareness, and holistic well-being to enhance teamwork and performance.",
    detailLink: "/past-events"
  },
  
];

const industryConnects = [
  {
    title: "CAPGEMINI INNOVATION HEALTH ROUNTABLE",
    image: capgemini,
    description: "A seminar bringing together industry experts.",
    detailLink: "/industry-connects" 
  },
  {
    title: "SMART CIO SUMMIT 2024",
    image: cio,
    description: "A seminar bringing together industry experts.",
    detailLink: "/industry-connects" 
  },
  
];

const academiaConnects = [
  {
    title: "IIM Bengaluru",
    image: iimb,
    description: "Invited for a guest lecture on the topic 'Healthtech & Medtech is next Fintech'.",
    detailLink: "/academia-meets"
  },
  {
    title: "IIT BHU",
    image: bhu,
    description: "Invited as a speaker at their Annual Conference.",
    detailLink: "/academia-meets"
  },
  
];

const EventsPage = () => {
  return (
    <div className="events-page">
      <h1 className="text-center text-4xl font-bold my-8">Discover & Relive Our Events: Where Innovation Meets Inspiration</h1>

      <div className="events-section">
        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
        <div className="upcoming-events grid grid-cols-1 sm:grid-cols-2 gap-8">
          {upcomingEvents.slice(0, 3).map((event, index) => (
            <div key={index} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                <button className="register-button text-white px-4 py-2 rounded hover: transition-colors duration-300">
                  Register Now
                </button>
              </a>
            </div>
          ))}
          <Link to="/upcoming-events" className="text-blue-500 hover:underline">View More</Link>
        </div>
      </div>

      <div className="events-section mt-12">
        <h2 className="text-2xl font-semibold mb-6">Past Events</h2>
        <div className="past-events grid grid-cols-1 sm:grid-cols-2 gap-8">
          {pastEvents.slice(0, 3).map((event, index) => (
            <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </Link>
          ))}
          <Link to="/past-events" className="text-blue-500 hover:underline">View More</Link>
        </div>
      </div>

      <div className="events-section mt-12">
        <h2 className="text-2xl font-semibold mb-6">Industry Connects</h2>
        <div className="industry-connects grid grid-cols-1 sm:grid-cols-2 gap-8">
          {industryConnects.slice(0, 3).map((event, index) => (
            <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </Link>
          ))}
          <Link to="/industry-connects" className="text-blue-500 hover:underline">View More</Link>
        </div>
      </div>

    <div className="events-section mt-12">
        <h2 className="text-2xl font-semibold mb-6">Academia Connects</h2>
        <div className="academia-connects grid grid-cols-1 sm:grid-cols-2 gap-8">
          {academiaConnects.slice(0, 3).map((event, index) => (
            <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </Link>
          ))}
          <Link to="/academia-connects" className="text-blue-500 hover:underline">View More</Link>
        </div>
</div>

      </div>
  );
};

export default EventsPage;
