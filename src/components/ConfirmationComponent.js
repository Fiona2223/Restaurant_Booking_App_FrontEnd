import { tab } from "@testing-library/user-event/dist/tab";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CUSTOMER_BOOKINGS_SERVER_URL = "http://localhost:8080/customer/1/bookings";

const ConfirmationComponent = ({customer, setCustomerBooking, customerBooking}) => {

    const [displayButton, setDisplayButton] = useState(false);
    
    let navigate = useNavigate()
    const navigateToWallet = () => {
        let path = `/wallet`;
        navigate(path);
        setDisplayButton(true);   
        // navigate to another react router 
    }

    const getCustomerBooking = async () =>{
        const reponse = await fetch(`${CUSTOMER_BOOKINGS_SERVER_URL}/${customer.id}`)
        const customerBooking = await reponse.json();
        setCustomerBooking(customerBooking);
    }
    const handleClick = (event)  => {
        navigateToWallet();

    }

    return ( <>
            <h2>Hello ConfirmationComponent</h2>

            <button onClick={handleClick}> See all your bookings</button>    
    </> );
}
 
export default ConfirmationComponent;