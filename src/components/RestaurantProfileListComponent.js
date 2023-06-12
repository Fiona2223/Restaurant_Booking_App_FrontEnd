import RestaurantProfileComponent from "./RestaurantProfileComponent";

const RestaurantProfileListComponent = ({listOfRestaurants}) => {
    const profileList = listOfRestaurants.map((restaurant)=> {
        return <RestaurantProfileComponent key={restaurant.id} restaurant={restaurant} />
    }) 
    return ( <>
        {profileList}
     </> );
}
 
export default RestaurantProfileListComponent;