import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from "../utils/phrases.json"
import images from "../utils/arrImages.json"
import './styles/BtnPhrase.css'

const BtnPhrase = ({setPhraseRandom, setImageSelected}) => {

    const handleClick = ( ) => {
        const phrase = getRandomFromArray(phrases)
        setPhraseRandom(phrase)

        const background = getRandomFromArray(images)
        setImageSelected(background)

    }

  return (
    <button className="card__btn" onClick={handleClick}>Descubre más</button>
  )
}

export default BtnPhrase