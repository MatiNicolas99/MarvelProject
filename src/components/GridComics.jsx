
import "./gridcomics.css"


export const GridComics = ({character}) => {



  return (
    <div className="characters__grid">
    {character.map( (character) => {
                return (
                  
                  <div key={character.id} className="card__wrapper">
                    <div className="card__container"><img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
                      <div className="info">
                        <h1>{character.title}</h1>
                        <a href={character.urls[0].url} target="_blank"><button>Más Info</button></a>
                      </div>
                    </div>
                  </div>
                )
            })}
      </div>
  )
}
