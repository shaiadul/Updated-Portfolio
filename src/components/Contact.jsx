import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
// -----------------------
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ------------------------------


const Contact = () => {


   // email.js-sender with testify
   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();
     emailjs.sendForm('service_4amg05k', 'template_d4vimcc', form.current, 'xSWqd49Q1kRqnKXwD')
       .then((result) => {
           console.log(result.text);
           toast.success("Thanks! Message sent successfully"); //success message
       }, (error) => {
           console.log(error.text);
           toast.error("Something wrong! Try again"); //error set
       });
       
   };
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-double border-purple-500">
            Contact
          </p>
          <p className="py-6 text-purple-500">Submit the form below to get in touch with me</p>
        </div>
        {/* contact me section adding */}
        <section className=" ">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="cyan" className="w-5 h-5 mr-2 sm:mr-6">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Dhaka-1212 - Bangladesh</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="cyan" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+880 0174-067-3877</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="cyan" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>mdsaidulbasar404@gmail.com</span>
                </p>
              </div>
            </div>
            {/* form section added for sent request*/}
            <form
            ref={form} onSubmit={sendEmail}
             className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
              <label className="block">
                <span className="mb-1 font-bold font-serif">Full name</span>
                <input name="name" type="text" placeholder="Md Saidul Basar" className="block w-full shadow-sm bg-gray-800 pl-2" />
              </label>
              <label className="block">
                <span className="mb-1 font-bold font-serif">Email address</span>
                <input name="email" type="email" placeholder="saidul404@gmail.com" className="block w-full  shadow-sm bg-gray-800 pl-2" />
              </label>
              <label className="block">
                <span className="mb-1 font-bold font-serif">What type of project ?</span>
                <input name="project" type="text" placeholder="E-Commerce" className="block w-full  shadow-sm bg-gray-800 pl-2" />
              </label>
              <label className="block">
                <span className="mb-1 font-bold font-serif">Message</span>
                <textarea name="message" rows="3" placeholder="I am interest to hire you ! As soon as possible contuct me." className="block w-full rounded-md bg-gray-800 pl-2"></textarea>
              </label>
              <button type="submit" className="self-center px-6 py-2 text-lg rounded bg-gradient-to-r from-cyan-500 to-purple-500 cursor-pointer font-signature font-bold">Submit Massage</button>
            </form>
          </div>
        </section>
      </div>
      {/* -------------- */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
