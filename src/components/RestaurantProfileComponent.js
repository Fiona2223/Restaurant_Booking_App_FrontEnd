import { useEffect } from "react";
import { Link } from "react-router-dom";


const RestaurantProfileComponent = ({restaurant}) => {

    useEffect (()=>{


    }
     ,[restaurant])


    return ( <>
            <>
        <div id="restaurant-profile">
            <div id="more-info-container">
                <Link to={`/restaurants/${restaurant.id}`} id="restaurant-name-location">
                {restaurant.name}, {restaurant.location}
                </Link>
                <button id="moreRestaurantInfo"> {"^"} </button>
            </div>
        </div>    
  </>

      
    </> );
}
 
export default RestaurantProfileComponent;