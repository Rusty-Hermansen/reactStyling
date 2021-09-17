import { useState } from "react";
import "./TireForm.css";

const TireForm = ({tire, editing, onSaveTireData}) => {
    const [enteredTire, setEnteredTire] = useState(tire);
    

    const urlChangeHandler = (event) => {
        setEnteredTire({...enteredTire, url: event.target.value});
    }
    const brandChangeHandler = (event) => {
        setEnteredTire({...enteredTire, brand: event.target.value});
    }
    const modelChangeHandler = (event) => {
        setEnteredTire({...enteredTire, model: event.target.value});
    }
    const treadWidthChangeHandler = (event) => {
        setEnteredTire({...enteredTire, treadWidth: event.target.value});
    }
    const sidewallChangeHandler = (event) => {
        setEnteredTire({...enteredTire, sidewall: event.target.value});
    }
    const wheelSizeChangeHandler = (event) => {
        setEnteredTire({...enteredTire, wheelSize: event.target.value});
    }

    const submitHandler = (event) => {
        event.preventDefault();
        onSaveTireData(enteredTire);
    }

    return(
        <div className="form">
            <form onSubmit={submitHandler} action="#">
            <div>
                <label style={{color: !editing ? 'red': 'blue'}}>Picture URL</label>
                <input type="text" value={enteredTire.url} onChange={urlChangeHandler}/>
            </div>
            <div>
                <label>Brand</label>
                <input type="text" value={enteredTire.brand} onChange={brandChangeHandler}/>
            </div>
            <div>
                <label>Model</label>
                <input type="text" value={enteredTire.model} onChange={modelChangeHandler}/>
            </div>
            <div>
                <label>Treadwidth</label>
                <input type="text" value={enteredTire.treadWidth} onChange={treadWidthChangeHandler}/>
            </div>
            <div>
                <label>Sidewall</label>
                <input type="text" value={enteredTire.sidewall} onChange={sidewallChangeHandler}/>
            </div>
            <div>
                <label>Wheel Size </label>
                <input type="text" value={enteredTire.wheelSize} onChange={wheelSizeChangeHandler}/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        </div>
        
    )
}
export default TireForm;