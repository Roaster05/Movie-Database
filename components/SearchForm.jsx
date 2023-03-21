import React, {useState,setState} from 'react';
const axios = require("axios");
import { useEffect } from 'react';




function SearchForm() {
    
    const [movieName, setMovieName] = useState('game of thr');
    let Movies1 =[];
    let Movies2 =[];
    

    const handleInputChange = (e) => {
        const {id , value} = e.target; 
        if(id === "movieName"){
            setMovieName(value);
        }
    };
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: 'game of thr'},
        headers: {
          'X-RapidAPI-Key': '8691017324msh5a2a68788f5d802p1ea912jsn5cca16dfc79a',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      };
      
    useEffect(() => {
        axios.request(options).then(function (response) {
            
            Movies1=response.data.d;
            
        }).catch(function (error) {
            console.error(error);
        });
      }, []);
    
      const options1 = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: {movieName}},
        headers: {
          'X-RapidAPI-Key': '8691017324msh5a2a68788f5d802p1ea912jsn5cca16dfc79a',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      };
    const handleSubmit  = () => {
        
          axios.request(options1).then(function (response) {
            Movies2=response.data.d;
        }).catch(function (error) {
            console.error(error);
        });
        console.log(movieName);
        console.log(Movies2);
        
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
        <div className='Movies'>
        
        </div>
        </>
       
    )       
}

export default SearchForm