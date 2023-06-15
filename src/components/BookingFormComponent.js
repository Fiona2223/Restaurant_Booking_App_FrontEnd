import TableListComponent from "../components/TableListComponent";

import { useState, useEffect } from "react";

import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import PickTableComponent from "./PickTableComponent";
import "react-datepicker/dist/react-datepicker.css";
import "../Booking.css";

const BookingFormComponent = ({restaurant}) => {

    const [tableList, setTableList] = useState([]);
    const [showAllTables , setShowAllTables] = useState(true);
    const [allAvailableTables, setAllAvailableTables] = useState([]);
    const [showPickTableComponent, setShowPickTableComponent] = useState(false);

    // this state stored the time and the date
    const [startDate,setStartDate] = useState(new Date());

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    

    const fetchTablesByRestaurantId = async () => {
        const response = await fetch(`http://localhost:8080/tables/restaurant/${restaurant.id}`);
        const data = await response.json();
        setTableList(data);
    }

    const handleShowAvailableTables = (event) => {
        setShowAllTables(false);
    }

    const handleShowwAllTables = (event) => {
        setShowAllTables(true);   
    }

    const handleMakeReservation = (event) => {
        setShowPickTableComponent(true);
    }

    const creatingAlistOfAvailableTables = () => {
         const AvailableTables = tableList.filter(table => table.listOfBookings.length === 0);
         setAllAvailableTables(AvailableTables);
    }
   
    useEffect(() => {
        fetchTablesByRestaurantId(); 
        const currentDate = new Date();     
        setSelectedDate(currentDate.toISOString().split('T')[0]);
        setSelectedTime(currentDate.toISOString().split('T')[1].split('.')[0]);
      }, [])

      useEffect(() => {
        creatingAlistOfAvailableTables();
            
      }, [tableList])

      const handleDateChange = (date) =>{
        const newDate = date;
        setSelectedDate(newDate.toISOString().split('T')[0]);
      }

      const handleTimeChange = (time) =>{
        const newTime = time;
        setSelectedTime(newTime.toISOString().split('T')[1].split('.')[0]);
      }

    return ( <>


                <div className="Container">
                <h2 className="title">{restaurant.name}</h2>
                <div>
                <button onClick={handleShowwAllTables} className="AllTablesButton">All Tables</button>
                <button onClick={handleShowAvailableTables}className="AvailableTableButtons">Available Tables</button>
                </div >
                    <div>
                        <div className="DayPicker"><DatePicker 
                        selected={startDate} 
                        onChange={(date) => {handleDateChange(date) ; setStartDate(date)}}
                        /></div>
                        <div className="TimePicker"><DatePicker 
                        selected={startDate} 
                        onChange={(date) => {handleTimeChange(date) ; setStartDate(date)}}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        /></div>
                    </div>
                    </div>
                <div>
                {showPickTableComponent ? <PickTableComponent allAvailableTables={allAvailableTables} restaurant={restaurant} selectedDate={selectedDate} selectedTime={selectedTime}/> :  <div>
                <TableListComponent tableList={tableList} allAvailableTables={allAvailableTables} showAllTables={showAllTables}/> <button onClick={handleMakeReservation} className="ReservationButton">Make Reservation</button></div>}
                </div>

            
    </> );
}
 
export default BookingFormComponent;