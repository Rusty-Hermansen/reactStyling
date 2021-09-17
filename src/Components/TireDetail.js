import TireDetailView from "./TireDetailView";

const TireDetail = ({tire, editTire, removeTire}) =>{
    
    const onChangeHandler = (event) => {
        tire.brand=event.target.value;
    };



    return(
       
            <div>
             <TireDetailView tire={tire} onChangeHandler={onChangeHandler} removeTire={removeTire} editTire={editTire}/>
            </div>

   
       
      
    )
}
export default TireDetail;