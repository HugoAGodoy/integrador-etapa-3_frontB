import { createContext } from "react";

const CarritoContext = createContext()

const CarritoProvider = ( { children} ) => {

    const data ={

    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export { CarritoProvider }
export default CarritoContext

