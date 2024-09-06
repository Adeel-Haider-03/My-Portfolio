import React from 'react'
import { BackgroundGradient } from './cards/ExperienceCard'

function Experience() {
  return (
    <div id='experience' className='text-center'>
     <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-green-500 p-2 px-5 text-xl rounded-md">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-8 mx-6'>
        {/* Junior Web Developer Card */}
        <BackgroundGradient className={`w-64 h-64 flex flex-col items-center justify-center p-4`} containerClassName={`flex justify-center mb-3`}>
          <h1 className='text-4xl mb-4 text-white'>Junior Web Developer</h1>
          <span className='text-xs text-green-600'>Jan 2023 - Present</span>
          <p className='text-md text-white mb-2'>
            Developed and maintained front-end features for various websites using HTML, CSS, and JavaScript.
          </p>
          
        </BackgroundGradient>

        {/* Software Engineer Card */}
        <BackgroundGradient className={`w-64 h-64 flex flex-col items-center justify-center p-4`} containerClassName={`flex justify-center mb-3`}>
          <h1 className='text-4xl mb-4 text-white'>Software Engineer</h1>
          <span className='text-xs text-green-600'>Jun 2021 - Dec 2022</span>
          <p className='text-md text-white mb-2'>
            Collaborated in a team to design, build, and deploy full-stack web applications using React and Node.js.
          </p>
          
        </BackgroundGradient>
      </div>
    </div>
  )
}

export default Experience
