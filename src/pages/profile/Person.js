import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/FirebaseConfig';

function Person() {
    const [userEmail, setUserEmail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log("Auth state changed:", user);
            if (user) {
                setUserEmail(user.email);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : userEmail ? (
                <div className="mt-20 mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Profile</h2>
                    <div className='mt-10 space-y-6 sm:mx-auto sm:w-full sm:max-w-sm'>
                        <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <div className='sm:col-span-6'>
                                <p><strong>Email:</strong> {userEmail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Person;


// import React, { useEffect, useState } from 'react';
// import { auth, fireDB} from '../../firebase/FirebaseConfig';


// function Person() {
//     const [userDetails, setUserDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             console.log("Auth state changed:", user);
//             if (user) {
//                 const userRef = fireDB.collection("users").doc(user.uid);
//                 userRef.get().then((doc) => {
//                     if (doc.exists) {
//                         console.log("User details retrieved:", doc.data());
//                         setUserDetails(doc.data());
//                     } else {
//                         setError("User details not found");
//                     }
//                     setLoading(false);
//                 }).catch((error) => {
//                     console.log("Error getting document:", error);
//                     setError("Error fetching user details");
//                     setLoading(false);
//                 });
//             } else {
//                 setLoading(false);
//             }
//         });
    
//         return () => {
//             unsubscribe();
//         };
//     }, []);

//     return (
//         <div>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : error ? (
//                 <p>{error}</p>
//             ) : userDetails ? (
//                 <div className="mt-20 mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
//                     <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Profile</h2>
//                     <div className='mt-10 space-y-6 sm:mx-auto sm:w-full sm:max-w-sm'>
//                         <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
//                             <div className='sm:col-span-3'>
//                                 <p><strong>Name:</strong> {userDetails.name}</p>
//                             </div>
//                             <div className='sm:col-span-3'>
//                                 <p><strong>Email:</strong> {userDetails.email}</p>
//                             </div>
//                             <div className='sm:col-span-2 sm:col-start-1'><strong>Pid:</strong> {userDetails.pid}</div>
//                             <div className='sm:col-span-2'><strong>Department:</strong> {userDetails.department}</div>
//                             <div className='sm:col-span-2'><strong>Class:</strong> {userDetails.class}</div>
//                         </div>
//                     </div>
//                 </div>
//             ) : null}
//         </div>
//     );
// }

// export default Person;