import { tab } from "@testing-library/user-event/dist/tab";
import { useState, useEffect } from "react";
import TableComponent from "../components/TableComponent";
import "../Booking.css";


const TableListComponent = ({restaurant, tableList, allAvailableTables, showAllTables}) => {

    const listOfTables = tableList.map((table) => {
        return <TableComponent className="allTable" table={table} key={table.id} showAllTables={showAllTables}/>
    })

    const listOfAvailableTables = allAvailableTables.map((availableTable) => {
        return <TableComponent id="availableTable" availableTable={availableTable} key={availableTable.id} showAllTables={showAllTables}/>
    })

    return ( 
    <>
        <div className="TablesContainer">
            {showAllTables ? listOfTables : listOfAvailableTables}
        </div>
    </> );
}
 
export default TableListComponent;