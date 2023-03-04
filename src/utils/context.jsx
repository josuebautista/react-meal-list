import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = React.createContext();
const allMealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const fetchMeals = async (url) => {
        setLoading(true);
        try {
            const { data } = await axios(url);

            if (data.meals) {
                setMeals(data.meals);
            } else {
                setMeals([])
            }

        } catch (err) {
            console.log(err.response)
        }
        setLoading(false);
    }

    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl);
    }

    const selectMeal = (idMeal) => {
        console.log(idMeal);
        let meal;
        meal = meals.find((meal) => meal.idMeal === idMeal);
        setSelectedMeal(meal)
        setShowModal(true);
    }

    useEffect(() => {
        fetchMeals(allMealsURL);

    }, [])

    useEffect(() => {
        if (!searchTerm) return
        fetchMeals(`${allMealsURL}${searchTerm}`);

    }, [searchTerm])

    


    return <AppContext.Provider value={{ 
            loading, 
            meals, 
            setSearchTerm, 
            fetchRandomMeal,
            showModal,
            selectedMeal,
            selectMeal
        }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };