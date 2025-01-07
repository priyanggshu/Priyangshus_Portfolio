import Navbar from './Navbar.jsx';
import home from "../assets/home.png";

const Home = ({dark, setDark}) => {
  return (
    <div className="homepage overflow-x-hidden">
      {/* Navbar component */}
      <Navbar dark={dark} setDark={setDark}/>

      {/* Main body */}
      <div className="body flex flex-col md:flex-row md:items-start md:justify-start lg:items-center lg:justify-center">
        
        {/* Left Section */}
        <div className="left py-12 px-4 lg:px-16 flex flex-col items-start w-full">
          <h1 className="py-2 text-3xl md:text-4xl font-bold">Hello, I'm</h1>
          <h1 className="py-3 text-4xl md:text-5xl font-bold">Priyangshu Shome</h1>
          <p className="py-2 italic text-xl md:text-2xl font-bold">Full Stack Web Developer</p>
          <p className="py-2 md:py-8 text-justify font-semibold font-sans italic text-sm md:text-xl">
            Welcome to my personal portfolio! This is a front-end-focused project
            that I created in just one day. Feel free to explore, and I’d love to hear your thoughts. 
            Happy scrolling, and cheers! <span className='not-italic'>😊</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="right lg:px-16 pb-8 md:py-20 flex flex-col items-center w-full">
          <img 
            src={home} 
            alt="Personal portfolio illustration" 
            className="w-auto max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
