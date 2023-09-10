import MovieCard from "@/components/MovieCard";
import NavBar from "@/components/NavBar";
import { Movie, MovieData } from "@/utils/MoviesType";
export async function generateStaticMovi() {
  const posts = await fetch("http://localhost:8084/movie/all", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return posts;
}
const Movies = async () => {
  const data = await generateStaticMovi();
  // console.log(data);
  return (
    <>
      <NavBar />
      <h4 className="text-2xl font-sans text-center p-4">Now Showing</h4>
      <div className="main grid grid-cols-4 p-2 gap-2 ">
        {data && data?.map((item: Movie) => <MovieCard movie={item} />)}
      </div>
    </>
  );
};
export default Movies;
