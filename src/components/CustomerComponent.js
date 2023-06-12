import {useState, useEffect} from "react";

const CUSTOMER_SERVER_URL = "http://localhost:8080/customer";

const CustomerComponent = ({currentCustomer}) => {

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
    }

    const addCustomerLocation = async (newLocation) => {
        const response = await fetch (`${CUSTOMER_SERVER_URL}/${currentCustomer.id}/location/edit`, {
            method : "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({location: newLocation}),
        })
        const newCustomerLocation = await response.json();
        setCustomerLocation(newCustomerLocation); 
    
    }

//     const handleFormSubmit = (event) => {
//     event.preventDefault();
//   };

    const handleLocationChange = (event) => {
    setCustomerLocation(event.target.value);
    };

    useEffect(() => {
        if(currentCustomer && currentCustomer.id){
            getCustomerLocation()
            addCustomerLocation()
        }
    }, [currentCustomer])
    
    return ( <>
            <h2>Hello from CustomerComponent</h2>
            <form>
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