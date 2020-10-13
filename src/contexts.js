import React, { createContext, useContext, useReducer } from "react";

const AppWideContext = createContext();
export const AppState = ({ reducer, initialState, children }) => (
  <AppWideContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppWideContext.Provider>
);
export const useAppStateValue = () => useContext(AppWideContext);