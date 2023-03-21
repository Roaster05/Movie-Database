import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { CCard } from '@coreui/react';
import { CCardImage } from '@coreui/react';
import { CCardImageOverlay,CCardTitle,CCardText } from '@coreui/react';

function Movie({id,name,image,type,popularityindex,rating,releasedate}) {
  
    return(
        <>
        <div className="card" >
        <img src={image} alt="harry potter" style={{ width: '400px',alignContent:"center" }}/>

  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{type}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Popularity Index:{popularityindex}</li>
    <li class="list-group-item">Rating:{rating}</li>
    <li class="list-group-item">Release Date:{releasedate}</li>
  </ul>
  <div class="card-body">
  <Link href={{pathname:'/movie/'+id}} class="nav-link" >Know More</Link>
    
  </div>
</div>

        </>
    )       
}
Movie.defaultProps = {
  id: "Rahul",
  name: "deepblue",
  type: "45"
  
}

export default Movie