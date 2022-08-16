import React, { useEffect, useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

  
const state ={
    "name":"Ankit"
    
}

 return(<>
    <h5>{props.p1}</h5>
    <NoteContext.Provider value={state}>
        {props.children}
    </NoteContext.Provider>
    </>
 )
}
export default NoteState;