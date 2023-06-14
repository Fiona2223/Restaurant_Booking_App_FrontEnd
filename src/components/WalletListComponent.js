import WalletComponent from "./WalletComponent";
import {useLoaderData} from "react-router-dom";

const WalletList = ({customerBookings}) => {

    const walletComponent= customerBookings.map((booking) => {
        return <WalletComponent key = {booking.id} booking = {booking}/>
    })

    return (
        <>
        <div id="wallet-container">        
            <h1> Your Wallet</h1>
            {walletComponent}
        </div>
        </>

      );
}
 
export default WalletList;