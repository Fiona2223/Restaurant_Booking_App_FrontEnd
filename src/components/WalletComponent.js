const WalletComponent = ({customerBookings, booking}) => {
    // console.log(customerBookings);
    return (  
        <>
            <p>{booking.customerName}, {booking.id}</p>
        </>
    );
}
 
export default WalletComponent;