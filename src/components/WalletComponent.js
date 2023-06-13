const WalletComponent = ({customerBookings, booking}) => {
    // console.log(customerBookings);
    return (  
        <>  
        <ul>
            <li> You have a reservation at {booking.restaurantName} on {booking.date} at {booking.time}</li>
            <li> The tables you have reserved are {booking.tablesIds}.</li>
            <li>Your booking ID is {booking.id}. Please present this upon arrival.</li>
        </ul>
        </>
    );
}
 
export default WalletComponent;