import React from 'react'

const Footer = () => {
  return (
 <div class="w-full bg-white p-4 text-center"><a href="/home">
    
    <hr class="h-px my-8 bg-gray-200 border-6 dark:bg-gray-700"></hr><h1 className="mb-1 text-3xl font-extrabold dark:text-white ">
    <p className=' text-gray-500 font-bold text-sm'>© 2023 Copyright:
              <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">News</span>
              <span className="bg-sky-400 text-white text-2xl font-bold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">API</span>
            </p>
            </h1>
            </a>
  </div>
  )
}

export default Footer