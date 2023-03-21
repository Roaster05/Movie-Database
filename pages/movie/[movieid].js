import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';
import{ withPageAuthRequired } from '@auth0/nextjs-auth0';



const axios = require("axios");
import { useEffect, useState } from 'react';
const Movie = () => {
  const router = useRouter(); 
    const { movieid } = router.query;
  const {user, error, isLoading} = useUser();
  
  const [film, setFilm] = useState(null);
  const[done,setDone]=useState(false);
  const handleSubmit = () =>{
    axios.post('/api/addwishlist', {
      email: user.email,
      movieid: movieid
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    
  }

    const options = {
      method: 'GET',
      url: 'https://advanced-movie-search.p.rapidapi.com/movies/getdetails',
      params: {movie_id: movieid},
      headers: {
        'X-RapidAPI-Key': '8691017324msh5a2a68788f5d802p1ea912jsn5cca16dfc79a',
        'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
      }
    };
    const handlSubmit = () =>{
      axios.request(options).then(function (response) {
        
        setFilm(response.data);
        setDone(true);
        console.log(film);
      }).catch(function (error) {
        console.error(error);
      });
      
    }
    function UserGreeting(props) {
        
      return <div>
        <button onClick={()=>handleSubmit()}>Add to wishlist</button>
      
      <div className="card" >
        <img src={film.poster_path} alt="harry potter" style={{ width: '400px',alignContent:"center" }}/>

  <div class="card-body">
    <h5 class="card-title">{film.original_title}</h5>
    <p class="card-text">{film.overview}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Popularity Index:{film.popularity}</li>
    <li class="list-group-item">Rating:{film.vote_average}</li>
    <li class="list-group-item">Release Date:{film.release_date}</li>
  </ul>
  <div class="card-body">
  </div>
</div>
      
      </div>;
    }
    
    function GuestGreeting(props) {
      return <div>Click on Button to Load</div>;
    }
    return(
      <>
      <button onClick={()=>handlSubmit()}>Load Movie</button>
      {done && <UserGreeting />}
      {!done && <GuestGreeting />}
      
      
      
      </>

    );
    
      
    
}

export default Movie
export const getServerSideProps = withPageAuthRequired();