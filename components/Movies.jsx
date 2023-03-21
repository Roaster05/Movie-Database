import Movie from "./Movie";
const Movies = ({ movies }) => {
    return(
        <>
        < div className="flexi">
        { movies.map((movie) => {
            return (<Movie key ={movie.id} id={movie.id} name={movie.original_title} type={movie.overview} popularityindex={movie.popularity} rating={movie.vote_average} releasedate={movie.release_date} image={movie.poster_path}  />
        );})}
        </div>
        </>
    );

}
export default Movies