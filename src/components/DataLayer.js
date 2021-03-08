import React, { createContext, useContext, useReducer } from 'react';

//creates a data layer
export const DataLayerContext = createContext();

//takes initial state and reducer
//children is what is wrapped inside
export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)
