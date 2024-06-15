import React, { useContext, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify';

function Produts() {
  const context = useContext(myContext);
  const { fooditem } = context;

  //***Filter food items by category***//
  const snacks = fooditem.filter(item => item.category === 'Snacks');
  const chinese = fooditem.filter(item => item.category === 'Chinese');
  const southindian = fooditem.filter(item => item.category === 'South Indian');
  const dessertcolddrink = fooditem.filter(item => item.category === 'Dessert/Cold drink');

  const dispatch = useDispatch()
  const cartFooditems = useSelector((state) => state.cart)
  //console.log(cartFooditems)

  // //**Add to Cart***//
  // const addCart = (fooditem) => {
  //   const { time, ...payloadWithoutTime } = fooditem;
  //   const { seconds, nanoseconds } = time;
  //   const serializedTimestamp = { seconds, nanoseconds };
  //   const payload = { ...payloadWithoutTime, time: serializedTimestamp };
  //   dispatch(addToCart(payload));
  //   toast.success("Add to Cart")
  // }
  //**Add to Cart***//
  const addCart = (fooditem) => {
    dispatch(addToCart(fooditem));
    toast.success("Add to Cart")
  }

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cartFooditems));
  }, [cartFooditems]);


  return (
    <div className="bg-white">
      <div className="mx-auto mt-10 max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Snacks</h2>
        <AliceCarousel
          mouseTracking
          autoPlay
          autoPlayInterval={2000}
          buttonsDisabled={true}
          responsive={{ 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } }}
        >
          {snacks.map((item, index) => {
            const { name, imageUrl, price, id } = item;
            return (
              <div key={id} className="group relative p-5">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={imageUrl}
                    alt="foodimg"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      {name}
                    </p>
                    <p className="mt-1 text-lg font-bold text-gray-900">₹{price}</p>
                  </div>
                  <button onClick={() => addCart(item)} className="text-white absolute end-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Cart</button>
                </div>
              </div>
            );
          })}
        </AliceCarousel>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Chinese</h2>
        <AliceCarousel
          mouseTracking
          autoPlay
          autoPlayInterval={2000}
          buttonsDisabled={true}
          responsive={{ 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } }}
        >
          {chinese.map((item, index) => {
            const { name, imageUrl, price, id } = item;
            return (
              <div key={id} className="group relative p-5">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={imageUrl}
                    alt="foodimg"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      {name}
                    </p>
                    <p className="mt-1 text-lg font-bold text-gray-900">{price}</p>
                  </div>
                  <button onClick={() => addCart(item)} className="text-white absolute end-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Cart</button>
                </div>
              </div>
            );
          })}
        </AliceCarousel>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">South Indian</h2>
        <AliceCarousel
          mouseTracking
          autoPlay
          autoPlayInterval={2000}
          buttonsDisabled={true}
          responsive={{ 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } }}
        >
          {southindian.map((item, index) => {
            const { name, imageUrl, price, id } = item;
            return (
              <div key={id} className="group relative p-5">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={imageUrl}
                    alt="foodimg"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      {name}
                    </p>
                    <p className="mt-1 text-lg font-bold text-gray-900">{price}</p>
                  </div>
                  <button onClick={() => addCart(item)} className="text-white absolute end-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Cart</button>
                </div>
              </div>
            );
          })}
        </AliceCarousel>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Dessert/Cold drink</h2>
        <AliceCarousel
          mouseTracking
          autoPlay
          autoPlayInterval={2000}
          buttonsDisabled={true}
          responsive={{ 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } }}
        >
          {dessertcolddrink.map((item, index) => {
            const { name, imageUrl, price, id } = item;
            return (
              <div key={id} className="group relative p-5">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={imageUrl}
                    alt="foodimg"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      {name}
                    </p>
                    <p className="mt-1 text-lg font-bold text-gray-900">{price}</p>
                  </div>
                  <button onClick={() => addCart(item)} className="text-white absolute end-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Cart</button>
                </div>
              </div>
            );
          })}
        </AliceCarousel>
      </div>
    </div>
  );
}

export default Produts;
