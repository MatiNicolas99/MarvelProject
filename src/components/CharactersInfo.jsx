import "./charactersinfo.css"
import { SearchCharacter } from "./SearchCharacter"
import { SearchComics } from "./SearchComics"

export const CharactersInfo = ({title, info, n}) => {
  return (
    <div className="characters__info">
      <h1>{title}</h1>
      <p>{info}</p>
      <span className="character__input">
        {n === 1 ? <SearchCharacter placeholder={"Héroes y villanos"}/>: <SearchComics placeholder={"Comics"}/>}
      </span>
    </div>
  )
}
