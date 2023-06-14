import { useState } from "react";
import Modal from 'react-modal';


const PickTableComponent = ({allAvailableTables}) => {

    const listOfTablesToChooseFrom = allAvailableTables.map((table) => {
        return <button>{table.id}</button>
    })

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };
  
    const handleMakeAnotherReservation = () => {
      // Logic for handling "Make Another Reservation" button click
    };
  
    const handleSubmitReservation = () => {
      // Logic for handling "Submit Reservation" button click
      handleOpenModal();
    };
    
      
      

    return ( <>
            <h3>How many people?</h3>
            <form>
                <input
                 type="number"
                 placeholder="Enter"
                 />
            </form>
            {/* <button>Submit Reservation</button> */}
            <div>
      <button onClick={handleSubmitReservation}>Submit Reservation</button>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
        <h2>Reservation Successful!</h2>
        <p>Your reservation has been confirmed.</p>
        <button onClick={handleCloseModal}>OK</button>
        <button onClick={handleMakeAnotherReservation}>Make Another Reservation</button>
      </Modal>
    </div>
      
            {listOfTablesToChooseFrom}
    </> );
}
 
export default PickTableComponent;