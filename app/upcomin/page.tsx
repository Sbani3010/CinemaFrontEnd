
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/utils/MoviesType";
import NavBar from "@/components/NavBar";
export async function getUpcomingMovies() {
  const res = await fetch("http://localhost:8084/movie/");
  const data = await res.json();
  return data;
}
export function getUpcomingMovies1(){
  try{  
  } catch(error){}
}

export default async function Upcoming() {
  const data = await getUpcomingMovies();
  //console.log(data);
  return (
    <>
    <NavBar />
    <h1 className="text-2xl font-sans text-center p-4" style={{ background: "orange"}}>Upcoming Movies</h1>
    <div className="movies" style={{ background: "orange"}}>
    {data.map((movie: Movie) => (
      <MovieCard movie= {movie} key={movie.movie_id}/>
    ))}
    </div>
    </>
  );
}