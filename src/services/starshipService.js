const BASE_URL = 'https://swapi.dev/api/starships/';

const getStarships = async () => {
    try{
       const res = await fetch(BASE_URL);
       const data = await res.json();
       return data.results;
    }catch(err){
        console.error('Error fetching starships:', err);

    }
};

export {getStarships};