import { useEffect } from "react";
import { Link } from "react-router-dom";


const RestaurantProfileComponent = ({restaurant}) => {

    useEffect (()=>{


    }
     ,[restaurant])


    return ( <>
            <div id="restaurant-profile">
            <Link to={`/restaurants/${restaurant.id}`} > {restaurant.name}, {restaurant.location}</Link>
            {/* /* adding tiktok video recommendations/} */}
            </div>    
      
    </> );
}
 
export default RestaurantProfileComponent;