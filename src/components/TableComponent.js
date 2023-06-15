import "../Booking.css";


const TableComponent = ({table, availableTable, showAllTables}) => {
    return ( 
    <>
        <div className="Tables">
            <h2>{ showAllTables ?table.numberOfSeats : availableTable.numberOfSeats}</h2>
            <div className="table-leg-right"></div>
            <div className="table-leg-left"></div>
            <div className="table-leg-right2"></div> 
            <div className="table-leg-left2"></div>
            <div className="table-cloth"></div>
            


        </div>
    </> );
}
 
export default TableComponent;