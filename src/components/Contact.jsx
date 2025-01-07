import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbMailShare } from "react-icons/tb";

const Contact = () => {

  return (
    <div id="contact" className="contact py-4 px-4 md:px-16 lg:px-24">
      <h2 className="text-4xl md:text-5xl text-sky-700 font-bold text-center mb-24">Contact Me</h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <form className="w-full md:w-2/3 bg-white dark:text-black shadow-lg rounded-xl p-6">
          <div className="mb-4 ">
            <label htmlFor="name" className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline focus:outline-orange-300"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline focus:outline-orange-300"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline focus:outline-orange-300"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Send Message
          </button>
        </form>
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <h3 className="text-3xl font-sans italic underline mb-8">Connect with Me</h3>
          <div className="flex space-x-6 pb-4">
            <a
              href="https://www.linkedin.com/in/priyanggshu"
              target="_blank"
              className="text-blue-500 text-3xl hover:text-blue-700 hover:scale-105"
            >
              <CiLinkedin className="scale-125"/>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="text-3xl hover:text-gray-900 hover:scale-105"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:priyangshux@gmail.com"
              className="text-red-400 text-3xl hover:text-red-600 hover:scale-105"
            >
              <TbMailShare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
