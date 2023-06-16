import { useEffect, useState } from "react";
import ConfirmationComponent from "../components/ConfirmationComponent";
import WalletComponent from "../components/WalletComponent";
import { useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";

const CUSTOMER_BOOKINGS_SERVER_URL = "http://localhost:8080/customer/1/bookings";

const ConfirmationContainer = () => {

    const currentCustomer = useLoaderData();
    //  const walletComponent= customerBookings.map((booking) => {
    //         return <WalletComponent key = {booking.id} booking = {booking}/>
    //     })

    return ( <>
            <ConfirmationComponent currentCustomer={currentCustomer}/>
            {/* <NavBar/> */}
    </> );
}
 
export default ConfirmationContainer;