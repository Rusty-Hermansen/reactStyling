import React, {useState} from 'react'
const TireDetailView = ({tire, editTire, removeTire, onChangeHandler})=>{
    const [cart, setCart] = useState(false);
    const cartHandler = (event) =>{
        setCart(!cart);
        // event.preventDefault();
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

/* <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  
  
</div> */