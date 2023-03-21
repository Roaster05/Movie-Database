import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';
import{ withPageAuthRequired } from '@auth0/nextjs-auth0';
const axios = require("axios");
import { useEffect, useState } from 'react';
import Movies from '../../components/Movies';

const Movie = () => {
    const router = useRouter(); 
      const { genreid } = router.query;
    const {user, error, isLoading} = useUser();
    
    const [films, setFilm] = useState([{
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/original/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
        "belongs_to_collection": {
          "id": 535313,
          "name": "Godzilla Collection",
          "poster_path": "https://image.tmdb.org/t/p/original/inNN466SKHNjbGmpfhfsaPQNleS.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original/oboBn4VYB79uDxnyIri0Nt3U3N2.jpg"
        },
        "budget": 200000000,
        "genres": [
          {
            "id": 28,
            "name": "Action"
          },
          {
            "id": 14,
            "name": "Fantasy"
          },
          {
            "id": 878,
            "name": "Science Fiction"
          }
        ],
        "homepage": "https://www.warnerbros.com/movies/godzilla-vs-kong",
        "id": 399566,
        "imdb_id": "tt5034838",
        "original_language": "en",
        "original_title": "Godzilla vs. Kong",
        "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        "popularity": 125.751,
        "poster_path": "https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        "production_companies": [
          {
            "id": 923,
            "logo_path": "https://image.tmdb.org/t/p/original/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
            "name": "Legendary Pictures",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          {
            "iso_3166_1": "US",
            "name": "United States of America"
          }
        ],
        "release_date": "2021-03-24",
        "revenue": 470067014,
        "runtime": 114,
        "spoken_languages": [
          {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
          }
        ],
        "status": "Released",
        "tagline": "One Will Fall",
        "title": "Godzilla vs. Kong",
        "video": false,
        "vote_average": 7.723,
        "vote_count": 8405
      }]);
  
    
      const [options,setOptions]=useState({
        method: 'GET',
        url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
        params: {with_genres:genreid ,page: '1'},
        headers: {
          'X-RapidAPI-Key': '8691017324msh5a2a68788f5d802p1ea912jsn5cca16dfc79a',
          'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
        }
      })
      useEffect(() => {
        setOptions({
            method: 'GET',
            url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
            params: {with_genres:genreid, page: '1'},
            headers: {
              'X-RapidAPI-Key': '8691017324msh5a2a68788f5d802p1ea912jsn5cca16dfc79a',
              'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
            }
          });
        axios.request(options).then(function (response) {
          
            setFilm(response.data.results);
            console.log(genreid);
          }).catch(function (error) {
            console.error(error);
          });
        
      }, []);
      const handlSubmit = () =>{
        axios.request(options).then(function (response) {
          
            setFilm(response.data.results);
            console.log(response);
          }).catch(function (error) {
            console.error(error);
          });
        
      }
      
      return(
        <>
        <button onClick={()=>handlSubmit()}>hell</button>
        <Movies movies={films} />
        </>
  
      );
      
        
      
  }
  
  export default Movie
  export const getServerSideProps = withPageAuthRequired();