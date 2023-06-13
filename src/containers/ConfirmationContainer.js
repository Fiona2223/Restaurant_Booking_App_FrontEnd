import { useEffect, useState } from "react";
import ConfirmationComponent from "../components/ConfirmationComponent";
import WalletComponent from "../components/WalletComponent";

const CUSTOMER_BOOKINGS_SERVER_URL = "http://localhost:8080/customer/1/bookings";

const ConfirmationContainer = () => {

    const [customerBookings, setCustomerBookings] = useState([]);
    const [customerBooking, setCustomerBooking] = useState({});
    
    const getCustomerBookings = async () =>{
        const reponse = await fetch(`${CUSTOMER_BOOKINGS_SERVER_URL}`,{
            method : "GET",
            headers:{"Content-Type": "application/json"}
        })
        const allCustomerBookings = await reponse.json();
        setCustomerBookings(allCustomerBookings);
    }

    const getCustomerBooking = async () =>{
        const reponse = await fetch(`${CUSTOMER_BOOKINGS_SERVER_URL}/${customerBooking.id}`)
        const customerBooking = await reponse.json();
        setCustomerBooking(customerBooking);
    }

    const customerBookingComponent = customerBookings.map((customerBooking) => 
        {
            return<ConfirmationComponent key = {customer.id} customer = {customerBookingComponent}/>
        })



    useEffect(()=>{}, [])

    return ( <>
            {customerBookingComponent}
            <ConfirmationComponent setCustomerBooking={setCustomerBooking} customerBooking={customerBooking}/>
            <WalletComponent/>
    

    </> );
}
 
export default ConfirmationContainer;