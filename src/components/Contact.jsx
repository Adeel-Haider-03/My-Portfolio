import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <div className="flex justify-center mt-5 ">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-green-500 p-2 px-5 text-xl rounded-md">
            Contact Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

    
<div className="flex justify-center items-center w-screen h-screen">
	
	<div className="container mx-auto px-4 lg:px-20">

		<div className="w-full p-8 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
			<div className="flex text-green-500">
				<h1 className="font-bold uppercase text-5xl">Leave a message</h1>
			</div>
			<div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mt-5">

      <input
            className="w-full  bg-slate-900 text-white mt-2 p-3 rounded-lg border border-transparent bg-slate-900
            bg-clip-padding focus:outline-none focus:ring-2 focus:ring-violet-500" 
            type="text" 
            placeholder="First Name*" 
            />

      <input
            className="w-full  bg-slate-900 text-white mt-2 p-3 rounded-lg border border-transparent bg-slate-900
            bg-clip-padding focus:outline-none focus:ring-2 focus:ring-violet-500" 
            type="text" 
            placeholder="Last Name*" 
            />



				<input className="w-full lg:col-span-2 border border-transparent bg-slate-900 text-white mt-2 p-3 rounded-lg bg-clip-padding focus:outline-none focus:ring-2 focus:ring-violet-500 "
            type="email" placeholder="Email*" />
        </div>

				<div className="my-4">

					<textarea placeholder="Message*" className="w-full h-32 border border-transparent bg-slate-900 text-white mt-2 p-3 rounded-lg g-clip-padding focus:outline-none focus:ring-2 focus:ring-violet-500 "></textarea>
				</div>

				<div className="my-2 w-1/2 lg:w-1/4 bg-gradient-to-r to-green-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">

					<button className=" w-full px-3 py-4 text-l bg-[#0d1224] rounded-full border-none text-center text-white">
            Send Message
          </button>

				</div>
			</div>

		
        </div>
      </div>
    </div>

  )
}

export default Contact
