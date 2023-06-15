import {useEffect, useState} from "react";
import WalletList from "../components/WalletListComponent";
const CUSTOMER_BOOKINGS_SERVER_URL = "http://localhost:8080/customer/1/bookings";

const WalletContainer = () => {

    const [customerBookings, setCustomerBookings] = useState([]);
    
    const getCustomerBookings = async () =>{
        const response = await fetch(`${CUSTOMER_BOOKINGS_SERVER_URL}`);
        const allCustomerBookings = await response.json();
        setCustomerBookings(allCustomerBookings);
    }

    useEffect(()=>{
        getCustomerBookings();
    }, [])

    return (
        <>
            <WalletList customerBookings = {customerBookings}/>
        </>
      );
}
 
export default WalletContainer;