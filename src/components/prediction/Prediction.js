import React, { useEffect, useState } from 'react'

function Prediction() {
    const [predictions, setPredictions] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/predictions')
            .then(response => response.json())
            .then(data => setPredictions(data));
    }, []);

    const days = Object.keys(predictions).length > 0 ? Object.keys(predictions[Object.keys(predictions)[0]]) : [];
    return (
        <div className="mt-8">
            <h1 className="text-2xl font-bold mb-4">Predictions</h1>
            <table className="w-full table-fixed">
                <thead>
                    <tr className='border-b-2 border-gray-200'>
                        <th className="text-center">Food Item</th>
                        {Object.keys(predictions).map(foodItem => (
                            <th key={foodItem} className="text-center">{foodItem}</th>
                        ))}
                    </tr>

                </thead>
                <tbody>
                    {days.map((day, index) => (
                        <React.Fragment key={day}>
                            <tr className="h-6"></tr>
                            <tr>
                                <td className="text-center">{day}</td>
                                {Object.values(predictions).map(prediction => (
                                    <td key={prediction[day]} className="text-center">{prediction[day]}</td>
                                ))}
                            </tr>
                            <tr className="h-6"></tr>

                            <tr className="border-b border-gray-200">
                                <td colSpan={Object.keys(predictions).length + 1}></td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
        // <div className="mt-8">
        //     <h1 className="text-2xl font-bold mb-4">Predictions</h1>
        //     <table className="w-full table-fixed">
        //         <thead>
        //             <tr>
        //                 <th className="text-center">Food Item</th>
        //                 {Object.keys(predictions)?.map(foodItem => (
        //                     <th key={foodItem} className="text-center">{foodItem}</th>
        //                 ))}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {days.map((day, index) => (
        //                 <tr key={day}>
        //                     <td className="text-center">{day}</td>
        //                     {Object.values(predictions)?.map(prediction => (
        //                         <td key={prediction[day]} className="text-center">{prediction[day]}</td>
        //                     ))}
        //                 </tr>

        //             ))}


        //         </tbody>
        //     </table>
        // </div>

    )
}

export default Prediction