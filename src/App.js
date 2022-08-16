// Importing the required components
import Board from './Board';
import Info from "./Info";
import Popup from 'reactjs-popup';
import PopUp from './PopUp'
import ReactDOM from "react-dom/client";
import {
	BrowserRouter as Router,
	
	Routes,
	Route,
	Link
  } from 'react-router-dom';



// Importing the CSS File
import "./css/app.css";

// Importing the useState hook
import { useState } from 'react';
import GameBoard from './GameBoard';
import NoteState from './context/notes/NotesState';

function App() {

	// Creating a reset state, which indicates whether
	// the game should be reset or not
	const [reset, setReset] = useState(false);

	// Creating a winner state, which indicates
	// the current winner
	const [winner, setWinner] = useState('');

	// Sets the reset property to true
	// which starts the chain
	// reaction of resetting the board
	const resetBoard = () => {
		setReset(true);
	}

	return (
		<>
		<NoteState>
		<Router>
        <Routes>
          <Route exact path="/" element={<PopUp/>}/>
          <Route exact path="gameboard" element={<GameBoard/>}/>
          </Routes>
      
    </Router>
	</NoteState>
	  </>
	);
}

export default App;
