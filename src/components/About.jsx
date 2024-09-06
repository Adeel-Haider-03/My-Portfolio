

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
            {`I'm a dedicated front-end developer and AI enthusiast, currently pursuing a Bachelor's degree in Computer Science. With a strong foundation in web development, I specialize in creating dynamic, responsive user interfaces using React, Next.js, and Vite. I enjoy bringing ideas to life with modern tools like Framer Motion to enhance user experience through seamless animations and interactions.

Beyond front-end development, I have experience with backend technologies like Node.js, Express.js, and MongoDB, enabling me to work across the full stack. I am particularly passionate about AI and its potential to revolutionize web development and other industries.`}
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