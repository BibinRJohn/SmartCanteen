import React from 'react'

function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white mt-20">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Life's too short to skip FOOD
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            If you really want to make a friends, go to college canteen and eat with them… The people who give you their food give you their heart.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://img.freepik.com/premium-photo/vada-pav-wada-pao-is-indian-desi-burger-is-roadside-fast-food-dish-from-maharashtra-selective-focus_466689-67470.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/premium-photo/two-mugs-masala-tea-are-gray-table-steam-comes-from-them_163994-1256.jpg?w=360"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/premium-photo/indian-veg-chapati-wrap-kathi-roll-served-plate-with-sauce-moody-background-selective-focus_466689-29359.jpg?w=360"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-photo/noodles-with-beef-vegetables-black-table_141793-1730.jpg?t=st=1708867004~exp=1708870604~hmac=e17b61309c98d500806cd1cdaa6369c57aad7fc7c88dbab7c6f0a1c071f19c4d&w=360"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52350.jpg?w=360"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-photo/high-angle-triangle-sandwiches-with-tomatoes_23-2148640141.jpg?t=st=1708867200~exp=1708870800~hmac=cdbdd81cf858466e41b3fa53f56a8153c78128777c6e47ee367f1fe6ccc3bbee&w=360"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/premium-photo/aloo-kanda-poha-tarri-pohe-with-spicy-chana-masala-curry_466689-47875.jpg?w=360"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                Let's Eat </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection