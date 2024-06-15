import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { fireDB } from '../../firebase/FirebaseConfig';
import {  Timestamp,  addDoc,  collection,  deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify'

function MyState(props) {

  //***FoodItems***//
  const [fooditems,setFooditems]= useState({
    name: null,
    price: null,
    imageUrl: null,
    category: null,
    cookingtime: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }
    ) 
  });

  //***Add FoodItems***//
  const addFooditems = async () =>{
    if (fooditems.name == null || fooditems.price == null || fooditems.imageUrl == null || fooditems.category == null || fooditems.cookingtime == null){
      return toast.error("Please fill all fields")
    }
    const fooditemsRef = collection(fireDB, "fooditems")
    try {
      await addDoc(fooditemsRef,fooditems)
      toast.success("Food Items added successfully")
      getFooditemsData()
      setTimeout(() =>{
        window.location.href ='/admin'
      },800)
      // closeModal()
    } catch (error) {
      console.log(error)
    }
    setFooditems("")
  } 

  const  [fooditem, setFooditem] = useState([]);


  
  // //***Get FoodItems***//
  const getFooditemsData =async () =>{
    try {
      const q = query(
        collection(fireDB,"fooditems"),
        
      );
      const data = onSnapshot(q, (QuerySnapshot) =>{
        let fooditemsArray = [];
        QuerySnapshot.forEach((doc) =>{
          fooditemsArray.push({ ...doc.data(), id: doc.id});
        });
        setFooditem(fooditemsArray)
      });
      return () => data;
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFooditemsData();
  }, []);

  //***Update FoodItems***//
  const edithandle = (item) =>{
    setFooditems(item)
  }

  const updateFooditem = async(item) =>{
    try {
      await setDoc(doc(fireDB,"fooditems",fooditems.id),fooditems)
      toast.success("Food Item Updated successfully")
      setTimeout(() =>{
        window.location.href ='/admin'
      },800)
      getFooditemsData();
    } catch (error) {
      console.log(error)
    }
    setFooditems("")
  }

  //***Delete Food Item***//
  const deleteFooditem = async(item) =>{
    try {
      await deleteDoc(doc(fireDB,"fooditems",item.id))
      toast.success("Food Item Deleted successfully")
      getFooditemsData();
    } catch (error) {
      console.log(error)
    }
  }
  

//***Order Food Item***//
const [order, setOrder] = useState([]);

const getOrderData = async () => {
  try {
    const result = await getDocs(collection(fireDB, "order"))
    const orderArray = [];
    result.forEach((doc) => {
      orderArray.push(doc.data());
    });
    setOrder(orderArray);
    //console.log(orderArray);
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  getFooditemsData();
  getOrderData();
}, []);

//***Get User Data***//
const [user, setUser] = useState([]);

const getUserData = async () => {
  try {
    const result = await getDocs(collection(fireDB, "users"))
    const userArray = [];
    result.forEach((doc) => {
      userArray.push(doc.data());
    });
    setUser(userArray);
    //console.log(userArray)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  getFooditemsData();
  getOrderData();
  getUserData();
}, []);

  return (
    <MyContext.Provider value={{
      fooditems,setFooditems,addFooditems,fooditem,
      edithandle,updateFooditem,deleteFooditem,
      order, user
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState