
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
                        <button><a href={character.urls.url} target="_blank">Más Info</a></button>
                      </div>
                    </div>
                  </div>
                )
            })}
      </div>
  )
}
