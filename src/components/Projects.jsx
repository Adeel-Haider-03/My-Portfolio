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
        title={"Blog Website"}
        description={"This is a fully functional blog website built using React and Vite, with Appwrite as the backend service."}
        LiveUrl={"https://blog-website-react-app-write.vercel.app/"}
        GithubUrl={"https://github.com/Adeel-Haider-03/BlogWebsite-React-AppWrite"}
        src={"./Blog.png"}
        />

      <SingleCard
        title={"Github User Finder"}
        description={"Thisis a React project that allows you to search for GitHub users and view their profiles, leveraging the GitHub API."}
        LiveUrl={"https://github-user-finder-react.vercel.app/"}
        GithubUrl={"https://github.com/Adeel-Haider-03/GithubUserFinder-React"}
        src={"./Github.png"}
        />
    </div>
    </div>
  )
}

export default Projects
