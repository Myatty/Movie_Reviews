import axios from 'axios';

class MovieDataService{

    getAll(page = 0 ){
        return axios.get(`http://localhost:5000/api/v1/movies?page=${page}`)
    }

    getId(id){
        return axios.get(`http://localhost:5000/api/v1/movies/id/${id}`)
    }

    
}