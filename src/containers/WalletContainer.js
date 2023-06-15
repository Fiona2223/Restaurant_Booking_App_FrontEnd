import {useEffect, useState} from "react";
import WalletList from "../components/WalletListComponent";
import {Link} from "react-router-dom"
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
            <Link to="/">Go to homepage</Link>
            <div id="wallet-container">
            <WalletList customerBookings = {customerBookings}/>                
            </div>
        </>
      );
}
 
export default WalletContainer;