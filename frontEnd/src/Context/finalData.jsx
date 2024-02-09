import { createContext, useState } from "react";

const FinalDataContext = createContext();


const FinalDataProvider({children}){
    const [chosenDetails, setChosenDetails] = useState({});

    return(
        <FinalDataContext.Provider value={{chosenDetails, setChosenDetails}}>
            {children}
        </FinalDataContext.Provider>
    )
}

export default FinalDataContext;