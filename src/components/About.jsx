import about from "../assets/about.png";

const About = () => {
  return (
    <div id="about" className="about-section py-8 px-4 lg:px-32">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-sky-700 mb-24">
        About Me
      </h2>
      <div className="about-content flex flex-col md:flex-row md:gap-20 items-center">
        {/* Left: Image Section */}
        <div className="about-image flex-shrink-0 mb-8 md:mb-0 md:w-1/2 lg:w-1/3">
          <img
            src={about}
            alt="Profile"
            className="w-64 h-64 my-2 md:w-full md:h-auto rounded-full object-cover shadow-xl"
          />
        </div>

        {/* Right: Text Section */}
        <div className="about-text text-center w-full md:w-2/3 font-sans italic">
          <p className="mb-4 font-semibold md:text-xl ">
            Let me give you some brief, I'm a passionate Full Stack Web Developer with a proficiency for creating engaging, scalable, and user-friendly web applications.
          </p>
          <p className="mb-4 font-semibold md:text-xl leading-relaxed">
            I specialize in building dynamic websites and applications using modern technologies including <span className="font-semibold">React.js</span>, <span className="font-semibold">Node.js</span>, and <span className="font-semibold">TailwindCSS</span> with the goal to deliver worthwhile experiences.
          </p>
          <p className="mb-4 font-semibold md:text-xl leading-relaxed">
            Beyond coding, I love exploring new niches and keeping up with the latest trends in world of tech. When I’m not working on projects, you’ll find me exploring the outdoors or experimenting with new recipes in the kitchen!
          </p>
          <p className="italic font-semibold md:text-xl leading-relaxed">
            Thanks for stopping by! Let’s create something amazing together. 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
