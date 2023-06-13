import { useEffect, useState } from "react";
import ConfirmationComponent from "../components/ConfirmationComponent";
import WalletComponent from "../components/WalletComponent";

const CUSTOMER_BOOKINGS_SERVER_URL = "http://localhost:8080/customer/1/bookings";

const ConfirmationContainer = () => {
    //  const walletComponent= customerBookings.map((booking) => {
    //         return <WalletComponent key = {booking.id} booking = {booking}/>
    //     })

    return ( <>
            <ConfirmationComponent/>
    </> );
}
 
export default ConfirmationContainer;