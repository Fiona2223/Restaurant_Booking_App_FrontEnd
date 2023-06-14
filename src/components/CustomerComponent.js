import {useState, useEffect} from "react";

const CUSTOMER_SERVER_URL = "http://localhost:8080/customer";

const CustomerComponent = ({currentCustomer, setCurrentCustomer}) => {

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

    // const getCustomerLocation = async (currentCustomer) => {
    //     const response = await fetch (`${CUSTOMER_SERVER_URL}/{currentCustomer.id}/location`,{
    //         method: "GET",
    //         headers:{"Content-Type": "application/json"}
    //     })
    //     const customerLocationData = await response.json();
    //     setCustomerLocation(customerLocationData);
    // }

    const getCustomerLocation = async () => {
        const response = await fetch(`${CUSTOMER_SERVER_URL}/${currentCustomer.id}`);
        const data = await response.json();
        setCustomerLocation(data.location);
        console.log(data.location);
    }

    const addCustomerLocation = async (newLocation) => {
        const response = await fetch (`${CUSTOMER_SERVER_URL}/${currentCustomer.id}/location/edit`, {
            method : "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: newLocation
        })
        const updatedCustomer = await response.json();
        console.log(updatedCustomer);
        setCurrentCustomer({...currentCustomer, location : updatedCustomer.location});
        setCustomerLocation("");
    
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addCustomerLocation(customerLocation);
    };

    const handleLocationChange = (event) => {
        const location = event.target.value;
        setCustomerLocation(location);
        // setCurrentCustomer(currentCustomer);
    };

    useEffect(() => {
        if(currentCustomer && currentCustomer.id){
            getCustomerLocation()
            // addCustomerLocation()
        }

    }, [])
    
    return ( <>
            <h2 id="customer-title">Nearby Restaurants</h2>
            <form id="customer-location-form">
                <input id="location-input"
                type="text"
                name="customerLocation"
                placeholder="Enter your current location"
                value ={customerLocation}
                onChange={handleLocationChange}
                />
                <button id="enter-location-input-btn"
                        type="submit" 
                        onClick={handleFormSubmit}>Enter</button>

            </form>
    </> );
}
 
export default CustomerComponent;