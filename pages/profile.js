import{ withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import Link from 'next/link';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
const Profile = () => {

    const {user, error, isLoading} =  useUser();
    console.log(user);
    useEffect(() => {
        
        
        console.log(user);
    }, []);
    return(
        <>
        <div className="card" >
        

  <div class="card-body">
    <h5 class="card-title">{user.email}</h5>
    <p class="card-text">{user.name}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">First Name:{user.given_name}</li>
    <li class="list-group-item">Second Name:{user.family_name}</li>
    <li class="list-group-item">nickname:{user.nickname}</li>
  </ul>
  <div class="card-body">
  </div>
</div>
        </>
    );
 
}

export default Profile;
export const getServerSideProps = withPageAuthRequired();