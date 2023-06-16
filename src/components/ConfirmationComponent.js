import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Confirmation.css"

const CUSTOMER_BOOKINGS_SERVER_URL =
  "http://localhost:8080/customer/1/bookings";

const ConfirmationComponent = () => {
  const [displayButton, setDisplayButton] = useState(false);
  const [lastBookingObject, setLastBookingObject] = useState(null);

  let navigate = useNavigate();
  const navigateToWallet = () => {
    let path = `/wallet`;
    navigate(path);
    setDisplayButton(true);
  };

  const fetchLastBooking = async () => {
    const response = await fetch(`${CUSTOMER_BOOKINGS_SERVER_URL}`);
    const jsonData = await response.json();

    const lastBooking = jsonData.splice(-1);
    setLastBookingObject(lastBooking);
  };

  useEffect(() => {
    fetchLastBooking();
  }, []);

  const handleClick = (event) => {
    navigateToWallet();
  };

  return (
    <>
      {lastBookingObject ? (
        <div className="confirmation-component">
          <h2 className="confirmation-heading">
            Restaurant: {lastBookingObject[0].restaurant.name}
          </h2>
          <h2 className="confirmation-details">
            Location: {lastBookingObject[0].restaurant.location}
          </h2>
          <h2 className="confirmation-details">
            Your booking id: {lastBookingObject[0].id}
          </h2>
          <h3 className="confirmation-details">
            Please retain this id for when you arrive
          </h3>
          <Link to="/" className="confirmation-link">
            Go to homepage
          </Link>
          {/* {displayButton && ( */}
            <button
              className="confirmation-button"
              onClick={handleClick}
>
              See all your bookings
            </button>
          {/* )} */}
        </div>
      ) : null}
    </>
  );
};

export default ConfirmationComponent;
