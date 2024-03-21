import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { Link } from 'react-router-dom';
import Prediction from '../../components/prediction/Prediction';
import { useDispatch, useSelector } from 'react-redux';
import { markAsDone } from '../../redux/cartSlice';
import { toast } from 'react-toastify';

function Admin() {
  const [activeTab, setActiveTab] = useState('products');
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(myContext)
  const { fooditem, edithandle, deleteFooditem, order, user } = context;

  const timestamp = new Date(); // Assuming this is where you create the Timestamp object
  const serializablePayload = {
    time: timestamp.toString() // Convert Timestamp to string
  };

  const dispatch = useDispatch();
  const cartFooditems = useSelector((state) => state.cart);

  const [filteredOrders, setFilteredOrders] = useState(order);

  const markDone = (completedOrder) => {
    dispatch({ type: 'cart/markAsDone', payload: serializablePayload });
    console.log(completedOrder);
    toast.success("Order Done");

    const updatedOrders = filteredOrders.filter(order => order !== completedOrder);
    setFilteredOrders(updatedOrders);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartFooditems));
  }, [cartFooditems]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  return (
    <Layout>
      <div>
        <div className="mt-20 mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Admin Dashboard</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">If you really want to make friends, go to the college canteen and eat with them… The people who give you their food give you their heart.</p>
        </div>
        <div className="container mx-auto">
          <div className="md:flex md:space-x-8 bg-gray-200 dark:bg-gray-800 grid grid-cols-3 text-center gap-4 md:justify-center mb-10">
            <button
              className={`inline-block rounded-md border border-transparent ${activeTab === 'products' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'} px-8 py-3 font-medium hover:bg-indigo-700`}
              onClick={() => handleTabChange('products')}
            >
              <div className="flex gap-2 items-center">
                <MdOutlineProductionQuantityLimits /> Products
              </div>
            </button>
            <button
              className={`inline-block rounded-md border border-transparent ${activeTab === 'orders' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'} px-8 py-3 font-medium hover:bg-indigo-700`}
              onClick={() => handleTabChange('orders')}
            >
              <div className="flex gap-2 items-center">
                <AiFillShopping /> Orders
              </div>
            </button>
            <button
              className={`inline-block rounded-md border border-transparent ${activeTab === 'users' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'} px-8 py-3 font-medium hover:bg-indigo-700`}
              onClick={() => handleTabChange('users')}
            >
              <div className="flex gap-2 items-center">
                <FaUser /> Demand Prediction
              </div>
            </button>
          </div>

          {/* Render content based on activeTab */}
          {activeTab === 'products' && (
            <div>
              {/* Product content goes here */}
              <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                  {/* <!-- Start coding here --> */}
                  <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                      <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                          <label for="simple-search" class="sr-only">Search</label>
                          <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                          </div>
                        </form>
                      </div>
                      <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <Link to={'/addfooditem'}>
                          <button type="button" class="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Food Items
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div class="overflow-x-auto">
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-4 py-3">Sr. No.</th>
                            <th scope="col" class="px-4 py-3">Food Name</th>
                            <th scope="col" class="px-4 py-3">Image</th>
                            <th scope="col" class="px-4 py-3">Price</th>
                            <th scope="col" class="px-4 py-3">Category</th>
                            <th scope="col" class="px-4 py-3">Cooking Time</th>
                            <th scope="col" class="px-4 py-3">Date</th>
                            <th scope="col" class="px-4 py-3">
                              <span class="sr-only">Actions</span>
                            </th>
                          </tr>
                        </thead>
                        {fooditem?.map((item, index) => {
                          console.log(fooditem)
                          const { name, price, imageUrl, category, cookingtime, date } = item;
                          return (
                            <tbody>
                              <tr class="border-b dark:border-gray-700">
                                <td class="px-4 py-3">{index + 1}</td>
                                <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{name}</th>
                                <td class="px-4 py-3">
                                  <img src={imageUrl} className='w-5 md:w-32 max-w-full h-10 md:h-32' alt='img' /></td>
                                <td class="px-4 py-3">₹{price}</td>
                                <td class="px-4 py-3">{category}</td>
                                <td class="px-4 py-3">{cookingtime}</td>
                                <td class="px-4 py-3">{date}</td>
                                <td className="px-4 py-3 flex items-center justify-end">
                                  <Link to={'/updatefooditem'}>
                                    <div onClick={() => edithandle(item)}
                                      className='mr-5'>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                      </svg>
                                    </div>
                                  </Link>
                                  <div onClick={() => deleteFooditem(item)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          )
                        })}
                      </table>
                    </div>
                    <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing
                        <span class="font-semibold text-gray-900 dark:text-white"> 1-10 </span>
                        of
                        <span class="font-semibold text-gray-900 dark:text-white"> 1000</span>
                      </span>
                      <ul class="inline-flex items-stretch -space-x-px">
                        <li>
                          <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                          <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                        </li>
                        <li>
                          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                        </li>
                        <li>
                          <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Next</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              {/* Order content goes here */}
              <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                  <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                      <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                          <label for="simple-search" class="sr-only">Search</label>
                          <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="overflow-x-auto">
                      {filteredOrders?.map((allorder, index) => {
                        return (
                          <table key={index} class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                <th scope="col" class="px-4 py-3">Sr. No.</th>
                                <th scope="col" class="px-4 py-3">Food Name</th>
                                <th scope="col" class="px-4 py-3">Image</th>
                                <th scope="col" class="px-4 py-3">Email</th>
                                <th scope="col" class="px-4 py-3">User ID</th>
                                <th scope="col" class="px-4 py-3">Price</th>
                                <th scope="col" class="px-4 py-3">Cooking Time</th>
                                <th scope="col" class="px-4 py-3">Date/Time</th>
                                <th scope="col" class="px-4 py-3">
                                  <span class="sr-only">Actions</span>
                                </th>
                              </tr>
                            </thead>

                            {allorder?.cartFooditems.map((item, index) => {
                              const { name, imageUrl, price, cookingtime } = item;
                              return (
                                <tbody key={allorder.id}>
                                  <tr class="border-b dark:border-gray-700">
                                    <td class="px-4 py-3">{index + 1}</td>
                                    <td class="px-4 py-3">{name}</td>
                                    <td class="px-4 py-3">
                                      <img src={imageUrl} className='w-5 md:w-32 max-w-full h-10 md:h-32' alt='img' /></td>
                                    <td class="px-4 py-3">{allorder.email}</td>
                                    <td class="px-4 py-3">{allorder.userid}</td>
                                    <td class="px-4 py-3">₹{price}</td>
                                    <td class="px-4 py-3">{cookingtime}</td>
                                    <td class="px-4 py-3">{allorder.time ? new Date(allorder.time.seconds * 1000).toLocaleString() : ''}</td>
                                    <td class="px-4 py-3">
                                      <div onClick={() => markDone(allorder)}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>                                 
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              )
                            })}
                          </table>
                        )
                      })}
                    </div>
                    <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing
                        <span class="font-semibold text-gray-900 dark:text-white"> 1-10 </span>
                        of
                        <span class="font-semibold text-gray-900 dark:text-white"> 1000</span>
                      </span>
                      <ul class="inline-flex items-stretch -space-x-px">
                        <li>
                          <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                          <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                        </li>
                        <li>
                          <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                        </li>
                        <li>
                          <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Next</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              {/* Users content goes here */}
              <Prediction />
            </div>
          )}
        </div>
      </div>
      
 </Layout>
  );
}

