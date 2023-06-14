
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookingComponent from './components/BookingComponent';
import BookingFormComponent from './components/BookingFormComponent';
import ConfirmationComponent from './components/ConfirmationComponent';
import CustomerComponent from './components/CustomerComponent';
import RestaurantProfileComponent from './components/RestaurantProfileComponent';
import TableComponent from './components/TableComponent';
import PickTableComponent from './components/TableComponent';
import TableListComponent from './components/TableListComponent';
import TimeAndDatePickedComponent from './components/TimeAndDatePickedComponent';
import RestaurantContainer from './containers/RestaurantContainer';
import RestaurantComponent from './components/RestaurantComponent';

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
      path:"confirmation",
      element: (
        <ConfirmationComponent/>
      ),
    },

    {
      path: "customer",
      element: (
        <CustomerComponent/>
      ),
    },





  ]);
 

function App() {
  return (
    <>
      {/* <RestaurantContainer/> */}
      {/* <TimeAndDatePickedComponent/>
      <TableListComponent/>
      <TableComponent/>
      <RestaurantProfileComponent/>
      <PickTableComponent/>
      <CustomerComponent/>
      <ConfirmationComponent/>
      <BookingFormComponent/>
      <BookingComponent/> */}
      <RouterProvider router={router}/>
      
    
    </>
  );
}

export default App;
