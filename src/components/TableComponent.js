const TableComponent = ({table, availableTable, showAllTables}) => {
    return ( <>
            <h2>{ showAllTables ?table.numberOfSeats : availableTable.numberOfSeats}</h2>


    </> );
}
 
export default TableComponent;