
import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1rem 0;

  h2 {
    font-weight: bold;
    font-size: 33px;
    text-align: center;
    margin-bottom: 3px;
  }

  iframe {
    width: 100%;
    height: 250px;
    border: 0;
  }

  .container {
    margin-top: 1rem;
    text-align: center;

    .contact-form {
      max-width: 90%;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        input,
        textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          background-color: #65b741;
          border: 1px solid #65b741;
          color: white;
          padding: 1rem;
          font-size: 1rem;

          &:hover {
            background-color: #4f9433;
            color: white;
            transform: scale(0.9);
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .container {
      .contact-form {
        max-width: 50rem;
      }
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper className="section">
      <div className="container">
        <div
  className="text-center text-white pb-7 mb-9"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    
    width: '100vw'
  }}
>
          <h2 className="py-6">WRITE TO US</h2>
          <p className="mb-8 font-semibold text-white">
            You can get in touch with us at- <br />
            <span className="font-bold">Address: </span> Marichi Ventures, T-Hub Phase-2, 20, Inorbit Mall Road, <br />
            Vittal Rao Nagar, Madhapur, Hyderabad <br />
            <span className="font-bold">Pin:</span> 500081 <br />
            <span className="font-bold">Email: </span> info@marichiventures.com
            <br />
            <span className="font-bold">Phone: </span> +91-7200212158
          </p>
        </div>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xgvwzwlz" // Replace with Formspree endpoint
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="name"
              placeholder="Name*"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              autoComplete="off"
            />
            <input
              type="text"
              name="collegename"
              placeholder="College Name (for students)"
              autoComplete="off"
            />
            <input
              type="text"
              name="companyname"
              placeholder="Company Name (for corporates)"
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              autoComplete="off"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.533135383003!2d78.37646572369046!3d17.43417870145839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e37831f177%3A0x32d4499d34baaa78!2sT-Hub%20Phase%202!5e0!3m2!1sen!2sin!4v1706268163009!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Wrapper>
  );
};

export default Contact;


