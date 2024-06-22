
import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <div>
      <nav className="block w-full max-w-screen-xl px-6 py-3 mx-auto bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div>
            <h1 className="mb-1 text-3xl font-extrabold dark:text-white ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">News</span>
              <span className="bg-sky-400 text-white text-2xl font-bold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">API</span>
            </h1>
            <p className="text-sm font-normal text-gray-500 lg:text-sm dark:text-gray-400">Top News Headline....</p>
          </div>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-lg font-medium leading-normal text-blue-gray-900" onClick={() => setCategory("business")}>
                <button className="flex items-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-sm text-lg px-4 py-2 text-center transition duration-300 hover:scale-100">
                  Business
                </button>
              </li>
              <li className="block p-1 font-sans text-lg font-medium leading-normal text-blue-gray-900" onClick={() => setCategory("technology")}>
              <button className="flex items-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-sm text-lg px-4 py-2 text-center transition duration-300 hover:scale-100">
                  Technology
                </button>
              </li>
              <li className="block p-1 font-sans text-lg font-medium leading-normal text-blue-gray-900" onClick={() => setCategory("entertainment")}>
                 <button className="flex items-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-sm text-lg px-4 py-2 text-center transition duration-300 hover:scale-100">
                  Entertainment
                </button>
              </li>
              <li className="block p-1 font-sans text-lg font-medium leading-normal text-blue-gray-900" onClick={() => setCategory("health")}>
              <button className="flex items-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-sm text-lg px-4 py-2 text-center transition duration-300 hover:scale-100">
                  Health
                </button>
              </li>
            </ul>
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button">
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                aria-hidden="true" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
