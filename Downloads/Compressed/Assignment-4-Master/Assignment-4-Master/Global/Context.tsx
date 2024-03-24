import React ,{createContext,useContext,useState } from 'react';
 
const AppContext = createContext({});

export const useAppContext = () => {

    return useContext(AppContext);

}
export const AppContextProvider = ({children}:any) => {
    const [state, setState] = useState({}); 

    return (
        <AppContext.Provider value={{state,setState}}>
            {children}
        </AppContext.Provider>
    )
}