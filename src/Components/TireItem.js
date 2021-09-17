import "./TireItem.css";

const TireItem = ({tire, onTireSelect}) => {
    return(
        <div className="tire-item col-lg-8 col-md-8 col-sm-10" onClick={onTireSelect}>
           
            <div className="row">
                <div className= "col}">
                    <img src={tire.url} alt="tire" width="300" height="150"/>
                </div>
                    <div className="col">
                    <h6>Brand:</h6>
                    <p>{tire.brand}</p>
                </div>
                <div className="col">
                    <h6>Model:</h6>
                    <p>{tire.model}</p>
                </div>
            </div>
        </div>
    );

}
export default TireItem;