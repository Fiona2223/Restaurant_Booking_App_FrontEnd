import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const RestaurantProfileComponent = ({restaurant}) => {
    const [moreInfoButtonClicked, setMoreInfoButtonClicked] = useState(false);
    useEffect (()=>{


    }
     ,[restaurant])

    const handleClick = (event) => {
        setMoreInfoButtonClicked(!moreInfoButtonClicked);
    }

    return ( <>
            
        <div id="restaurant-profile">
            <div id="more-info-container">
                {!moreInfoButtonClicked ?
                    (<Link to={`/restaurants/${restaurant.id}`} id="restaurant-name-location">
                    {restaurant.name}, {restaurant.location}
                    </Link>
                    ) : 
                    ( <p>More info...</p>
                    )}
                <button id="moreRestaurantInfo" onClick={handleClick}> {">"} </button>
            </div>
        </div>    
  </>

      
 );
}
 
export default RestaurantProfileComponent;