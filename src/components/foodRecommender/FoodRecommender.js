import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodRecommender = () => {
    const [selectedFood, setSelectedFood] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5001/api/foods');
                setFoods(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFoods();
    }, []);

    const handleRecommend = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5001/api/recommend', { food: selectedFood });
            setRecommendations(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="mx-auto w-full items-center">
    <select className="w-full h-10 mb-4 border border-gray-300 rounded-lg bg-gray-50 focus:ring--500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-indigo-500" onChange={(e) => setSelectedFood(e.target.value)}>
        <option value="">Select a food item</option>
        {foods.map((food, index) => (
            <option key={index} value={food}>{food}</option>
        ))}
    </select>
    <button className="w-full h-10 mb-4 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleRecommend}>Recommend</button>
    <div className="flex flex-row flex-wrap justify-between">
        {recommendations.map((food, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md mb-4" style={{ flex: '0 0 30%' }}>
                <img src={food.image_link} alt={food.name} className="w-full" />
                <h2>{food.name}</h2>
                <p>Price: {food.Price}</p>
                <p>Rate: {food.rate}</p>
            </div>
        ))}
    </div>
</div>

        // <div style={{ margin: '0 auto', width: '100%', textAlign: 'center' }}>
        //     <select style={{ width: '100%', height: '40px', marginBottom: '10px' }} onChange={(e) => setSelectedFood(e.target.value)}>
        //         <option value="">Select a food item</option>
        //         {foods.map((food, index) => (
        //             <option key={index} value={food}>{food}</option>
        //         ))}
        //     </select>
        //     <button style={{ width: '100%', height: '40px', marginBottom: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }} onClick={handleRecommend}>Recommend</button>
        //     <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        //         {recommendations.map((food, index) => (
        //             <div key={index} style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '4px', marginBottom: '10px', flex: '0 0 30%' }}>
        //                 <img src={food.image_link} alt={food.name} style={{ width: '100%' }} />
        //                 <h2>{food.name}</h2>
        //                 <p>Price: {food.Price}</p>
        //                 <p>Rate: {food.rate}</p>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
};

export default FoodRecommender;