export default Admin;



// import React, { useContext, useEffect, useState } from 'react';
// import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
// import { AiFillShopping } from 'react-icons/ai';
// import { FaUser } from 'react-icons/fa';
// import Layout from '../../components/layout/Layout';
// import myContext from '../../context/data/myContext';
// import { Link } from 'react-router-dom';
// import Prediction from '../../components/prediction/Prediction';
// import { useDispatch, useSelector } from 'react-redux';
// import { markAsDone } from '../../redux/cartSlice';
// import { toast } from 'react-toastify';

// function Admin() {
//   const [activeTab, setActiveTab] = useState('products');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const context = useContext(myContext)
//   const { fooditem, edithandle, deleteFooditem, order, user } = context

//   const timestamp = new Date(); // Assuming this is where you create the Timestamp object
//   const serializablePayload = {
   
//     time: timestamp.toString() // Convert Timestamp to string
//   };

// // Dispatch the action with the serializable payload


//   const dispatch = useDispatch()
//   const cartFooditems = useSelector((state) => state.cart);
//   const markDone = (allorder) => {
//     dispatch({ type: 'cart/markAsDone', payload: serializablePayload });
//     //dispatch(markAsDone(allorder));
//     console.log(allorder)
//     toast.success("Odered Done");
//   }

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartFooditems));
//   }, [cartFooditems]);

// return (
//     <Layout>
//       <div>

