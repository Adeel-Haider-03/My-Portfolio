import React from 'react'
import SingleCard from './cards/SingleCard'

function Projects() {
  return (
    <div id='project'>
       <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-green-500 p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <SingleCard
        title={"CodingBuddy — Tinder for Developers"}
        description={"A full-stack MERN platform that matches developers by shared tech stack, with skill-based ranking, real-time Socket.io chat (typing indicators & read receipts), and 5 AI features powered by Google Gemini. Containerized with Docker, Docker Compose, and Nginx."}
        LiveUrl={"https://coding-buddy-rust.vercel.app"}
        GithubUrl={"https://github.com/Adeel-Haider-03/CodingBuddy"}
        src={"./codingBuddy.png"}
        />

      <SingleCard
        title={"Blog Platform"}
        description={"A full-stack blog platform built with React and Appwrite, featuring authentication, Redux Toolkit state management, React Hook Form validation, and a TinyMCE rich-text editor."}
        LiveUrl={"https://blog-website-react-app-write.vercel.app/"}
        GithubUrl={"https://github.com/Adeel-Haider-03/BlogWebsite-React-AppWrite"}
        src={"./Blog.png"}
        />

      <SingleCard
        title={"OneClick — Chrome Extension"}
        description={"An AI-powered Chrome extension that summarizes web articles and explains code line-by-line in a single click, using the Google Gemini API for NLP-based text analysis."}
        LiveUrl={""}
        GithubUrl={"https://github.com/Adeel-Haider-03/OneClick-chrome_Extension"}
        src={"./OneClick.png"}
        />

      <SingleCard
        title={"ATS Resume Checker"}
        description={"An AI-powered resume analysis tool with ~85% PDF parsing accuracy that checks resumes against ATS standards and delivers actionable improvement insights using Google Generative AI."}
        LiveUrl={"https://my-ats-resume-checker.vercel.app/"}
        GithubUrl={"https://github.com/Adeel-Haider-03/ATS-Resume-Checker"}
        src={"./ATS.png"}
        />


    </div>
    </div>
  )
}

export default Projects
