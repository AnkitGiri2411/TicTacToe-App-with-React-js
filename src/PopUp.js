import React, {  useContext, useState } from "react";
import Info from "./Info";
import { Link } from "react-router-dom";
import GameBoard from "./GameBoard";
import noteContext from "./context/notes/noteContext";
import { createContext } from "react";
import NoteState from "./context/notes/NotesState";
import Board from "./Board";
import {useNavigate} from "react-router-dom"



var P1,P2;
 function Popup(props) {


  const a =useContext(noteContext);


  let navigate =useNavigate();
  
    
  const winnername = "h";
	const [firstname,setFirstName] = useState();
	const[secondname,setSecondName]= useState();


function redirect(){
  navigate("/gameboard");
  P1=firstname;
  P2=secondname;

}


  return (
    <>
    
    <div className={`winner ${winnername !== "" ? "" : "shrink"}`}>
        <h4>First Person Name </h4>
        <input className="form-control form-control-lg" type="text" onChange={event => setFirstName(event.target.value)}/>
        <h4>Second Person Name </h4>
        <input className="form-control form-control-lg" type="text" onChange={event => setSecondName(event.target.value)}/>
        <button onClick={redirect}>Start </button>
        </div>
       
    </>
  );
}
export default Popup
export {P1,P2}

