import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function UpdateFooditem() {
  const context = useContext(myContext);
  const { fooditems, setFooditems, updateFooditem } = context
  return (
    <Layout>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div lassName="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Update Food Item
          </h2>
        </div>
        <div className="mt-10 space-y-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label htmlFor="foodname" className="block text-sm font-medium leading-6 text-gray-900">
              Food Name
            </label>
            <div className="mt-2">
              <input
                id="foodname"
                name="foodname"
                type="text"
                value={fooditems.name}
                onChange={(e) => setFooditems({ ...fooditems, name: e.target.value })}
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="fooditemimage" className="block text-sm font-medium leading-6 text-gray-900">
              Food Item Image
            </label>
            <div className="mt-2">
              <input
                id="fooditemimage"
                name="fooditemimage"
                type="text"
                value={fooditems.imageUrl}
                onChange={(e) => setFooditems({ ...fooditems, imageUrl: e.target.value })}
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              Price
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                value={fooditems.price}
                onChange={(e) => setFooditems({ ...fooditems, price: e.target.value })}
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
              Category
            </label>
            <div className="mt-2">
              <input
                id="category"
                name="category"
                type="text"
                value={fooditems.category}
                onChange={(e) => setFooditems({ ...fooditems, category: e.target.value })}
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="cookingtime" className="block text-sm font-medium leading-6 text-gray-900">
              Cooking Time
            </label>
            <div className="mt-2">
              <input
                id="cookingtime"
                name="cookingtime"
                type="number"
                value={fooditems.cookingtime}
                onChange={(e) => setFooditems({ ...fooditems, cookingtime: e.target.value })}
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={updateFooditem}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update Food Item
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UpdateFooditem