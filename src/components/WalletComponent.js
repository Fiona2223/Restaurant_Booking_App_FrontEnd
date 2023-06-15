import { useState, useEffect } from "react";

const WalletComponent = ({customerBookings, booking}) => {

    const [showMore, setShowMore] = useState(false);
    // console.log(customerBookings);

    // TO DO: change the format of booking.tableIds from array to string

    return (  
        <> 
        <div id="wallet-item" onMouseEnter={() => setShowMore(true)} onMouseLeave={() => setShowMore(false)}>

        <h2>{booking.restaurantName}, {booking.customerName}</h2>
        {showMore && (
        <ul id="extra-booking-info">
            <li> You have a reservation at {booking.restaurantName} on {booking.date} at {booking.time}.</li>
            <li> The tables you have reserved are {booking.tablesIds}.</li>
            <li> Your booking ID is {booking.id}. Please present this upon arrival.</li>
        </ul>
        )}
        </div>
        </>
    );
}
 
export default WalletComponent;