import React, { createContext, useContext, useReducer } from "react";

// Prepairing the data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// This is a Hook which allows us to pull info from data-layer
export const useStateValue = () => useContext(StateContext);