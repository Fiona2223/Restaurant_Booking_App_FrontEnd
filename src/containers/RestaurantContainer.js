import {useState, useEffect} from "react";
import CustomerComponent from "../components/CustomerComponent";
import RestaurantProfileListComponent from "../components/RestaurantProfileListComponent";

const CUSTOMER_SERVER_URL = "http://localhost:8080/customer";

const RestaurantContainer = () => {
    const [customers, setCustomers] = useState([]);
    const [currentCustomer, setCurrentCustomer] = useState({});
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [customersBooking, setCustomersBooking] = useState([]);

    const fetchCustomerBookings = async() => {
      const response = await fetch(`${CUSTOMER_SERVER_URL}/1/bookings`)
      const jsonData = await response.json();
      setCustomersBooking(jsonData);
    }


    // this needs to be passed down to the PickTableComponent: so this needs to be done in the
    // react router to be passed down to PickTableComponent.

    // const postBooking = async(booking) => {
    //   const response = await fetch("http://localhost:8080/bookings",{
    //       method: "POST",
    //       headers: {"Content-type" : "application/json"},
    //       body : JSON.stringify(booking)
    //   });
    //   const savedBooking = await response.json();
    //   setCustomersBooking([...customersBooking, savedBooking]);
    // }

    // postBooking();

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
        }
        fetchRestaurants(); 
        fetchCustomerBookings();
      }, [])
  
    return ( 
            <>
              <h1>Nearby Restaurants</h1>
              <CustomerComponent currentCustomer={currentCustomer} setCurrentCustomer={setCurrentCustomer}/>
              <RestaurantProfileListComponent listOfRestaurants = {listOfRestaurants} />           
             
            </>
            )
}
 
export default RestaurantContainer;