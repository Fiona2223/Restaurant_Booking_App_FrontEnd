import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const RestaurantProfileComponent = ({restaurant}) => {
    const [moreInfoButtonClicked, setMoreInfoButtonClicked] = useState(false);
    
    const [person, setPerson] = useState(null); // null - more predictable than moulding container around data
    
    
    const fetchPerson = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const jsonData = await response.json()
        setPerson(jsonData)
    }

    useEffect(() =>{
        fetchPerson();
    }, []) 

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
                    (  <>
                        <div id="review">
                         {/* style="background-image: {dog.message}"  */}
                        <p>{restaurant.review} {fetchPerson}</p>
                        <img id="person" src={person.message} alt="person" />
                        </div>
                        </>
                    )}
                <button id="moreRestaurantInfo" onClick={handleClick}> {">"} </button>
            </div>
        </div>    
  </>

      
 );
}
 
export default RestaurantProfileComponent;