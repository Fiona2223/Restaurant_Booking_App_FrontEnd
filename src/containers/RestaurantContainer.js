import {useState, useEffect} from "react";
import CustomerComponent from "../components/CustomerComponent";
import RestaurantProfileListComponent from "../components/RestaurantProfileListComponent";
import MapComponent from "../components/MapComponent"

const CUSTOMER_SERVER_URL = "http://localhost:8080/customer";

const RestaurantContainer = () => {
    const [customers, setCustomers] = useState([]);
    const [currentCustomer, setCurrentCustomer] = useState({});
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const getCustomer = async () => {
        const response = await fetch(`${CUSTOMER_SERVER_URL}`,{
            method: "GET",
            headers:{"Content-Type": "application/json"} 
        })
        const allCustomers = await response.json();
        setCustomers(allCustomers);
        console.log(allCustomers);
        setCurrentCustomer(allCustomers[0]);
    }

    useEffect(() => {
        getCustomer()
        const fetchRestaurants = async () => {
            const response = await fetch("http://localhost:8080/restaurants");
            const data = await response.json();
            setListOfRestaurants(data);
            setFilteredRestaurants(data);
        }
        fetchRestaurants(); 
      }, [])

      const filterRestaurants = (location)=>{
        const foundRestaurants = listOfRestaurants.filter((restaurant)=>{
          return restaurant.location ===  location;
        })
        setFilteredRestaurants(foundRestaurants);
      }
  
    return ( 
            <>
              <h1>Nearby Restaurants</h1>
              <CustomerComponent currentCustomer={currentCustomer} setCurrentCustomer={setCurrentCustomer}/>
              <RestaurantProfileListComponent listOfRestaurants = {filteredRestaurants} />   
              <MapComponent filterRestaurants={filterRestaurants}/>      
             
            </>
            )
}
 
export default RestaurantContainer;