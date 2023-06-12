import {useState, useEffect} from "react";
import CustomerComponent from "../components/CustomerComponent";

const CUSTOMER_SERVER_URL = "http://localhost:8080/customer";

const RestaurantContainer = () => {
    const [customers, setCustomers] = useState({});


    const getCustomer = async () => {
        const response = await fetch(`${CUSTOMER_SERVER_URL}`,{
            method: "GET",
            headers:{"Content-Type": "application/json"} 
        })
        const allCustomers = await response.json();
        const currentCustomer = allCustomers[0];
        setCustomers(currentCustomer);
    }

    return ( <>
    
            <h1>Hello From RestaurantContainer</h1>
            <CustomerComponent customer={customers}/>
    </> );
}
 
export default RestaurantContainer;