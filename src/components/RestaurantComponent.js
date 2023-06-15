import { useLoaderData, Link } from "react-router-dom";
import BookingFormComponent from "./BookingFormComponent";

const RestaurantComponent = ({}) => {

    const restaurant = useLoaderData();

    return ( <>
            <div>
                <Link to="/">&#10094;Back</Link>
                <h2>{restaurant.name}</h2>
            </div>
            <BookingFormComponent restaurant={restaurant}/>
            
    </> );
}
 
export default RestaurantComponent;