import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const Callmovie = ({movieid}) =>
{
  const[done,setDone]=useState(false);
    const [film, setFilm] = useState();
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
    useEffect(() => {
      handlSubmit();
        
      }, );
      function UserGreeting(props) {
        
        return <div>
          <button onClick={()=>handleSubmit()}>hello</button>
        
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
      
      
      
      return(
        <>
        {/* <button onClick={()=>handlSubmit()}>Load Movie</button> */}
        {done && <UserGreeting />}
        
        
        
        
        </>
  
      );
}
export default Callmovie;