import TireFilter from './Components/TireFilter';
import TireItem from './Components/TireItem';
import TireDetail from './Components/TireDetail';
import NewTire from './Components/NewTire/NewTire';
import 'bootstrap/scss/bootstrap.scss'
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.js'
import React, {useState} from 'react';
import './App.css';

const tires = [{
  id: 0,
  url: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" ,
  brand: "BfGoodrich",
  model: "All Terrain T/A",
  treadWidth: 245,
  sidewall: 45,
  wheelSize: "R17"

}]

function App() {
  const [tiresMasterList, setTireMasterList] = useState(tires);
  const[selectedTire, setSelectedTire] = useState({});
  const [showing, setShowing] = useState(false);
  const [editing, setEditing] = useState(false);


  const[filteredWheelSize, setFilteredWheelSize] = useState(tires);
  const removeTire = (id) => {
    setTireMasterList(tiresMasterList.filter((tire)=> tire.id !== id));
    setFilteredWheelSize(tiresMasterList.filter((tire)=>tire.id !==id));
    setShowing(false);
  }
  const editTire= (id) => {
    let tireToBeEdited=tiresMasterList.filter((tire)=>tire.id ===id);
    setSelectedTire(...tireToBeEdited);
    setEditing(true);
  }

  const addTireHandler = (tire) => {
    setTireMasterList([...tiresMasterList, tire]);
    setFilteredWheelSize([...tiresMasterList, tire]);
  }

  const saveEditedTireHandler = (tire) => {
    let withoutEditedTire = tiresMasterList.filter((t)=> t.id !== tire.id)
    console.log([...withoutEditedTire, tire]);
    setTireMasterList([...withoutEditedTire, tire]);
    setFilteredWheelSize([...withoutEditedTire, tire])
  }

  const onSaveHandler = (tire)=>{
    let tireIndex=tiresMasterList.findIndex((t)=> t.id === tire.id);
    console.log(tireIndex);
    if (tireIndex !== -1){
      saveEditedTireHandler(tire);
    }
    else {
      addTireHandler(tire);
    }
    setEditing(false);
  }

  const filterChangeHandler = (wheelSize) => {
    let selectedWheelSize=tiresMasterList.filter((tire)=>
    tire.wheelSize.toLowerCase().includes(wheelSize.toLowerCase()))
    setFilteredWheelSize(selectedWheelSize);
  }

  const selectTireHandler = (index) => {
    setSelectedTire(tiresMasterList[index]);
    setShowing(!showing);
  }

  const handleNewTire = () => {
    let emptyTire= {id: tiresMasterList.length,
      url: "" ,
      brand: "",
      model: "",
      treadWidth: 0,
      sidewall: 0,
      wheelSize: ""}

      setSelectedTire(emptyTire);
      setEditing(true);
  }
  
 
  
  return (
    <div className="App container">
      <TireFilter selected={filteredWheelSize} OnChangeFilter={filterChangeHandler}/>
      <div className="d-flex justify-content-center">
        <div className="flex-column">
          {filteredWheelSize.map((t, index)=>{return(
          <div onClick={()=>{selectTireHandler(index)}}>
            <TireItem tire={t} onTireSelect={()=>{selectTireHandler(index)}}/></div>)})}
            </div>
            </div>
      {showing? <TireDetail editTire= {editTire} tire = {selectedTire} removeTire={removeTire}/>: <></>}
      {editing ? <NewTire editing={editing}  tire={selectedTire} onAddTire={onSaveHandler}/>: <button onClick={handleNewTire}>Add Tire</button>}
      
    </div>
    
  );
}

export default App;
