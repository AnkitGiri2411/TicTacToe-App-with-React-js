// Importing the css for the info
import { useContext } from "react";
import "./css/info.css";
import { P1,P2 } from "./PopUp";


const Info = (props) => {

	
	return (
		<div className="info">
			<div className="player">{P1} =>  X</div>
			<div className="player">{P2} => O</div>
			
		</div>
	)
}

export default Info;
