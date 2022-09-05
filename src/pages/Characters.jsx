
import { useEffect, useState } from "react"
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination"
import { getCharactersFecth } from "../helpers/getCharactersFecth";
import { Grid } from "../components/Grid";
import { CharactersInfo } from "../components/CharactersInfo";
import { CharacatersFooter } from "../components/CharactersFooter";

export const Characters = () => {

  const [character, setCharacter] = useState([]);
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true);

  const onNextPage = () => {
    if(page >= 78)return;
    setPage(page + 1)
    setOffset(offset + 20 );
  }
  const onPrevioustPage = () => {
    if(page <= 1)return;

    setOffset(offset - 20);
    setPage(page - 1)
  }

    const getCharacters = async(offset) => {
      const newCharacters = await getCharactersFecth(offset);
      setCharacter(newCharacters); 
      setIsLoading(false);
    };

useEffect(() => {
  getCharacters(offset)
}, [offset]);


  return (
    <>
    <CharactersInfo title={"¿Personaje favorito?"} info={"Busca entre miles de héroes y villanos Marvel"} n={1} />
    <Pagination 
    page={page}
    onNextPage={onNextPage}
    onPrevioustPage={onPrevioustPage}
    />
    {
      isLoading && (<Loader/>)
    }
    <Grid 
    character={character}
    />
    <Pagination 
    page={page}
    onNextPage={onNextPage}
    onPrevioustPage={onPrevioustPage}
    />
    <CharacatersFooter/>
    </>
  )
};

