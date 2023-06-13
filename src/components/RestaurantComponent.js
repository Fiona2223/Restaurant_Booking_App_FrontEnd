import { useLoaderData } from "react-router-dom";

const RestaurantComponent = ({}) => {

    const restaurant = useLoaderData();

    return ( <>
            <h3> Hello Component </h3>
            <p>{restaurant.name}</p>
            
    </> );
}
 
export default RestaurantComponent;