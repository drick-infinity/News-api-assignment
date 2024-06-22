

import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const pageSize = 9;
  const apiKey = '08c13c91584b459f954d27961e65ea9a';

  useEffect(() => {
    const url = searchQuery 
      ? `https://newsapi.org/v2/top-headlines?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}&apiKey=${apiKey}`
      : `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&page=${currentPage}&apiKey=${apiKey}`;
      
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        setTotalPages(Math.ceil(data.totalResults / pageSize));
      });
  }, [currentPage, category, searchQuery]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex justify-center mt-10 shadow-lg mr-12 ml-12 animate-bounce">
        <input
          type="text"
          placeholder="Search for news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border w-full border-gray-300 rounded mr-2"
        />
          

        <button type="submit" className="px-3 py-2 bg-blue-700 hover:bg-blue-800 text-sm font-medium text-white rounded">
        <span
    class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
    id="button-addon2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  </span>
        </button> 
      </form>
      <h1 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white text-center animate-pulse">
        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">News</span>
      </h1>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      
      
      
      <div className="grid grid-cols-3 gap-4 ml-8 mt-8 mb-8 mr-8">
        {articles.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-4 items-center mb-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-3 py-2 mr-2 bg-blue-700 hover:bg-blue-800 text-sm font-medium text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <div className="flex justify-center mt-2">
          <span className="text-blue-600">{currentPage}<span className="text-gray-500"> of </span>{totalPages}</span>
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-2 ml-2 bg-blue-700 hover:bg-blue-800 text-sm font-medium text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsBoard;

