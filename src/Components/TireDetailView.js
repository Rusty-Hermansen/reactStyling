import React, {useState} from 'react'
const TireDetailView = ({tire, editTire, removeTire, onChangeHandler})=>{
    const [cart, setCart] = useState(false);
    const cartHandler = (event) =>{
        setCart(!cart);
    }
    return(
        <div className={onChangeHandler} style={{backgroundColor: cart ? 'lightgreen' : 'lightblue'}}>
        <p>{tire.brand}</p>
        <p>{tire.model}</p>
        <p>{tire.treadWidth}</p>
        <p>{tire.sidewall}</p>
        <p>{tire.wheelSize}</p>
        <button onClick={()=>{removeTire(tire.id)}}>Remove Tire</button>
        <button onClick={()=>{editTire(tire.id)}}>Edit Tire</button>
        <button onClick={cartHandler}>Add to cart</button>
        {cart ? <p>Tire is in cart</p>: <></>}
    </div>
    );
}

export default TireDetailView;

