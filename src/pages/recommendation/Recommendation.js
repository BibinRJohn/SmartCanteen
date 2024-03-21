import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import FoodRecommender from '../../components/foodRecommender/FoodRecommender'

function Recommendation() {
  return (
    <div>
      <div className='mt-20 items-center justify-between'>
        <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl mb-10">
          Recommendation
        </h1>
        <div className='max-w-xl mx-auto'>
          <FoodRecommender/>
          {/* <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please recommend..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Recommendation