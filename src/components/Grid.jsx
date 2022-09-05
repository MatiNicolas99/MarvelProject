// import "./grid.css"
import "./gridcomics.css"
export const Grid = ({character}) => {
  return (
    <div className="characters__grid">
    {character.map( (character) => {
                return (
                  
                  <div key={character.id} className="card__wrapper">
                    <div className="card__container"><img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
                      <div className="info">
                        <h1>{character.name}</h1>
                        <button>Ver comics</button>
                      </div>
                    </div>
                  </div>
                )
            })}
      </div>
  )
}