//         <div className="mt-20 mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
//           <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Admin Dashboard</h2>
//           <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">If you really want to make friends, go to the college canteen and eat with them… The people who give you their food give you their heart.</p>
//         </div>
//         <div className="container mx-auto">
//           <div className="md:flex md:space-x-8 bg-gray-200 dark:bg-gray-800 grid grid-cols-3 text-center gap-4 md:justify-center mb-10">
//             <button
//               className={`inline-block rounded-md border border-transparent ${activeTab === 'products' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'} px-8 py-3 font-medium hover:bg-indigo-700`}
//               onClick={() => handleTabChange('products')}
//             >
//               <div className="flex gap-2 items-center">
//                 <MdOutlineProductionQuantityLimits /> Products
//               </div>
//             </button>
//             <button
//               className={`inline-block rounded-md border border-transparent ${activeTab === 'orders' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'} px-8 py-3 font-medium hover:bg-indigo-700`}
//               onClick={() => handleTabChange('orders')}
//             >
//               <div className="flex gap-2 items-center">
//                 <AiFillShopping /> Orders
//               </div>
//             </button>
//             <button
//               className={`inline-block rounded-md border border-transparent ${activeTab === 'users' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'} px-8 py-3 font-medium hover:bg-indigo-700`}
//               onClick={() => handleTabChange('users')}
//             >
//               <div className="flex gap-2 items-center">
//                 <FaUser /> Demand Prediction
//               </div>
//             </button>
//           </div>

//           {/* Render content based on activeTab */}
//           {activeTab === 'products' && (
//             <div>
//               {/* Product content goes here */}
//               <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
//                 <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
//                   {/* <!-- Start coding here --> */}
//                   <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
//                     <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
//                       <div class="w-full md:w-1/2">
//                         <form class="flex items-center">
//                           <label for="simple-search" class="sr-only">Search</label>
//                           <div class="relative w-full">
//                             <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                               <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
//                               </svg>
//                             </div>
//                             <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
//                           </div>
//                         </form>
//                       </div>
//                       <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
//                         <Link to={'/addfooditem'}>
//                           <button type="button" class="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//                             </svg>
//                             Add Food Items
//                           </button>
//                         </Link>
//                       </div>
//                     </div>
//                     <div class="overflow-x-auto">
//                       <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                           <tr>
//                             <th scope="col" class="px-4 py-3">Sr. No.</th>
//                             <th scope="col" class="px-4 py-3">Food Name</th>
//                             <th scope="col" class="px-4 py-3">Image</th>
//                             <th scope="col" class="px-4 py-3">Price</th>
//                             <th scope="col" class="px-4 py-3">Category</th>
//                             <th scope="col" class="px-4 py-3">Cooking Time</th>
//                             <th scope="col" class="px-4 py-3">Date</th>
//                             <th scope="col" class="px-4 py-3">
//                               <span class="sr-only">Actions</span>
//                             </th>
//                           </tr>
//                         </thead>
//                         {fooditem?.map((item, index) => {
//                           console.log(fooditem)
//                           const { name, price, imageUrl, category, cookingtime, date } = item;
//                           return (
//                             <tbody>
//                               <tr class="border-b dark:border-gray-700">
//                                 <td class="px-4 py-3">{index + 1}</td>
//                                 <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{name}</th>
//                                 <td class="px-4 py-3">
//                                   <img src={imageUrl} className='w-5 md:w-32 max-w-full h-10 md:h-32' alt='img' /></td>
//                                 <td class="px-4 py-3">₹{price}</td>
//                                 <td class="px-4 py-3">{category}</td>
//                                 <td class="px-4 py-3">{cookingtime}</td>
//                                 <td class="px-4 py-3">{date}</td>
//                                 <td className="px-4 py-3 flex items-center justify-end">
//                                   <Link to={'/updatefooditem'}>
//                                     <div onClick={() => edithandle(item)}
//                                       className='mr-5'>
//                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
//                                       </svg>
//                                     </div>
//                                   </Link>
//                                   <div onClick={() => deleteFooditem(item)}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                                       <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//                                     </svg>
//                                   </div>
//                                   {/* <button
//                                   id="apple-imac-27-dropdown-button"
//                                   onClick={toggleDropdown}
//                                   className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
//                                   type="button"
//                                 >
//                                   <svg
//                                     className="w-5 h-5"
//                                     aria-hidden="true"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                   >
//                                     <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//                                   </svg>
//                                 </button>
//                                 {isOpen && (
//                                   <div
//                                     id="apple-imac-27-dropdown"
//                                     className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
//                                     <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
//                                       <li>
//                                         <Link to={'/updatefooditem'}>
//                                         <p onClick={() => edithandle(item)}
//                                         className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</p>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                     <div className="py-1" onClick={() => deleteFooditem(item)}>
//                                       <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</p>
//                                     </div>
//                                   </div>
//                                 )} */}
//                                 </td>
//                               </tr>

//                             </tbody>
//                           )
//                         })}

