import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';
import{ withPageAuthRequired } from '@auth0/nextjs-auth0';
import Callmovie from '../../components/Callmovie';



const axios = require("axios");
import { useEffect, useState } from 'react';
const Movie = () => {
  const router = useRouter(); 
    const { emailid } = router.query;
    const[check,setCheck]=useState(false);
    const [wishlist,setWishlist]=useState([{
        "_id": "638cdacbc255c4008d4a36c5",
        "email": "krishnamadhwani2@gmail.com",
        "movieid": "399566",
        "__v": 0
      }]);
      useEffect(() => {
        
        handleSubmit();
      }, []);
      const handleSubmit = () =>{
        
        axios.post('/api/getwishlist', {
            email: emailid,
          })
          .then((response) => {
            
            setWishlist(response.data.movies);
            setCheck(true);
            console.log(wishlist);
          }, (error) => {
            console.log(error);
          });
        
      }
      function UserGreeting(props) {
        
        return <>
          <h1>click here to fetch wishlist</h1>
      {/* <button onClick={()=>handleSubmit()}>Click here</button> */}
      </>
      }
               
    return(
      <>
      
      {!check && <UserGreeting />}
    
      <div>{ wishlist.map((movie) => {
            return (
            <Callmovie movieid={movie.movieid}></Callmovie>
        );})}</div>
      
      </>

    );
    
      
    
}

export default Movie
export const getServerSideProps = withPageAuthRequired();