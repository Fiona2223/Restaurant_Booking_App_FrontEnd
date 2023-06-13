import { tab } from "@testing-library/user-event/dist/tab";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const CUSTOMER_BOOKINGS_SERVER_URL = "http://localhost:8080/customer/1/bookings";

const ConfirmationComponent = ({customer, setCustomerBooking, customerBooking}) => {

    const getCustomerBooking = async () =>{
        const reponse = await fetch(`${CUSTOMER_BOOKINGS_SERVER_URL}/${customer.id}`)
        const customerBooking = await reponse.json();
        setCustomerBooking(customerBooking);
    }

    return ( <>
            <h2>Hello ConfirmationComponent</h2>

            <Link  to ={`/customer/1/bookings/${customer.id}/`}>{customer.name}</Link>
            {/* // <p>Hi {customer.name} !</p>
            // <p>You have reserved tables {customer.tableIds}</p>
            // <p>You have booked {customer.restaurantId}</p> */}

            
            
    </> );
}
 
export default ConfirmationComponent;