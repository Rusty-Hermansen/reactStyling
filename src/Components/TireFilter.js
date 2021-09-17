

const TireFilter = (props)=>{
    const filterChangeHandler = (event)=>{
        props.OnChangeFilter(event.target.value);
    };

    return(
        <div>
            <h4>Filter by wheelsize</h4>
            <input type="text" onChange={filterChangeHandler}/>
        </div>
    )
}
export default TireFilter;