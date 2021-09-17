import TireItems from "./tireitem.module.css";

const TireItem = ({ tire }) => {
    return (
        <div className={TireItems.tire_item} >
            <div className="row">
                <img src={tire.url} alt="tire" width="300" height="150" />
            </div>
            <div className="row">
                <div className="col-md">
                    <h6>Brand:</h6>
                    <p>{tire.brand}</p>
                </div>
                <div className="col-md">
                    <h6>Model:</h6>
                    <p>{tire.model}</p>
                </div>
            </div>
        </div>
    );

}
export default TireItem;