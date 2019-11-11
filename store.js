
  
import React, { Component } from "react";

import { createStore } from 'redux'



 
const initialState = {
    counter: 330,
    lat:"",
    lang:"",
    city:""
}
const reducer = (state = initialState, action) => {
  
  const newState = {...state};

    switch(action.type){
        case 'add_lat':
           
            newState.lat= action.value; 
            break
      case 'add_long':
       
            newState.lang= action.value; 
            break  
      case 'add_city':
   
            newState.city= action.value; 
            break       
    }

  
    return newState
}

const store = createStore(reducer)



export default store

