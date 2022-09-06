export const getCharactersFecth = async(offset) => {
    try {
        const api_fetch = await fetch(`https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&ts=1&apikey=6f43cffc79dcf864c9585a50e7ed862b&hash=9eed66ba123af44e56d2d7e96498d820`)
        const{ data }= await api_fetch.json();
    
        return data.results;    
    } catch (error) {
        console.log(error)
    }
};