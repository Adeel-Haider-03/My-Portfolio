import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const name = `${form.firstName} ${form.lastName}`.trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:adeelhaider3360@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact">
      <div className="flex justify-center mt-5 ">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-green-500 p-2 px-5 text-xl rounded-md">
            Contact Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex justify-center items-center w-full py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20">
          <form
            onSubmit={handleSubmit}
            className="w-full p-8 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"
          >
            <div className="flex text-green-500">
              <h1 className="font-bold uppercase text-5xl">Leave a message</h1>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mt-5">
              <input
                className="w-full bg-slate-900 text-white mt-2 p-3 rounded-lg border border-transparent bg-clip-padding focus:outline-none focus:ring-2 focus:ring-violet-500"
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name*"
              />

              <input
                className="w-full bg-slate-900 text-white mt-2 p-3 rounded-lg border border-transparent bg-clip-padding focus:outline-none focus:ring-2 focus:ring-violet-500"
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />

              <input
                className="w-full lg:col-span-2 border border-transparent bg-slate-900 text-white mt-2 p-3 rounded-lg bg-clip-padding focus:outline-none focus:ring-2 focus:ring-violet-500"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
              />
            </div>

            <div className="my-4">
              <textarea
                placeholder="Message*"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full h-32 border border-transparent bg-slate-900 text-white mt-2 p-3 rounded-lg bg-clip-padding focus:outline-none focus:ring-2 focus:ring-violet-500"
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <div className="my-2 w-1/2 lg:w-1/4 bg-gradient-to-r to-green-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button
                type="submit"
                className="w-full px-3 py-4 text-l bg-[#0d1224] rounded-full border-none text-center text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
