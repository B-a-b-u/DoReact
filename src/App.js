import logo from './logo.svg';
import './App.css';
import Employee from './Components/Employee';
import {useState} from "react";

function App() {
  const [_desig,setDesig] = useState("Not Assigned");

  const Emp = {
    name : "Babu",
    desig : _desig,
    age : 20,
  }
  
  return (
    <div className="App">
      <label>Designation</label>
      <input type="text" onChange = {
        (e) => {
          e.target.value ? setDesig(e.target.value) : setDesig("Not Assigned");
        }
      }></input>
      <Employee data = {Emp}></Employee>
      <Employee data = {Emp}></Employee>
      <Employee data = {Emp}></Employee>
    </div>
  );
}

export default App;
