import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom' ;
import { CharacatersFooter } from "../components/CharactersFooter";
import { CharactersInfo } from "../components/CharactersInfo";
import { GridComics } from "../components/GridComics";


export const SearchedComics = () => {

    const [searchComics, setSearchComics] = useState([]);
    const params = useParams();

    const getComicsSearch = async(name) => {
      const api_fetch = await fetch(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${name}&ts=1&apikey=6f43cffc79dcf864c9585a50e7ed862b&hash=9eed66ba123af44e56d2d7e96498d820`)
      const {data} = await api_fetch.json();
      console.log(data);
      setSearchComics(data.results)
    }
      useEffect(() => {
        getComicsSearch(params.search)
      }, [params.search]);


  return (
    <>
    <CharactersInfo title={"Encuentra tus historias favoritas"} info={"Todos los comics al alcance de un click"} n={2}/>
    <GridComics
    character={searchComics}
    />
    <CharacatersFooter/>
    </>
  )
}
