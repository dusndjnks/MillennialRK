import Layout from '../components/Layout'
import contact1 from "../img/contact3.jpg"
import contact5 from "../img/contact5.jpg"
import { FaUser, FaEnvelope, FaPenFancy } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

 useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  const formData = {
    name: form.name.value,
    email: form.email.value,
    description: form.description.value,
  };

  fetch("https://script.google.com/macros/s/AKfycbwFTmXONJr_6NIAAQPlsIhrxRIMIoiPFnQKUCEFRILoil2zkWGx6hGpSjZsXH_85Aw/exec", {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((res) => {
      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        form.reset();
      } else {
        toast.error("❌ Failed to send message.");
      }
    })
    .catch(() => toast.error("❌ Something went wrong."));
};


  return (
    <Layout>

        <div class="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <img src={contact1} alt="Background" class="w-full h-full object-cover "/>
          <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h1 class="text-center text-white text-5xl md:text-6xl xl:text-7xl font-montez">Contact Us</h1>
            <p class="text-lg text-white sm:text-xl lg:text-3xl xl:text-4xl font-montez ">Let's work together — contact us now.</p>
          </div>
        </div>

        <div className='flex justify-center items-center pt-14 bg-[#1c1b1b]'>
         <div class="w-full bg-[#1c1b1b] px-4">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">

             <a href="tel:+918005688733">
               <div class="flex flex-col items-center">
          <svg class="w-8 h-8 text-red-500 mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l2.828 2.828a1 1 0 010 1.414l-1.586 1.586a16.001 16.001 0 006.586 6.586l1.586-1.586a1 1 0 011.414 0l2.828 2.828a1 1 0 01.293.707V19a2 2 0 01-2 2h-1c-8.284 0-15-6.716-15-15V5z" />
          </svg>

                <h3 class="text-lg font-semibold">Phone</h3>
                <p class="text-sm mt-1 hover:underline">+91 8005688733</p>
              </div>
             </a>

              <div class="flex flex-col items-center">
                <svg class="w-8 h-8 text-red-500 mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 8l9 6 9-6M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <h3 class="text-lg font-semibold">Email</h3>
                <a href="mailto:info@example.com" class="text-sm mt-1 hover:underline">
                  info@example.com
                </a>
              </div>

              <div class="flex flex-col items-center">
                <svg class="w-8 h-8 text-red-500 mb-2" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7H3v10a2 2 0 002 2z" />
                </svg>
                <h3 class="text-lg font-semibold">Timing</h3>
                <p class="text-sm mt-1">Monday - Saturday : 9am - 8am</p>
              </div>

            </div>
          </div>
        </div> 

      <div className="bg-[#1c1b1b] py-16 lg:pt-24 lg:py-24 px-5 flex justify-center">
      <div className="w-full max-w-[1100px] md:px-10 lg:px-16">
        <div className="flex flex-wrap md:flex-nowrap bg-white shadow-2xl rounded-xl overflow-hidden" data-aos="fade-up">
          <div className="bg-[#5d0008] text-white px-6 md:px-10 lg:px-14 xl:px-16 w-full md:w-1/2 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full space-y-5 max-w-md py-10 md:py-0">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
                <span className="text-red-700">Let’s Connect</span> 💬
              </h2>
              <div className="flex items-center gap-3 bg-[#2a2929] p-3 rounded border border-gray-600">
                <FaUser className="text-red-600" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="bg-transparent w-full outline-none text-white"
                />
              </div>
              <div className="flex items-center gap-3 bg-[#2a2929] p-3 rounded border border-gray-600">
                <FaEnvelope className="text-red-600" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-transparent w-full outline-none text-white"
                />
              </div>
              <div className="flex items-start gap-3 bg-[#2a2929] p-3 rounded border border-gray-600">
                <FaPenFancy className="text-red-600 mt-1" />
                <textarea
                  name="description"
                  placeholder="Your message..."
                  required
                  rows="4"
                  className="bg-transparent w-full outline-none text-white resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-red-700 text-white py-3 px-4 rounded font-bold transition duration-300">Send Message</button>
            </form>
          </div>

          {/* Image - only visible on medium and up */}
          <div className="hidden md:block w-full md:w-1/2 h-[300px] md:h-[500px] lg:h-[600px] lg:w-[55%]">
            <img
              src={contact5}
              alt="Wedding couple"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>

          <ToastContainer position="top-center" autoClose={3000} />

    </Layout>
  )
}

export default Contact