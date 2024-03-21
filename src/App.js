import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom'
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Recommendation from './pages/recommendation/Recommendation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './pages/admin/Admin';
import UpdateFooditem from './pages/admin/UpdateFooditem';
import AddFooditem from './pages/admin/AddFooditem';
import MyState from './context/data/myState';
import Produts from './components/products/Produts';
import Profile from './pages/profile/Profile';
import FoodRecommender from './components/foodRecommender/FoodRecommender';
import Prediction from './components/prediction/Prediction';


function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path='/products' element={<Produts/>} />
          <Route path='/foodrecom' element={<FoodRecommender/>} />
          <Route path='/prediction' element={<Prediction/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path="/admin" element={
            <ProtectedRouteForAdmin>
          <Admin />
          </ProtectedRouteForAdmin>} />
          <Route path="/addfooditem" element={
            <ProtectedRouteForAdmin>
           <AddFooditem/>
          </ProtectedRouteForAdmin>} />
          <Route path="/updatefooditem" element={
            <ProtectedRouteForAdmin>
          <UpdateFooditem />  
          </ProtectedRouteForAdmin>} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

//**User***//
export const ProtectedRoute = ({children}) =>{
  const user = localStorage.getItem('user')
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'}/>
  }
}

//***Admin***//
const ProtectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if (admin.user.email === 'janavimi28@gmail.com') {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}
