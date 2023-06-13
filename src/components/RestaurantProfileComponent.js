import { useEffect } from "react";
import { Link } from "react-router-dom";


const RestaurantProfileComponent = ({restaurant}) => {

    useEffect (()=>{


    }
     ,[restaurant])


    return ( <>

            <Link to={`/restaurants/${restaurant.id}`} > {restaurant.name}</Link>
            <p> {restaurant.location}</p>
      
    </> );
}
 
export default RestaurantProfileComponent;