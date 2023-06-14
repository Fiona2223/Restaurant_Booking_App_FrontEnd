const PickTableComponent = ({allAvailableTables}) => {

    const listOfTablesToChooseFrom = allAvailableTables.map((table) => {
        return <button>{table.numberOfSeats}</button>
    })


    return ( <>
            <h3>How many people?</h3>
            <form>
                <input
                 type="number"
                 placeholder="Enter"
                 />
            </form>
            <button>Submit</button>
            {listOfTablesToChooseFrom}
    </> );
}
 
export default PickTableComponent;