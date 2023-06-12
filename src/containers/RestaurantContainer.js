import { useState } from "react";
import CustomerComponent from "../components/CustomerComponent";
import RestaurantProfileComponent from "../components/RestaurantProfileComponent";
import { useEffect } from "react";

const RestaurantContainer = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            const response = await fetch("http://localhost:8080/restaurants");
            const data = await response.json();
            setListOfRestaurants(data);
        }
        fetchRestaurants();

    }, [])

    return ( <>
            <h1>Nearby Restaurants</h1>
            <CustomerComponent />
            <RestaurantProfileComponent />
    </> );
}
 
export default RestaurantContainer;