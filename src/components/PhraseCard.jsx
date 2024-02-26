import './styles/PhraseCard.css';

const PhraseCard = ({phraseRandom}) => {
    
    const { phrase, author } = phraseRandom
    

  return (
    <div className='card__phrase'>"{phrase}"
      <div>
      -{author}
      </div>
    </div>
    
  )
}

export default PhraseCard