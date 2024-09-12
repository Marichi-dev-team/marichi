// Import React and necessary dependencies
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { RiArtboardFill, RiBarChart2Fill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { ImBooks } from 'react-icons/im'
import { MdManageSearch } from 'react-icons/md'
import { GiMaterialsScience } from "react-icons/gi"
import { FaPeopleArrows } from "react-icons/fa6"; 
import AOS from "aos";
import "tailwindcss/tailwind.css";
import sarvesh from '../assets/sarveshsingh.png';
import neeki from '../assets/neekisingh.png';



const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      
     {/* Management Team Section */}
<div className="flex flex-col items-center bg-white text-gray-800 py-12">
  <h2 className="text-4xl font-semibold mb-8 text-center">Management Team</h2>

  {/* Team Member 1 */}
  <div className="flex flex-col md:flex-row w-4/5 max-w-4xl bg-white-100 shadow-lg rounded-lg mb-8">
    <div className="w-full md:w-1/3 flex justify-center items-center p-1">
      <img
        src={sarvesh}
        alt="Sarvesh Singh"
        className="rounded-lg w-full object-cover"
      />
    </div>
    <div className="w-full md:w-2/3 p-6">
      <p className="text-justify text-lg">
        Sarvesh has two decades of corporate experience with his last role as Global Head of Strategy & Operations with Novartis. He has received Economic Times Excellence Award for empowering Leadership. Now he has multifaceted roles such as Startup Mentor with t-Hub (world’s largest incubation center), Board Member with PHUSE (World’s largest healthcare data sciences community), Advisory Board Member with Abluva (US based Data Security Company), and Managing Director with Marichi Ventures.
      </p>
    </div>
  </div>

  {/* Team Member 2 */}
  <div className="flex flex-col md:flex-row w-4/5 max-w-4xl bg-white-100 shadow-lg rounded-lg">
    <div className="w-full md:w-1/3 flex justify-center items-center p-1">
      <img
        src={neeki}
        alt="Neeki Singh"
        className="rounded-lg w-full object-cover"
      />
    </div>
    <div className="w-full md:w-2/3 p-6">
      <p className="text-justify text-lg">
        Neeki has a decade of corporate and a decade of entrepreneurship experience with her last corporate role with TATA Consultancy Services and OCS Consulting, Netherlands. She has been awarded TOP100 Women Achievers Award, Entrepreneur of the Year Award by Entrepreneurship Council of India. Now she works with corporate leaders as Life Coach & Fitness Coach.
      </p>
    </div>
  </div>
</div>


      {/* Header Section */}
      <div
        className="flex items-center justify-center min-h-screen bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/5668434/pexels-photo-5668434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div className="text-white text-center p-4 md:p-8 lg:p-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
            WHO WE ARE
          </h1>
          <p className="md:text-base md:w-[600px] mx-auto">
            Marichi Ventures is a new-age Data Sciences facilitator that guides
            and assists companies with training, resource management, growth
            strategies, and consultation.
          </p>
          <br />
          <p className="md:text-base md:w-[600px] mx-auto">
            It is launched with the primary goal of empowering Data Sciences
            companies in streamlining their efforts to create new-age Data
            Sciences solutions.
          </p>
        </div>
      </div>

      {/* Offerings Section */}
      <div
        className="md:flex bg-fixed md:h-[710px] py-6 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/7046164/pexels-photo-7046164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          backgroundPosition: "top right",
        }}
      >
        <div className="md:w-full md:max-w-screen md:px-[4rem]">
          <h1 className="text-4xl md:text-left text-center md:text-5xl mb-5 p-8">
            WHAT WE DO <br /> OUR OFFERINGS
            <div className="red-line mx-auto ml-[-6%] md:ml-[35%] mt-[1px] md:mt-[-1.5%] md:w-[500px]"></div>
          </h1>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 grid-cols-1 text-[18px] font-bold md:px-[10rem] sm:px-[7rem] px-[3rem]">
            <Link to='/offerings/tnp'>
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <TbArrowBadgeRightFilled className="text-[32px] mx-3" />
                <h1>Training and Placement</h1>
              </div>
            </Link>
            
            <Link to='/offerings/staffingsolutions'>
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <TbArrowBadgeRightFilled className="text-[32px] mx-3" />
                <h1> Staffing Solutions</h1>
              </div>
            </Link>
            
            <Link to='/offerings/Leadership'>
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <RiArtboardFill className='text-[32px] mx-3' />
                <h1>Leadership Development</h1>
              </div>
            </Link>
            <Link to='/offerings/executivecoaching'>
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <IoBookSharp className="text-[32px] mx-3" />
                <h1>Executive Coaching</h1>
              </div>
            </Link>
            <Link to='/offerings/carrercounselling'>
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <ImBooks className="text-[32px] mx-3" />
                <h1>Career Counselling</h1>
              </div>
            </Link>
            <Link to='/offerings/strategicconsulting'>
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <FaPeopleArrows className="text-[32px] mx-3" />
                <h1>Strategic Consulting</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Why You Need Us Section */}
      <div
        id="offerings"
        className="flex relative justify-center min-h-screen bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url(https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div className="text-white my-10">
          <h2 className="relative text-2xl ml-20 md:ml-0 mb-4 md:text-4xl lg:text-5xl font-semibold">
            Why You Need Us
          </h2>
          <div
            className="absolute ml-[-10px] md:ml-[-4]"
            style={{ borderLeft: "2px solid red", height: "200px" }}
          ></div>
          <p className="text-lg md:text-base mb-4 ml-3 md:ml-0 md:w-full lg:w-[600px]">
            1. Data science landscape evolves due to technological advancements,
            changing business needs, and emerging trends. <br />
            2. The dynamic nature of the field means new trends and technologies
            can emerge over time. <br />
            3. Professionals in data science should stay updated and adopt a
            flexible approach for technology and skill development. <br />
            4. Marichi Ventures is relevant for Data Sciences companies aiming
            to build effective teams and stay future-ready.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div
        className="flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0 lg:px-0 px-9"
        style={{
          minHeight: '70vh',
          padding: '30px',
        }}
      >
        {/* Vision Card */}
        <div className="w-[350px] h-[400px] rounded overflow-hidden shadow-lg bg-white">
          <img
            src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Vision"
            className="w-full h-[60%] object-cover"
          />
          <div className="px-6 py-4 h-[40%] flex flex-col justify-center">
            <div className="font-bold text-xl mb-2">VISION</div>
            <p className="text-gray-700 text-[11px]">
              To be a global leader of talent & strategy for Data Sciences organizations.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="w-[350px] h-[400px] rounded overflow-hidden shadow-lg bg-white">
          <img
            src="https://images.pexels.com/photos/7666429/pexels-photo-7666429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Mission"
            className="w-full h-[60%] object-cover"
          />
          <div className="px-6 py-4 h-[40%] flex flex-col justify-center">
            <div className="font-bold text-xl mb-2">MISSION</div>
            <p className="text-gray-700 text-[11px]">
              To guide and assist companies in data sciences with effective people and strategic solutions.
            </p>
          </div>
        </div>

        {/* Core Values Card */}
        <div className="w-[350px] h-[400px] rounded overflow-hidden shadow-lg bg-white">
          <img
            src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Core Values"
            className="w-full h-[60%] object-cover"
          />
          <div className="px-6 py-4 h-[40%] flex flex-col justify-center">
            <div className="font-bold text-xl mb-2">CORE VALUES</div>
            <p className="text-gray-700 text-[11px]">
              Integrity, Innovation, Teamwork, Customer Centricity, and Continuous Learning.
            </p>
          </div>
        </div>
      </div>
          {/* FAQ Section */}
