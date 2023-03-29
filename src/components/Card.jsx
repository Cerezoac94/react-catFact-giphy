import { useContext } from "react"
import { reset } from "../context/Reset"
import "../style/card.css"
import Button from "./Button"

const Card = ({ word, gif }) => {
  const { handleFlag } = useContext(reset) 
  return (
    <>
    <section className="container">
      <picture><img src={gif?.images?.original?.url} alt={gif.title} /></picture>
      <h2>{word}</h2>
    </section>
    <Button f={handleFlag} title="Reset"/>
    </>
  )
}
export default Card