
import { Main } from "./Main";
import { Route, Routes } from "react-router-dom";
import { Characters } from "./Characters";
import { SearchedComics } from "./SearchedComics";
import { Comics } from "./Comics";
import { SearchedCharacter } from "./SearchedCharacter";

export const Pages = () => {
  return (
    <Routes> 
        <Route path="/" element={<Main />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Comics" element={<Comics />} />
        <Route path="/searchedCharacter/:search" element={<SearchedCharacter /> } />
        <Route path="/searchedComics/:search" element={<SearchedComics /> } />
    </Routes> 
  )
}
