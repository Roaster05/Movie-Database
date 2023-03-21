import { useUser } from '@auth0/nextjs-auth0/client';
import React, {useState,setState} from 'react';
const axios = require("axios");
import { useEffect } from 'react';
import Movies from '../components/Movies';
import { useRouter } from 'next/router'

function SearchForm()  { 
    const {user, error, isLoading} = useUser();
    console.log(user);
    const router = useRouter()
    const [movieName, setMovieName] = useState(null);
    const [moviesx,setMovies]=useState([]);
    const [options,setOptions]=useState({
        method: 'GET',
        url: 'https://advanced-movie-search.p.rapidapi.com/search/movie',
        params: {query: 'kong', page: '1'},
        headers: {
          'X-RapidAPI-Key': '8691017324msh5a2a68788f5d802p1ea912jsn5cca16dfc79a',
          'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
        }
    });

    const handleInputChange = (e) => {
        const {id , value} = e.target; 
        if(id === "movieName"){
            setMovieName(value);
        }
        
        
    };
    
      var movies3=[];
    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            setMovies(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
        
      }, []);
    
      
    const handleSubmit  = () => {
        setOptions({
            method: 'GET',
            url: 'https://advanced-movie-search.p.rapidapi.com/search/movie',
            params: {query: movieName, page: '1'},
            headers: {
              'X-RapidAPI-Key': '8691017324msh5a2a68788f5d802p1ea912jsn5cca16dfc79a',
              'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
            }
        })
          axios.request(options).then(function (response) {
            console.log(response);
            setMovies(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
        
        console.log(movieName);
        console.log(options);
        
        
    };
    
    

    return(
        <>
        <div className="form">
            <div className="form-body">
                <div className="moviename">
                    <label className="form__label" for="movieName">Movie Name </label>
                    <input className="form__input" type="text" value={movieName} onChange = {(e) => handleInputChange(e)} id="movieName" placeholder="Movie Name"/>
                </div>
                
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Search</button>
            </div>
        </div>
        <Movies movies={moviesx} />
        </>
       
    )       
}

export default SearchForm