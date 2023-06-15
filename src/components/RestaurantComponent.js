import { useLoaderData, Link } from "react-router-dom";
import BookingFormComponent from "./BookingFormComponent";
import "../Booking.css";

const RestaurantComponent = ({}) => {

    const restaurant = useLoaderData();

    return ( <>
            <div>
                <Link to="/">&#10094;Back</Link>
            </div>
            <BookingFormComponent restaurant={restaurant}/>
            
    </> );
}
 
export default RestaurantComponent;