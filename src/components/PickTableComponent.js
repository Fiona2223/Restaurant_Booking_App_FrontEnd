import { useEffect, useState } from "react";

const PickTableComponent = ({allAvailableTables, restaurant}) => {

    const [listOfTablesToChooseFrom, setListOfTablesToChooseFrom] = useState([]);
    const [displayTableOptions, setDisplayTableOptions] = useState(false);
    const [counterNumberOfPeople, setCounterNumberOfPeople] = useState(null);
    const [tableSeatsCounter, setTableSeatsCounter] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(false);

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



    const handleButtonClickedStateChange = () =>{
        setButtonClicked(true);
    }

    useEffect(() => {
        console.log("hello world!");
        const tableButtons = allAvailableTables.map((table) => {
            return <button key={table.id} onClick={() => {handleButtonClickedStateChange(); setTableSeatsCounter((previousValue) => previousValue + table.numberOfSeats)}}>{table.numberOfSeats}</button>
        })
        
        setListOfTablesToChooseFrom(tableButtons);
        
    }, [allAvailableTables]);
    

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
    }

    const handleReservationModal = () => {
        console.log("reservation made");
    }

    // onSubmit={handleMakeNewBooking}

    return ( <>
            <h3>How many people?</h3>
            <form >
                <input
                 type="number"
                 placeholder="Enter"
                 id="numberOfPeople"
                 />
            <button onClick={handleDisplayOptions}>Submit</button>
            </form>
            {displayTableOptions ? <div> {listOfTablesToChooseFrom} <button onClick={handleReservationModal}>Submit Reservation</button> </div>: null}

    </> );
}
 
export default PickTableComponent;