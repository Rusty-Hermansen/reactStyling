import React, { useState } from "react";



const TireDetailUpdate = ({tire})=>{
    const[editingTire, setEditingTire]=useState(tire);
    
    const modelHandler = (e) => {
        setEditingTire(e.target.value)

    }

return(
    <form>
        <div className="mb-3">
            <label htmlfor="tireEdit"></label>
            <input value={editingTire.brand} onChange={modelHandler}/>
        </div>
    </form>
)
}
export default TireDetailUpdate;