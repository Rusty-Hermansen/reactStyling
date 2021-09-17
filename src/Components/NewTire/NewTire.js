import TireForm from "./TireForm";

const NewTire = (props) => {
    const saveTireDataHandler = (enteredTireData) => {
        
        props.onAddTire(enteredTireData);
    };
    return(
        <div>
            <TireForm  editing={props.editing} tire= {props.tire} onSaveTireData={saveTireDataHandler}/>
        </div>
    )
}
export default NewTire;