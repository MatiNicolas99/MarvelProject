import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { CharacatersFooter } from "../components/CharactersFooter";
import { CharactersInfo } from "../components/CharactersInfo";
import { GridComics } from "../components/GridComics";
import { Loader } from "../components/Loader";
import { getComicsFecth } from "../helpers/getComicsFetch";


export const Comics = () => {
    const [comics, setComics] = useState([]);
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

      const getComics = async(offset) => {
        const newComics = await getComicsFecth(offset);
        setComics(newComics); 
        setIsLoading(false);
      };

      useEffect(() => {
        getComics(offset)
      }, [offset]);
    
  return (
    <>
    <CharactersInfo title={"Encuentra tus historias favoritas"} info={"Todos los comics al alcance de un click"} n={2} />
    <Pagination 
    page={page}
    onNextPage={onNextPage}
    onPrevioustPage={onPrevioustPage}
    />
    {
      isLoading && (<Loader/>)
    }
    <GridComics
    character={comics}
    />
    <Pagination 
    page={page}
    onNextPage={onNextPage}
    onPrevioustPage={onPrevioustPage}
    />
    <CharacatersFooter/>
    </>
  )
}
