import { useLoaderData } from "react-router-dom";
import BookingFormComponent from "./BookingFormComponent";

const RestaurantComponent = ({}) => {

    const restaurant = useLoaderData();

    return ( <>
            <h2>{restaurant.name}</h2>
            <BookingFormComponent restaurant={restaurant}/>
            
    </> );
}
 
export default RestaurantComponent;