<div className="faq-section py-12 px-4 bg-white">
  <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
  <div className="max-w-3xl mx-auto">
    <div className="border-t border-gray-300">
      {[
        {
  id: 'faq1',
  question: 'What services does Marichi Ventures offer?',
  answer: 'Marichi Ventures offers a range of services, including leadership development workshops, executive coaching, career counselling, startup mentoring, and corporate training programs tailored to enhance professional growth and organizational performance.',
},
{
  id: 'faq2',
  question: 'Who can benefit from Marichi Ventures\' services?',
  answer: 'Our services are designed for professionals at all stages of their careers, from emerging leaders and mid-level managers to senior executives. We also work with startup founders and entrepreneurs looking for mentorship and guidance in the early stages of their ventures.',
},
{
  id: 'faq3',
  question: 'What is the "Marichi Magic of 1%" campaign?',
  answer: 'The "Marichi Magic of 1%" campaign encourages individuals to invest at least 1% of their annual income in self-development, highlighting the importance of continuous learning and personal growth for long-term success.',
},
{
  id: 'faq4',
  question: 'How can I enroll in a Marichi Ventures workshop or program?',
  answer: 'You can easily enroll in any of our workshops or programs by visiting our website, browsing our offerings, and filling out the registration form. For corporate inquiries or customized training, please contact us directly.',
},
{
  id: 'faq5',
  question: 'What is the structure of your coaching programs?',
  answer: 'Our coaching programs are typically structured as a series of sessions over a specific period, focusing on areas like leadership, career progression, and personal development. Each program is customized to meet the unique needs of the individual or organization.',
},
{
  id: 'faq6',
  question: 'What makes Marichi Ventures\' workshops unique?',
  answer: 'Our workshops combine practical case studies, interactive exercises, and personalized coaching to ensure participants gain real-world insights and skills. We also integrate holistic well-being into our programs to support the overall development of participants.',
},
{
  id: 'faq7',
  question: 'How can startups benefit from Marichi Ventures\' mentoring services?',
  answer: 'Startups can benefit from our mentoring services by receiving guidance on the ideation to MVP stages, strategic planning, and leadership development. We help founders overcome challenges and accelerate growth with expert advice and resources.',
},
{
  id: 'faq8',
  question: 'What is the "Marichi School of Unlearning"?',
  answer: 'The "Marichi School of Unlearning" is focused on helping individuals and organizations challenge existing beliefs and practices, encouraging innovation and adaptability in today\'s fast-changing world.',
},
{
  id: 'faq9',
  question: 'Can Marichi Ventures tailor programs for corporate clients?',
  answer: 'Yes, we specialize in creating customized training and development programs for corporate clients, addressing specific business needs and goals. We work closely with organizations to ensure our solutions are impactful and relevant.',
},
{
  id: 'faq10',
  question: 'How do I stay updated on Marichi Ventures\' latest offerings and events?',
  answer: 'You can stay updated by following us on LinkedIn, subscribing to our newsletter, or joining our WhatsApp group, where we regularly post information about upcoming workshops, webinars, and other events.',
},

      ].map(({ id, question, answer }) => (
        <div className="py-4 border-b border-gray-300" key={id}>
          <button
            className="w-full text-left flex justify-between items-center focus:outline-none"
            onClick={() => {
              const currentFaq = document.getElementById(id);
              const isCurrentlyOpen = !currentFaq.classList.contains('hidden');
              document.querySelectorAll('.faq-answer').forEach((element) => {
                element.classList.add('hidden');
              });
              document.querySelectorAll('.faq-icon').forEach((icon) => {
                icon.classList.remove('rotate-180');
              });
              if (!isCurrentlyOpen) {
                currentFaq.classList.remove('hidden');
                document.getElementById(`icon-${id}`).classList.add('rotate-180');
              }
            }}
          >
            <span className="font-medium text-lg">{question}</span>
            <svg
              id={`icon-${id}`}
              className="w-6 h-6 transition-transform duration-300 faq-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div id={id} className="hidden mt-2 text-gray-700 faq-answer">
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      <br /><br /><br />

     


      
    </>
  );
};

export default About;


