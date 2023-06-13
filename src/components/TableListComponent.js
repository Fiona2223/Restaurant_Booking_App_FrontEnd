import { tab } from "@testing-library/user-event/dist/tab";
import { useState, useEffect } from "react";
import TableComponent from "../components/TableComponent";


const TableListComponent = ({restaurant, tableList, allAvailableTables, showAllTables}) => {

    const listOfTables = tableList.map((table) => {
        return <TableComponent table={table} key={table.id} showAllTables={showAllTables}/>
    })

    const listOfAvailableTables = allAvailableTables.map((availableTable) => {
        return <TableComponent availableTable={availableTable} key={availableTable.id} showAllTables={showAllTables}/>
    })

    return ( <>
            {showAllTables ? listOfTables : listOfAvailableTables}
    </> );
}
 
export default TableListComponent;