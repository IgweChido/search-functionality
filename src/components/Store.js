import React, { useState } from "react";


//Initial state
const initialState ={
    first:'',
    last:''

    
};
export const Context = React.createContext();

const Store =({children}) =>{
    const[state, setState] = useState(initialState);
    
    return(
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
);

};

export default Store;

