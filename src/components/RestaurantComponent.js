import { useState } from "react";

const RestaurantComponent = ({restaurant}) => {
// const [currentRestaurant, setCurrentRestaurant] = useState({});
// export const restaurantLoader = async() => {
//     const response = await fetch 
// }
    return ( <>
            <h3> Hello Component </h3>
            <h2>{restaurant.id}</h2>

    </> );
}
 
export default RestaurantComponent;