//                       </table>
//                     </div>
//                     <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
//                       <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
//                         Showing
//                         <span class="font-semibold text-gray-900 dark:text-white"> 1-10 </span>
//                         of
//                         <span class="font-semibold text-gray-900 dark:text-white"> 1000</span>
//                       </span>
//                       <ul class="inline-flex items-stretch -space-x-px">
//                         <li>
//                           <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                             <span class="sr-only">Previous</span>
//                             <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
//                             </svg>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
//                         </li>
//                         <li>
//                           <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
//                         </li>
//                         <li>
//                           <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
//                         </li>
//                         <li>
//                           <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
//                         </li>
//                         <li>
//                           <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
//                         </li>
//                         <li>
//                           <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                             <span class="sr-only">Next</span>
//                             <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </nav>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           )}
//           {activeTab === 'orders' && (
//             <div>
//               {/* Order content goes here */}
//               <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
//                 <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
//                   {/* <!-- Start coding here --> */}
//                   <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
//                     <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
//                       <div class="w-full md:w-1/2">
//                         <form class="flex items-center">
//                           <label for="simple-search" class="sr-only">Search</label>
//                           <div class="relative w-full">
//                             <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                               <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
//                               </svg>
//                             </div>
//                             <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
//                           </div>
//                         </form>
//                       </div>

//                     </div>
//                     <div class="overflow-x-auto">
//                       {order.map((allorder, index) => {
//                         return (
//                           <table key={index} class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                             <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
//                               <tr>
//                                 <th scope="col" class="px-4 py-3">Sr. No.</th>
//                                 <th scope="col" class="px-4 py-3">Food Name</th>
//                                 <th scope="col" class="px-4 py-3">Image</th>
//                                 <th scope="col" class="px-4 py-3">Email</th>
//                                 <th scope="col" class="px-4 py-3">User ID</th>
//                                 <th scope="col" class="px-4 py-3">Price</th>
//                                 <th scope="col" class="px-4 py-3">Cooking Time</th>
//                                 {/* <th scope="col" class="px-4 py-3">Date</th> */}
//                                 <th scope="col" class="px-4 py-3">Date/Time</th>
//                                 {/* <th scope="col" class="px-4 py-3">
//                                   <div onClick={() => markAsDelivered(allorder.id)}>
//                                     <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
//                                   </div>
//                                 </th> */}
//                                 <th scope="col" class="px-4 py-3">
//                                   <span class="sr-only">Actions</span>
//                                 </th>
//                               </tr>
//                             </thead>

//                             {allorder?.cartFooditems.map((item, index) => {
//                               const { name, imageUrl, price, cookingtime } = item;
//                               return (
//                                 <tbody key={allorder.id}>
//                                   <tr class="border-b dark:border-gray-700">
//                                     {/* <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th> */}
//                                     <td class="px-4 py-3">{index + 1}</td>
//                                     <td class="px-4 py-3">{name}</td>
//                                     <td class="px-4 py-3">
//                                       <img src={imageUrl} className='w-5 md:w-32 max-w-full h-10 md:h-32' alt='img' /></td>
//                                     <td class="px-4 py-3">{allorder.email}</td>
//                                     <td class="px-4 py-3">{allorder.userid}</td>
//                                     <td class="px-4 py-3">₹{price}</td>
//                                     <td class="px-4 py-3">{cookingtime}</td>
//                                     <td class="px-4 py-3">{allorder.time ? new Date(allorder.time.seconds * 1000).toLocaleString() : ''}</td>
//                                     <td class="px-4 py-3">
//                                       <div onClick={() => markDone(allorder)}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//                       </svg>
//                       </div>
//                                     </td>
                                   
//                                   </tr>

//                                 </tbody>
//                               )
//                             })}

//                           </table>
//                         )
//                       })}

//                     </div>
//                     <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
//                       <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
//                         Showing
//                         <span class="font-semibold text-gray-900 dark:text-white"> 1-10 </span>
//                         of
//                         <span class="font-semibold text-gray-900 dark:text-white"> 1000</span>
//                       </span>
//                       <ul class="inline-flex items-stretch -space-x-px">
//                         <li>
//                           <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                             <span class="sr-only">Previous</span>
//                             <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
//                             </svg>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
//                         </li>
//                         <li>
//                           <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
//                         </li>
//                         <li>
//                           <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
//                         </li>
//                         <li>
//                           <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
//                         </li>
//                         <li>
//                           <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
//                         </li>
//                         <li>
//                           <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                             <span class="sr-only">Next</span>
//                             <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                               <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </nav>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           )}
//           {activeTab === 'users' && (
//             <div>
//               {/* Users content goes here */}
//               <Prediction />
//             </div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Admin;
