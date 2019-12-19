import React, { useMemo, createContext } from 'react';

const initialState = { 
  represent: [
    '/images/temp/sample-work-01@3x.png', 
    '/images/temp/sample-work-02@3x.png',
    '/images/temp/sample-work-03@3x.png',
    '/images/temp/sample-work-04@3x.png',
    '/images/temp/sample-work-05@3x.png',
    '/images/temp/sample-work-06@3x.png',
  ]
};

export const RepresentContext = createContext();

export const RepresentProvider = ({ children }) => {
  return useMemo(() => {
    return (
      <RepresentContext.Provider value={initialState}>
        { children }
      </RepresentContext.Provider>
    )
  }, [ initialState ])
    
  
}