import TableListComponent from "../components/TableListComponent";
import PickTableComponent from "./PickTableComponent";

import { useState, useEffect } from "react";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

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
         const AvailableTables = tableList.filter(table => table.bookingIds.length === 0);
         setAllAvailableTables(AvailableTables);
    }
   
    useEffect(() => {
        fetchTablesByRestaurantId(); 
        const currentDate = new Date();     
        setSelectedDate(currentDate.toISOString().split('T')[0]);
        setSelectedTime(`${currentDate.getHours()}: ${currentDate.getMinutes()}`);
      }, [])

      useEffect(() => {
        creatingAlistOfAvailableTables();
            
      }, [tableList])

      const handleDateChange = (date) =>{
        const newDate = date.toISOString().split('T')[0];;
        setSelectedDate(newDate);
      }

      const handleTimeChange = (time) =>{
        const newTime = `${time.getHours()}: ${time.getMinutes()}`;
        setSelectedTime(newTime);
      }

    return ( <>
            <div>
                <button onClick={handleShowwAllTables}>All Tables</button>
                <button onClick={handleShowAvailableTables}>Available Tables</button>
            </div>
            <div>
                <div><DatePicker 
                        selected={startDate} 
                        onChange={(date) => {handleDateChange(date) ; setStartDate(date)}}
                        /></div>
                <div><DatePicker 
                        selected={startDate} 
                        onChange={(date) => {handleTimeChange(date) ; setStartDate(date)}}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        /></div>
             </div>
            <div>
                {showPickTableComponent ? <PickTableComponent allAvailableTables={allAvailableTables} restaurant={restaurant} selectedDate={selectedDate} selectedTime={selectedTime}/> :  <div>
                <TableListComponent tableList={tableList} allAvailableTables={allAvailableTables} showAllTables={showAllTables}/> <button onClick={handleMakeReservation}>Make Reservation</button></div>}
            </div>
            
    </> );
}
 
export default BookingFormComponent;