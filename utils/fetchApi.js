import axios from 'axios';

export const baseUrl= "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url) , {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '89f3cb32a1msh3db75dbaa20539cp132e86jsn39c7ce334dbb'
        }
    });
    return data; 
}