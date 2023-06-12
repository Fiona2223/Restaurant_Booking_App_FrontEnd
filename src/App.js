
import './App.css';
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
 

function App() {
  return (
    <>
      <RestaurantContainer/>
      <TimeAndDatePickedComponent/>
      <TableListComponent/>
      <TableComponent/>
      <RestaurantProfileComponent/>
      <PickTableComponent/>
      <CustomerComponent/>
      <ConfirmationComponent/>
      <BookingFormComponent/>
      <BookingComponent/>
      
    
    </>
  );
}

export default App;
