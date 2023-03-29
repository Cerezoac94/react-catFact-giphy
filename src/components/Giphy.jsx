import { useState, useEffect } from "react";

import Card from "./Card";

const Giphy = ({ fact }) => {
  const [ gif, setGif ] = useState("")
  const word = fact.fact.slice(0,8)
  const handleFetchGif = async() => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=wNBFfTMaAur3bol88wvJTrgDnr46w0RH&q=${word}&limit=20`);
    const gif = await response.json();
    setGif(gif.data[0]);
  }

  useEffect(() => {
    handleFetchGif();
  },[fact])

  return gif == "" ? ( <h3>Cargando...</h3> ): (
    <Card word={word} gif={gif}/>
  )
}
export default Giphy