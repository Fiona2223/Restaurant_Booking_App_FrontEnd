const RestaurantProfileComponent = ({restaurant}) => {
    return ( <>
            <h2> {restaurant.name}</h2>
            <p> {restaurant.location}</p>
    </> );
}
 
export default RestaurantProfileComponent;