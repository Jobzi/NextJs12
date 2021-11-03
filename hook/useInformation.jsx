import { useContext, useEffect } from "react"
import  InformationContext from "../context/informationContext"



function useInformation() {
    const {data, setData} = useContext(InformationContext);
    
    return { data, setData }

}

export default useInformation
