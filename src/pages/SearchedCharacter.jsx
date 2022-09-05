import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom' ;
import { CharacatersFooter } from "../components/CharactersFooter";
import { CharactersInfo } from "../components/CharactersInfo";
import { Grid } from "../components/Grid";


export const SearchedCharacter = () => {

    const [searchCharacter, setSearchCharacter] = useState([]);
    const params = useParams();

    const getCharacterSearch = async(name) => {

      const api_fetch = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=6f43cffc79dcf864c9585a50e7ed862b&hash=9eed66ba123af44e56d2d7e96498d820`)
      const {data} = await api_fetch.json();
      console.log(data)
      setSearchCharacter(data.results);
    }
      useEffect(() => {
        getCharacterSearch(params.search)
      }, [params.search]);


  return (
    <>
    <CharactersInfo title={"¿Personaje favorito?"} info={"Busca entre miles de héroes y villanos Marvel"} n={1}/>
    <Grid 
    character={searchCharacter}
    />
    <CharacatersFooter/>
    </>
  )
}
