import { useState, useEffect, useContext } from "react";
import { reset } from "../context/Reset";
import Giphy from "./Giphy";

const Fetch = () => {
  const { flag } = useContext(reset)
  const [ fact, setFact ] = useState("")
  const handleFetchFact = async () => {
    const response = await fetch(`https://catfact.ninja/fact`);
    const fact = await response.json();
    setFact(fact);
}

useEffect(() => {
    handleFetchFact();
},[flag])

  return fact == "" ? ( <h3>cargando...</h3> ) : (
    <Giphy fact={fact}/>
  )
}
export default Fetch