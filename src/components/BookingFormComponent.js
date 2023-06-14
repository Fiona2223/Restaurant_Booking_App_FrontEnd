// import {TimePicker, DatePicker} from '@mui/x-date-pickers';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


import TableListComponent from "../components/TableListComponent";
import { useState, useEffect } from "react";
// import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import PickTableComponent from "./PickTableComponent";


const BookingFormComponent = ({restaurant}) => {

    const [tableList, setTableList] = useState([]);
    const [showAllTables , setShowAllTables] = useState(true);
    const [allAvailableTables, setAllAvailableTables] = useState([]);
    const [startDate,setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    const [showPickTableComponent, setShowPickTableComponent] = useState(false);
    

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

// tables with no booking ids should be displayed when clicking available_tables

    const creatingAlistOfAvailableTables = () => {
         const AvailableTables = tableList.filter(table => table.bookingIds.length === 0);
         setAllAvailableTables(AvailableTables);
    }
   
    useEffect(() => {
        fetchTablesByRestaurantId();      
      }, [])

      useEffect(() => {
        creatingAlistOfAvailableTables();
            
      }, [tableList])

    return ( <>
            <p>tables</p>
            <div>
                <button onClick={handleShowwAllTables}>All Tables</button>
                <button onClick={handleShowAvailableTables}>Available Tables</button>
            </div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
            <TimePicker onChange={onChange} value={value} />
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="Basic time picker" />
                <DatePicker label="Basic date picker" />
            </LocalizationProvider> */}
            {/* <div>
                <TableListComponent tableList={tableList} allAvailableTables={allAvailableTables} showAllTables={showAllTables}/>
            </div> */}
            <div>
                {showPickTableComponent ? <PickTableComponent allAvailableTables={allAvailableTables} restaurant={restaurant}/> :  <div>
                <TableListComponent tableList={tableList} allAvailableTables={allAvailableTables} showAllTables={showAllTables}/> <button onClick={handleMakeReservation}>Make Reservation</button></div> 
                }
            

            </div>
            
    </> );
}
 
export default BookingFormComponent;