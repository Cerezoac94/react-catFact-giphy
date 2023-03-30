import { useFact } from "../hooks/useFact"
import { useGiphy } from "../hooks/useGiphy"
import "../style/card.css"
import Button from "./Button"

const Card = () => {
  const { word, handleReset } = useFact()
	const gif = useGiphy(word)
  return (
    <section className="container">
      <article className="card">
				<picture><img src={gif} alt={`image obtained from giphy api using the word: ${word}`}/></picture>
				<section><h2>{word}</h2></section>
        </article>
        <Button f={handleReset} title={"Reset"} />
			</section>
  )
}
export default Card