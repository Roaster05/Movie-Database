import { useUser } from '@auth0/nextjs-auth0/client';
import React, {useState,setState} from 'react';
const axios = require("axios");
import { useEffect } from 'react';
import Movies from '../components/Movies';
import { useRouter } from 'next/router'
import Link from 'next/link';

function SearchForm()  { 
    const {user, error, isLoading} = useUser();
   const[email,setEmail]=useState("");
    const handleInputChange = (e) => {
        const {id , value} = e.target; 
        if(id === "email"){
            setEmail(value);
        }
        
        
    };
    const [person,setPerson]=useState("")
    const[sts,setSts]=useState(false);
    const handleSubmit  = () => {
        axios.post('/api/getwishlist', {
            email: email,
          })
          .then((response) => {
            if(response.data.movies[0])
            {
            setPerson(response.data.movies[0].email);
            setSts(true);
            console.log(person);
            }
          }, (error) => {
            console.log(error);
            setSts(false);
          });
        
        
    };
    const handlSubmit  = () => {
        if(user)
        {
        axios.post('/api/addfriend', {
            email: user.email,
            friendemail: email
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
        }
        else
        console.log("login-first");
        
        
    };
    function UserGreeting(props) {
        
        return <div><Link href={{pathname:'/view/'+person}} class="nav-link" >{person}</Link>
        <button onClick={()=>handlSubmit()} type="submit" class="btn">Add friend</button>
        
        </div>;
      }
      
      function GuestGreeting(props) {
        return <div>No user found</div>;
      }

    return(
        <>
        <div className="form">
            <div className="form-body">
                <div className="moviename">
                    <label className="form__label" for="movieName">Enter Email </label>
                    <input className="form__input" type="text" value={email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="email"/>
                </div>
                
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Search</button>
            </div>
            <div>
      {sts && <UserGreeting />}
      {!sts && <GuestGreeting />}
    </div>
        </div>
        
        </>
       
    )       
}

export default SearchForm