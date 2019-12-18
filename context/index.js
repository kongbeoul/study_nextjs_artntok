import React, { createContext, useReducer, useMemo } from 'react';

export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

const initialState = { visible: false };
export const HeaderContext = createContext(initialState);

let reducer = (state, action) => {
  switch(action.type) {
    case TOGGLE_NAVIGATION:
      return { ...state, visible: !state.visible }
    
    default:
      return state;
  }
}

export const HeaderProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return useMemo(() => {
    return (
      <HeaderContext.Provider value={{ state, dispatch }}>
        {children}
      </HeaderContext.Provider>
    )
  }, [state])
};
