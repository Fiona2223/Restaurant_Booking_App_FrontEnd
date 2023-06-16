import { useState, useEffect } from "react";

const WalletComponent = ({ booking }) => {
  const [showMore, setShowMore] = useState(false);

  const tableNumbersString = booking.listOfTables.reduce((reducer, table) => {
    return `${reducer} ${table.id}`;
  }, "");


  return (
    <>
      <div
        id="wallet-item"
        onMouseEnter={() => setShowMore(true)}
        onMouseLeave={() => setShowMore(false)}
      >
        <h2>
          {booking.restaurant.name}, {booking.customer.name}
        </h2>
        {showMore && (
          <ul id="extra-booking-info">
            <li>
              {" "}
              You have a reservation at {booking.restaurant.name} on{" "}
              {booking.date} at {booking.time}.
            </li>
            <li> The tables you have reserved are: {tableNumbersString}.</li>
            <li>
              {" "}
              Your booking ID is {booking.id}. Please present this upon arrival.
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default WalletComponent;
