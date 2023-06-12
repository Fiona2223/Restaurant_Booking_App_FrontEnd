import {useState, useEffect} from "react";


const CUSTOMER_SERVER_URL = "http://localhost:8080/customer";
const CustomerComponent = () => {
    const [customerLocation, setCustomerLocation]= useState("");

    const getCustomerLocation = async (location) => {
        const response = await fetch (`${CUSTOMER_SERVER_URL}/{customer.customerId}/location`)
    }
    const addCustomerLocation = async (location) => {
        const response = await fetch (`${CUSTOMER_SERVER_URL}/{customer.customerId}/location/edit`)
    }

    useEffect(() => {
        getCustomerLocation()
    }, [])
    return ( <>
            <h2>Hello CustomerComponent</h2>
            <form onSubmit={handleFormSubmit}>
                <input 
                type="text"
                name="customerLocation"
                placeholder="Enter your current location"
                value ={setCustomerLocation}
                onChange={handleChange}
                />
                <button type="submit"> Enter</button>

            </form>
    </> );
}
 
export default CustomerComponent;