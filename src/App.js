
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CustomerComponent from './components/CustomerComponent';
import RestaurantContainer from './containers/RestaurantContainer';
import RestaurantComponent from './components/RestaurantComponent';
import MapComponent from './components/MapComponent';
import WalletContainer from './containers/WalletContainer';
import ConfirmationContainer from './containers/ConfirmationContainer';
import NavBar from './components/NavBar';


const SERVER_URL = "http://localhost:8080";
const router = createBrowserRouter([
  {
    path:"/",
    element: (
      <RestaurantContainer/>
    ),
  }, 
    {
      path:"restaurants/:restaurantId", 
      loader: async({params}) => {
        const response = await fetch(`${SERVER_URL}/restaurants/${params.restaurantId}`);
        const data = await response.json();
        return data;
      },
      element: (
        <RestaurantComponent/>
      ),
    },

    {
      path:"bookings",
      element: (
        <CustomerComponent/>
      ),
    },
    {
      path:"confirmation",
      loader: async() => {
        const response = await fetch("http://localhost:8080/customer");
        const data = await response.json();
        return data[0];
      },
      element: (
        <ConfirmationContainer/>
      ),
    },
    {
      path: "wallet",
      element: (
        <WalletContainer/>
      )
    },

    {
      path: "map",
      element: (
        <MapComponent/>
      ),
    },





  ]);
 

function App() {
  return (
    <>
  
      <RouterProvider router={router}/>
    
      
    
    </>
  );
}

export default App;
