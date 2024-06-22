import React, { useState } from 'react';
import newschannel from '../images/newschannel.jpg';

const NewsCard = ({ title, description, src, url }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg transition duration-300 hover:scale-95 flex flex-col justify-between h-full">
      <a href={url}>
        <img className="rounded-t-lg object-cover w-full h-48" src={src ? src : newschannel} alt="" />
      </a>
      <div className="p-5 flex flex-col flex-grow">
        <a href={url}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-3">
            {title ? title : "The Title of news here"}
          </h5>
        </a>
        <p className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${isExpanded ? '' : 'line-clamp-2'}`}>
          {description ? description : "The title of your page will display as the content heading. It is the information about something that just happened."}
        </p>
        <div className="mt-auto flex justify-between items-center">
          <button onClick={toggleDescription} className="text-blue-500 focus:outline-none">
            {isExpanded ? 'View Less' : 'View More'}
          </button>
          <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

