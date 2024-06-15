// import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// import myContext from '../../context/data/myContext';
// import { toast } from 'react-toastify';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, fireDB } from '../../firebase/FirebaseConfig';
// import { Timestamp, addDoc, collection } from 'firebase/firestore';

// function Signup() {
//   console.log("signup")
//   const [name, setName] = useState("");
//   const [contact, setContact] = useState("");
//   const [pid, setPid] = useState("");
//   const [department, setDepartment] = useState("");
//   const [classs, setClass] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [person, setPerson] = useState("");

//   const context = useContext(myContext);

//   const signup = async () => {
//     console.log("in signup")
//     if (name === "" || email === "" || password === "" || contact === "" || pid === "" || department === "" || classs === "" || person === "") {
//       return toast.error("All fields are required")
//     }

//     try {
//       console.log("Creating user with email and password:", email, password);
//       toast.info("Creating user account...");
//       const users = await createUserWithEmailAndPassword(auth, email, password)
//       console.log("User created successfully:", users.user);
//       toast.success("User account created successfully!");

//       const user = {
//         name: name,
//         pid: pid,
//         contact: contact,
//         department: department,
//         classs: classs,
//         person: person,
//         uid: users.user.uid,
//         email: users.user.email,
//         time: Timestamp.now()
//       }
//       console.log("User data to be stored in Firestore:", user);
//       toast.info("Storing user data in Firestore...");
     
//       const userRef = collection(fireDB, "users")
//       const docRef = await addDoc(userRef, user);
//       console.log("Document written with ID:", docRef.id);
//       toast.success("User data stored successfully!");
//       toast.success("Signup Succesfully")
//       setClass("");
//       setContact("");
//       setDepartment("");
//       setEmail("");
//       setName("");
//       setPassword("");
//       setPid("");
//       setPerson("");
//     }
//     catch (error) {
//       console.error("Error during sign-up:", error);
//       toast.error("An error occurred during sign-up. Please try again.");
//     }
//   }

//   // Rest of the component code...
// return (
//   <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//       {/* <img
//         className="mx-auto h-10 w-auto"
//         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//         alt="Your Company"
//       /> */}
//       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//         Signup Page
//       </h2>
//     </div>

//     <div className="mt-10 space-y-6 sm:mx-auto sm:w-full sm:max-w-sm">
//         <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//           <div className="sm:col-span-3">
//             <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
//               Name
//             </label>
//             <div className="mt-2">
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 autoComplete="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-3">
//             <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
//               Contact
//             </label>
//             <div className="mt-2">
//               <input
//                 type="number"
//                 name="contact"
//                 id="contact"
//                 autoComplete="contact"
//                 value={contact}
//                 onChange={(e) => setContact(e.target.value)}
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2 sm:col-start-1">
//             <label htmlFor="pid" className="block text-sm font-medium leading-6 text-gray-900">
//               PID
//             </label>
//             <div className="mt-2">
//               <input
//                 type="number"
//                 name="pid"
//                 id="pid"
//                 value={pid}
//                 onChange={(e) => setPid(e.target.value)}
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
//               Department
//             </label>
//             <div className="mt-2">
//               <select
//                 id="department"
//                 name="department"
//                 autoComplete="department"
//                 value={department}
//                 onChange={(e) => setDepartment(e.target.value)}
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//               >
//                 <option>Select Department</option>
//                 <option>IT</option>
//                 <option>COMP</option>
//                 <option>EXTC</option>
//                 <option>ELEC</option>
//                 <option>MECH</option>
//               </select>
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <label htmlFor="class" className="block text-sm font-medium leading-6 text-gray-900">
//               Class
//             </label>
//             <div className="mt-2">
//               <select
//                 id="class"
//                 name="class"
//                 autoComplete="Class"
//                 value={classs}
//                 onChange={(e) => setClass(e.target.value)}
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//               >
//                 <option>Select Class</option>
//                 <option>FE</option>
//                 <option>SE</option>
//                 <option>TE</option>
//                 <option>BE</option>
//               </select>
//             </div>
//           </div>

//           <div className="sm:col-span-3">
//             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//               Email
//             </label>
//             <div className="mt-2">
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 autoComplete="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-3">
//             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//               Password
//             </label>
//             <div className="mt-2">
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 autoComplete="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="sm:col-span-3">
//             <label htmlFor="student-staff" className="block text-sm font-medium leading-6 text-gray-900">
//               Student/Staff
//             </label>
//             <div className="mt-2">
//               <select
//                 id="student-staff"
//                 name="student-staff"
//                 value={person}
//                 onChange={(e) => setPerson(e.target.value)}
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//               >
//                 <option>Select</option>
//                 <option>Student</option>
//                 <option>Staff</option>
//               </select>
//             </div>
//           </div>

//         </div>


//         <div>
//           <button
            
//             onClick={signup}
//             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Sign up
//           </button>
//         </div>
 

//       <p className="mt-10 text-center text-sm text-gray-500">
//         Do you have an account?{' '}
//         <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//           Let's Login
//         </Link>
//       </p>
//     </div>
//   </div>
// )
// }

// export default Signup

import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';

function Signup() {
  console.log("signup")
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [pid, setPid] = useState("");
  const [department, setDepartment] = useState("");
  const [classs, setClass] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [person, setPerson] = useState("");

  const context = useContext(myContext);

  const signup = async () => {
    console.log("in signup")
    if (name === "" || email === "" || password === "" || contact === "" || pid === "" || department === "" || classs === "" || person === "") {
      return toast.error("All fields are required")
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password)
      const user = {
        name: name,
        pid: pid,
        contact: contact,
        department: department,
        classs: classs,
        person: person,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now()
      }
     
      const userRef = collection(fireDB, "users")
      await addDoc(userRef,user)
      toast.success("Signup Succesfully")
      setClass("");
      setContact("");
      setDepartment("");
      setEmail("");
      setName("");
      setPassword("");
      setPid("");
      setPerson("");
    }
    catch (error){
      console.log(error);

    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Signup Page
        </h2>
      </div>

      <div className="mt-10 space-y-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                Contact
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="contact"
                  id="contact"
                  autoComplete="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="pid" className="block text-sm font-medium leading-6 text-gray-900">
                PID
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="pid"
                  id="pid"
                  value={pid}
                  onChange={(e) => setPid(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                Department
              </label>
              <div className="mt-2">
                <select
                  id="department"
                  name="department"
                  autoComplete="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Department</option>
                  <option>IT</option>
                  <option>COMP</option>
                  <option>EXTC</option>
                  <option>ELEC</option>
                  <option>MECH</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="class" className="block text-sm font-medium leading-6 text-gray-900">
                Class
              </label>
              <div className="mt-2">
                <select
                  id="class"
                  name="class"
                  autoComplete="Class"
                  value={classs}
                  onChange={(e) => setClass(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Class</option>
                  <option>FE</option>
                  <option>SE</option>
                  <option>TE</option>
                  <option>BE</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="student-staff" className="block text-sm font-medium leading-6 text-gray-900">
                Student/Staff
              </label>
              <div className="mt-2">
                <select
                  id="student-staff"
                  name="student-staff"
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select</option>
                  <option>Student</option>
                  <option>Staff</option>
                </select>
              </div>
            </div>

          </div>


          <div>
            <button
              
              onClick={signup}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
   

        <p className="mt-10 text-center text-sm text-gray-500">
          Do you have an account?{' '}
          <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Let's Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup