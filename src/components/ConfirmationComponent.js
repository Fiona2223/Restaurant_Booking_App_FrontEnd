import { tab } from "@testing-library/user-event/dist/tab";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CUSTOMER_BOOKINGS_SERVER_URL = "http://localhost:8080/customer/1/bookings";

const ConfirmationComponent = ({customer, setCustomerBooking, customerBooking, currentCustomer}) => {

    const [displayButton, setDisplayButton] = useState(false);
    const [lastBookingObject, setLastBookingObject] = useState(null);

    
    let navigate = useNavigate()
    const navigateToWallet = () => {
        let path = `/wallet`;
        navigate(path);
        setDisplayButton(true);   
        // navigate to another react router 
    }

    // maybe fetch
    const fetchLastBooking = async() => {
        const response = await fetch(`${CUSTOMER_BOOKINGS_SERVER_URL}`);
        const jsonData = await response.json();
        // jsonData is a list of all of yasmins bookings
        // we need to get the last one 
        // console.log(jsonData);
        const lastBooking = jsonData.splice(-1);
        setLastBookingObject(lastBooking);
        // console.log(lastBooking);
        // console.log(lastBookingObject[0].id);
    }

    useEffect(() => {
        fetchLastBooking();
    }, [])

    const getCustomerBooking = async () =>{
        const reponse = await fetch(`${CUSTOMER_BOOKINGS_SERVER_URL}/${customer.id}`)
        const customerBooking = await reponse.json();
        setCustomerBooking(customerBooking);
    }
    const handleClick = (event)  => {
        navigateToWallet();
    }

    return ( <>
            {lastBookingObject ? <div>
            <h2>Restaurant: {lastBookingObject[0].restaurant.name}</h2>
            <h2>Location: {lastBookingObject[0].restaurant.location}</h2>
            <h2>Your booking id: {lastBookingObject[0].id}</h2>
            <h3>Please retain this id for when you arrive</h3>
            <button onClick={handleClick}> See all your bookings</button> </div>: null}  
    </> );
}

export default ConfirmationComponent;