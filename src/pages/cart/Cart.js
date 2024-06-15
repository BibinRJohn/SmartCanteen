import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';

function Cart() {
  const dispatch = useDispatch();
  const cartFooditems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Food Item Deleted");
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartFooditems));
  }, [cartFooditems]);

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartFooditems.forEach((cartFooditems) => {
      temp = temp + parseInt(cartFooditems.price);
    });
    setTotalAmount(temp);
  }, [cartFooditems]);

  const [itemQuantities, setItemQuantities] = useState({});

  const handleQuantityChange = (item, quantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.id]: quantity,
    }));
  };
  useEffect(() => {
    let temp = 0;
    cartFooditems.forEach((cartFooditems) => {
      const quantity = itemQuantities[cartFooditems.id] || 1;
      temp = temp + parseInt(cartFooditems.price) * quantity;
    });
    setTotalAmount(temp);
  }, [cartFooditems, itemQuantities]);

  const [totalCookingtime, setTotalCookingtime] = useState(0);
  useEffect(() => {
    let t = 0;
    cartFooditems.forEach((cartFooditems) => {
      t = t + parseInt(cartFooditems.cookingtime);
    });
    setTotalCookingtime(t);
  }, [cartFooditems]);

  const buyNow = async () => {
    // Check if user is authenticated
    const currentUser = JSON.parse(localStorage.getItem("user"));
    
    var options = {
      key: "rzp_test_ApohiqJUS9qCqb",// Enter the Key ID generated from the Dashboard
      key_secret: "PoejwZRda4U7UUsMd0q79QFm",
      amount: parseInt(totalAmount),
      currency: "INR",
      order_receipt: 'order_rcptid_',
      name: "Smart Canteen",
      description: "for testing purpose",
      handler: async function (response) {
        toast.success("Payment Successful");
        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartFooditems,
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          ),
          time: Timestamp.now(),
          userid: currentUser.user.uid, // Retrieve user ID from localStorage
          email: currentUser.user.email, // Retrieve user email from localStorage
          //displayName: currentUser.user.name, // Retrieve user name from localStorage
          //phoneNumber: currentUser.user.pid, // Retrieve user PID from localStorage
          //person: currentUser.user.person, // Retrieve user type (student/staff) from localStorage
          paymentId
        }

        try {
          const orderRef = collection(fireDB, "order");
          await addDoc(orderRef, orderInfo);
          console.log("OrderInfo:",orderInfo);
          toast.success("Order placed successfully!");
        } catch (error) {
          console.log(error);
          toast.error("Failed to place order!");
        }
      },
      theme: {
        color: "#4f46e5"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  }


  return (
    <Layout>
      <div>
        <div className="mt-20 mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">My Cart</h2>
        </div>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
            {cartFooditems.map((item, index) => {
              const { name, imageUrl, price,cookingtime,id } = item;
              return (
                <div className='relative shadow-md flex mb-6 flex-col bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageUrl} alt="" />
                  <div className="flex justify-between ">
                    <div className='mt-20 ml-4'>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                      <p className="mt-1 text-lg font-bold text-gray-900">₹{price}</p>
                      <div className="relative flex items-center max-w-[8rem]">
                        <div className="mt-2">
                          <select
                            id="quantity"
                            name="quantity"
                            value={itemQuantities[id] || 1}
                            onChange={(e) => handleQuantityChange(item, e.target.value)}
                            required
                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                          >
                            <option>Choose quantity</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div onClick={() => deleteCart(item)} className='absolute top-0 right-0 mt-4 mr-6'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='h-full rounded-lg shadow-md md:w-1/3 items-center p-10 leading-normal bg-white border border-gray-200 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
            <h5 className="text-2xl font-bold mb-3 tracking-tight text-gray-900 dark:text-white">Billing</h5>
            <div className="">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">₹{totalAmount}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Time</p>
                <p className="text-gray-700">{totalCookingtime}min.</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between mb-3">
                <p className="text-lg font-bold">Total</p>
                <div className>
                  <p className="mb-1 text-lg font-bold">₹{totalAmount}</p>
                </div>
              </div>
              <div className="text-center rounded-lg text-white font-bold">
                <button
                  type="button"
                  onClick={() => buyNow()}
                  className="w-full flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart;
