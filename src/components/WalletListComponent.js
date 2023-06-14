import WalletComponent from "./WalletComponent";
import {useLoaderData} from "react-router-dom";

const WalletList = ({customerBookings}) => {

    const walletComponent= customerBookings.map((booking) => {
        return <WalletComponent key = {booking.id} booking = {booking}/>
    })

    return (
        <>
        {walletComponent}
        </>

      );
}
 
export default WalletList;