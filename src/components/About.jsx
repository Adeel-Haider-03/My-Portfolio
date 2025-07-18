

function About() {
  return (
    <div id="about" className="my-12 lg:my-16 relative mx-8">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-2xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 my-4 text-sm lg:text-lg">
            {`I'm a passionate Full Stack Developer and final-year Computer Science student at UET Peshawar.I specialize in building modern, scalable web applications using technologies like React.js, Node.js, MongoDB, and Express.js.I enjoy turning complex problems into simple, user-friendly solutions through clean code and intuitive design.

Beyond code, I thrive in collaborative environments, value continuous learning, and love bringing ideas to life whether it’s improving frontend performance or designing clean RESTful APIs.

I’m currently looking for remote or hybrid internships and junior developer roles, where I can grow under mentorship, contribute to meaningful projects, and level up in a professional team setting.

Let’s build something great together.`}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2 mb-6">
          <img
            src="./profile-pic.jpg"
            alt="Adeel Haider"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer
            w-64 h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default About;