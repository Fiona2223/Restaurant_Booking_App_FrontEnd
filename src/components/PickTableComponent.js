import { useEffect, useState } from "react";
const SERVER_URL = "http://localhost:8080/bookings";

const PickTableComponent = ({allAvailableTables, restaurant, selectedDate, selectedTime}) => {

    const [listOfTablesToChooseFrom, setListOfTablesToChooseFrom] = useState([]);
    const [displayTableOptions, setDisplayTableOptions] = useState(false);
    const [counterNumberOfPeople, setCounterNumberOfPeople] = useState(0);
    const [tableSeatsCounter, setTableSeatsCounter] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [customersBooking, setCustomersBooking] = useState([]);
    const [showRestartButton, setShowRestartButton] = useState(false);
    const [listOfChosenTables, setListOfChosenTables] = useState([]);

    const [stateBooking, setStateBooking] = useState({
        // id: null,
        customerId: 1,
        customerName: "Yasmin",
        tableIds : [], //onSubmit: add the tableIds to this list
        restaurantId : restaurant.id,
        date: selectedDate, //"yyyy/mm/dd": this will be passed down from BookingFormComponent
        time: selectedTime, //"hh:mm:ss": this will be passed down from BookingFormComponent
        message: "Reservation Made!"
    })


    const fetchCustomerBookings = async() => {
      const response = await fetch(`${SERVER_URL}`)
      const jsonData = await response.json();
      setCustomersBooking(jsonData);
    }

    const postBooking = async(booking) => {
        console.log(booking);
      const response = await fetch("http://localhost:8080/bookings",{
          method: "POST",
          headers: {"Content-type" : "application/json"},
          body : JSON.stringify(booking)
      });
      const savedBooking = await response.json();
      setCustomersBooking([...customersBooking, savedBooking]);
    }

    useEffect(() => {
        // const tableButtons = allAvailableTables.map((table) => {
        //     return <button key={table.id} onClick={() => {handleIncrementTableSeatsCounter(table); setTableSeatsCounter((previousValue) => previousValue + table.numberOfSeats)}}>{table.numberOfSeats}</button>
        // })

        const tableButtons = allAvailableTables
        .sort()
        .map((table) => {
            return <button key={table.numberOfSeats} onClick={() => {handleIncrementTableSeatsCounter(table); setTableSeatsCounter((previousValue) => previousValue + table.numberOfSeats)}}>{table.numberOfSeats}</button>
        })

        setListOfTablesToChooseFrom(tableButtons);
        fetchCustomerBookings();
    }, [allAvailableTables]);
    
    const handleIncrementTableSeatsCounter = (table) =>{
        setShowRestartButton(true);
        listOfChosenTables.push(table.id);
        setListOfChosenTables(listOfChosenTables);
    }

    useEffect(() => {
        // const lastId = customersBooking.length;
        // const newBookingId = parseInt(lastId) + 1;
        let copiedStateBooking = {...stateBooking};
        // copiedStateBooking.id = newBookingId;
        copiedStateBooking.tableIds = listOfChosenTables;
        setStateBooking(copiedStateBooking);
    }, [listOfChosenTables])


    useEffect(() => {
        const tableChecker = () => {
            if((tableSeatsCounter >= parseInt(counterNumberOfPeople)) && (tableSeatsCounter !== 0)){
                setButtonClicked(true);
            }
        }
        tableChecker();

    }, [counterNumberOfPeople, tableSeatsCounter])
    

    const handleDisplayOptions = () => {
        const input = document.getElementById("numberOfPeople");
        if(input.value >= 1){
            setDisplayTableOptions(true);
        } else {
           return alert("Enter the number of people you would like to book for!");
        }
        setCounterNumberOfPeople(input.value);
    }

    //TO-DO: connect the modal:
    const handleReservationModal = () => {
        console.log("reservation made");
        postBooking(stateBooking);
    }

    // get the table id of the table being clicked and add it to the newBooking object when submit reservation has been clicked
    // so this needs to be in the handleFormSubmit function??
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
    }

    const handleRestartBooking = () => {
        console.log("restart booking");
        window.location.reload();
        // maybe re-render the PickTableComponent, instead of re-loading the whole page
    }

    return ( <>
            <h3>How many people?</h3>
            <form onSubmit={handleFormSubmit}>
                <input
                 type="number"
                 placeholder="Enter"
                 id="numberOfPeople"
                 />
            <button onClick={handleDisplayOptions}>Enter</button>
            {displayTableOptions ? <div> {listOfTablesToChooseFrom} </div>: null}
            {showRestartButton ? <button onClick={handleRestartBooking}>Restart Booking</button> : null}
            {buttonClicked ? <button onClick={handleReservationModal}>Submit Reservation</button> : null}
            </form>

    </> );
}
 
export default PickTableComponent;