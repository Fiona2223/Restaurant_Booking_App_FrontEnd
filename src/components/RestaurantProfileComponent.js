import { useEffect } from "react";


const RestaurantProfileComponent = ({restaurant}) => {

    useEffect (()=>{


    }
     ,[restaurant])




    return ( <>
            <h2> {restaurant.name}</h2>
            <p> {restaurant.location}</p>
    </> );
}
 
export default RestaurantProfileComponent;