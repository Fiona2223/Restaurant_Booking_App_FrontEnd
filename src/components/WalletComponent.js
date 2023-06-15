import { tab } from "@testing-library/user-event/dist/tab";
import { useState, useEffect } from "react";

const WalletComponent = ({customerBookings, booking}) => {

    const [showMore, setShowMore] = useState(false);
    // console.log(customerBookings);

    // const listOfTableIds = () =>{
    //     for(let i =0; i<booking.length; i++){
    //         return booking.listOfTables[i].id
    //     }
    // }


    const tableNumbersString = booking.listOfTables.reduce((reducer, table) => {
        return `${reducer} ${table.id}`
    }, "")


    // TO DO: change the format of booking.tableIds from array to string
    useEffect(() => {
        // listOfTableIds();
        console.log(booking);
        console.log(booking.listOfTables);
        console.log(booking.listOfTables[2].id);
    }, [booking])
    

    return (  
        <> 
        <div id="wallet-item" onMouseEnter={() => setShowMore(true)} onMouseLeave={() => setShowMore(false)}>

        <h2>{booking.restaurant.name}, {booking.customer.name}</h2>
        {showMore && (
        <ul id="extra-booking-info">
            <li> You have a reservation at {booking.restaurant.name} on {booking.date} at {booking.time}.</li>
            <li> The tables you have reserved are: {tableNumbersString}.</li>
            <li> Your booking ID is {booking.id}. Please present this upon arrival.</li>
        </ul>
        )}
        </div>
        </>
    );
}
 
export default WalletComponent;