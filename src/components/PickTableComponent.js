import { useState } from "react";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";


const PickTableComponent = ({allAvailableTables}) => {

    const listOfTablesToChooseFrom = allAvailableTables.map((table) => {
        return <button>{table.id}</button>
    })

    const [isOpen, setIsOpen] = useState(false);
    let navigate = useNavigate();


    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
      navigate("/")
    };

    const handleMakeAnotherReservation = () => {
        navigate("/");
    };

    const handleViewBookingDetails = () => {
        navigate("/confirmation")
    }
  
    const handleSubmitReservation = () => {
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
            <div>
      <button onClick={handleSubmitReservation}>Submit Reservation</button>
      <Modal id="modal" isOpen={isOpen} onRequestClose={handleCloseModal}>
        <h2>Reservation Successful!</h2>
        <p>Your reservation has been confirmed.</p>
        <div><button id="close-modal-btn" onClick={handleCloseModal}>X</button></div>
        <button id="view-booking-btn" onClick={handleViewBookingDetails}>View Booking Details</button>
        <button id="make-another-btn" onClick={handleMakeAnotherReservation}>Make Another Reservation</button>
      </Modal>
    </div>
      
            {listOfTablesToChooseFrom}
    </> );
}
 
export default PickTableComponent;