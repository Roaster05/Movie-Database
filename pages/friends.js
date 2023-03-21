
import { useUser } from '@auth0/nextjs-auth0/client';

import{ withPageAuthRequired } from '@auth0/nextjs-auth0';

import { useState } from 'react';
const axios = require("axios");
import Link from 'next/link';
import { useEffect } from 'react';
const Movie = () => {


  const {user, error, isLoading} = useUser();
    const[friends,setFriend]= useState([
      {
        "_id": "639f1898b1b8bae15ca58202",
        "email": "krishnamadhwani@gmail.com",
        "friendemail": "krishnamadhwani@gmail.com",
        "__v": 0
      }
    ]);

    const handleSubmit = () =>{
      axios.post('/api/getfriend', {
        email: user.email,
      })
      .then((response) => {
        
        setFriend(response.data.friends);
        
      }, (error) => {
        console.log(error);
      });
      
    }
    return(
      <>
      
      <button onClick={()=>handleSubmit()}>hello</button>
      <div>{ friends.map((friend) => {
            return (
            <h1 key={friend.friendemail}>{friend.friendemail}</h1>
        );})}</div>
      </>

    );
    
            }
    


export default Movie;
export const getServerSideProps = withPageAuthRequired();