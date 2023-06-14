import { useEffect, useState } from "react";
const CUSTOMER_SERVER_URL = "http://localhost:8080/customer";

const PickTableComponent = ({allAvailableTables, restaurant}) => {

    const [listOfTablesToChooseFrom, setListOfTablesToChooseFrom] = useState([]);
    const [displayTableOptions, setDisplayTableOptions] = useState(false);
    const [counterNumberOfPeople, setCounterNumberOfPeople] = useState(null);
    const [tableSeatsCounter, setTableSeatsCounter] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [customersBooking, setCustomersBooking] = useState([]);
    const [stateBooking, setStateBooking] = useState({
        id: null,
        customerId: 1,
        customerName: "Yasmin",
        tableIds : [], //onSubmit: add the tableIds to this list
        restaurantId : restaurant.id,
        date: null, //"yyyy/mm/dd": this will be passed down from BookingFormComponent
        time: null, //"hh:mm:ss": this will be passed down from BookingFormComponent
        message: "Reservation Made!"
    })

    const fetchCustomerBookings = async() => {
      const response = await fetch(`${CUSTOMER_SERVER_URL}/1/bookings`)
      const jsonData = await response.json();
      setCustomersBooking(jsonData);
    }


    // this needs to be passed down to the PickTableComponent: so this needs to be done in the
    // react router to be passed down to PickTableComponent.

    const postBooking = async(booking) => {
      const response = await fetch("http://localhost:8080/bookings",{
          method: "POST",
          headers: {"Content-type" : "application/json"},
          body : JSON.stringify(booking)
      });
      const savedBooking = await response.json();
    //   setCustomersBooking([...customersBooking, savedBooking]);
    }

    // postBooking();


    

    useEffect(() => {
        console.log("hello world!");
        const tableButtons = allAvailableTables.map((table) => {
            // return <button key={table.id} onClick={() => {handleButtonClickedStateChange(table); setTableSeatsCounter((previousValue) => previousValue - table.numberOfSeats)}}>{table.numberOfSeats}</button>
            return <button key={table.id} onClick={ ()=>{handleButtonClickedStateChange(table)}}>{table.numberOfSeats}</button>
        })
        
        // if number of seats picked == size of party than make size appear 
        // if state of seats picked is >= display submit button until then disable it 
        // "you have [x] of people to seat"
        // create an array - handlebutton state click - store table object in an array state
        

        setListOfTablesToChooseFrom(tableButtons);
        fetchCustomerBookings();
    }, [allAvailableTables]);
    
    const handleButtonClickedStateChange = (table) =>{
        // setButtonClicked(true);
        // for(let i = 0; i < table.length; i++){
        //     const tablesNumberOfSeats = [i].numberOfSeats;
        // }
        setTableSeatsCounter(parseInt(tableSeatsCounter) + table.numberOfSeats);
        console.log(table);
    }

    useEffect(() => {
        // function: only allow the customer to book an appropriate table
        // take the numberOfPeople = num
        // then check total table.numberOfSeats (this will come from the table buttons clicked)
        // if numberOfPeople =/= table.numberOfSeats: let the total table.numberOfSeats = numberOfPeople + 1
        // if numberOfPeople == table.numberOfSeats: let customer book the table with same numberOfSeats as people
        // this is the table that they will be able to book 
        const tableChecker = () => {
            // wait for customer to start clicking
            // we CANNOT let counterNumberOfPeople > tableSeatsCounter 
            if(tableSeatsCounter > counterNumberOfPeople){
                console.log("no!");
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
        // setTableSeatsCounter(input.value);
    }

    const handleReservationModal = () => {
        console.log("reservation made");
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        postBooking(stateBooking);
    }
    return ( <>
            <h3>How many people?</h3>
            <form onSubmit={handleFormSubmit}>
                <input
                 type="number"
                 placeholder="Enter"
                 id="numberOfPeople"
                 />
            <button onClick={handleDisplayOptions}>Submit</button>
            {displayTableOptions ? <div> {listOfTablesToChooseFrom} <button onClick={handleReservationModal}>Submit Reservation</button> </div>: null}
            </form>

    </> );
}
 
export default PickTableComponent;