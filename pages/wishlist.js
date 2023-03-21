


import { useUser } from '@auth0/nextjs-auth0/client';
import { SensorWindowSharp } from '@mui/icons-material';
import{ withPageAuthRequired } from '@auth0/nextjs-auth0';
import Callmovie from '../components/Callmovie';
import { useState } from 'react';
const axios = require("axios");
import Link from 'next/link';
import { useEffect } from 'react';
const Movie = () => {
    const [wishlist,setWishlist]=useState([{
      "_id": "638cdacbc255c4008d4a36c5",
      "email": "krishnamadhwani2@gmail.com",
      "movieid": "399566",
      "__v": 0
    }]);
  const {user, error, isLoading} = useUser();
  const person = user;
  console.log(user);
  const handleSubmit = () =>{
    console.log(user.email);
    axios.post('/api/getwishlist', {
        email: user.email,
      })
      .then((response) => {
        
        setWishlist(response.data.movies);
        console.log(wishlist);
      }, (error) => {
        console.log(error);
      });
    
  }
    useEffect(() => {
        
        handleSubmit();
      }, []);
    return(
      <>
      <h1>HELLO</h1>
      {/* <button onClick={()=>handleSubmit()}>hello</button> */}
      <div>{ wishlist.map((movie) => {
            return (
            <Callmovie movieid={movie.movieid}></Callmovie>
        );})}</div>
      </>

    );
    
      
    
}

export default Movie;
export const getServerSideProps = withPageAuthRequired();