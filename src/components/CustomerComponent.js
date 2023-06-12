import {useState, useEffect} from "react";

const CUSTOMER_SERVER_URL = "http://localhost:8080/customer";

const CustomerComponent = ({customer}) => {

    // container
    // const [customers, setCustomers] = useState({});

    // component 
    const [customerLocation, setCustomerLocation]= useState("");

    // const getCustomer = async () => {
    //     const response = await fetch(`${CUSTOMER_SERVER_URL}`,{
    //         method: "GET",
    //         headers:{"Content-Type": "application/json"} 
    //     })
    //     const allCustomers = await response.json();
    //     const currentCustomer = allCustomers[0];
    //     setCustomers(currentCustomer);
    // }

    const getCustomerLocation = async (customerId) => {
        const response = await fetch (`${CUSTOMER_SERVER_URL}/${customer.customerId}/location`,{
            method: "GET",
            headers:{"Content-Type": "application/json"}
        })
        const customerLocationData = await response.json();
        setCustomerLocation(customerLocationData);
    }
    const addCustomerLocation = async (newLocation) => {
        const response = await fetch (`${CUSTOMER_SERVER_URL}/${customer.customerId}/location/edit`, {
            method : "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({location: newLocation}),
        })
        const newCustomerLocation = await response.json();
        setCustomerLocation(newCustomerLocation); 
    
    }

//     const handleFormSubmit = (event) => {
//     event.preventDefault();
//     customer()
//   };

    const handleLocationChange = (event) => {
    setCustomerLocation(event.target.value);
    };

    useEffect(() => {
        getCustomerLocation()
    }, [])
    return ( <>
            <h2>Hello CustomerComponent</h2>
            <form >
                <input 
                type="text"
                name="customerLocation"
                placeholder="Enter your current location"
                value ={customerLocation}
                onChange={handleLocationChange}
                />
                <button type="submit"> Enter</button>

            </form>
    </> );
}
 
export default CustomerComponent;