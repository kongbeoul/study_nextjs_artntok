import React, { createContext, useReducer, useMemo } from 'react';

export const OPEN_THUMBNAIL_SLIDER = 'OPEN_THUMBNAIL_SLIDER';
export const CLOSE_THUMBNAIL_SLIDER = 'CLOSE_THUMBNAIL_SLIDER'
 
const initialState = { 
  visible: false, 
  index: 0, 
  represent: [
    '/images/temp/sample-work-01@3x.png', 
    '/images/temp/sample-work-02@3x.png',
    '/images/temp/sample-work-03@3x.png',
    '/images/temp/sample-work-04@3x.png',
    '/images/temp/sample-work-05@3x.png',
    '/images/temp/sample-work-06@3x.png',
  ]
};
export const ViewContext = createContext(initialState);

let reducer = (state, action) => {
  switch(action.type) {
    case OPEN_THUMBNAIL_SLIDER:
      return { 
        ...state, 
        visible: !state.visible,
        index: action.index
      }
    case CLOSE_THUMBNAIL_SLIDER: 
      return {
        ...state,
        visible: !state.visible
      }
    default:
      return state;
  }
}

export const ViewProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return useMemo(() => {
    return (
      <ViewContext.Provider value={{ state, dispatch }}>
        {children}
      </ViewContext.Provider>
    )
  }, [state])
};
