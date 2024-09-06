import React from 'react'
import { CardContainer,CardBody,CardItem } from './ProjectCardUI'
import { Link } from 'react-router-dom';

function SingleCard({title,description,LiveUrl,src,GithubUrl}) {
  return (
    (<CardContainer className="inter-var mb-6">
      <CardBody
        className="bg-gradient-to-r from-[#121212]  to-slate-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-green-500 dark:text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
          <img
            src={src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            <a href={GithubUrl} target="_blank" className='text-white font-bold'>Github Link</a>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-green-500 text-xs font-bold">
              <a href={LiveUrl} target="_blank">Live Demo</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>)
  );
}

export default SingleCard