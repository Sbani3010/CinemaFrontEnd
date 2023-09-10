import Link from "next/link";

export const generateStaticShows = async (id: string) => {
  const req = await fetch("http://localhost:8084/show/", {
    method: "GET",
  });
  const res = await req.json();
  return res.filter(
    (show: { movie: { movie_id: string } }) => show.movie.movie_id === id
  );
};

type movieId = {
  id: string;
};
const MovieShows = async ({ id }: movieId) => {
  const shows = await generateStaticShows(id);
  // console.log(shows);
  return (
    <div className="p-4">
      {shows?.map(
        (show: { showId: number; dateCreated: string; startTime: string }) => (
          <div className="w-40 h-20 bg-orange-500 p-1 flex justify-center items-center">
            <Link
              href={"/booking/" + show.showId}
              className="text-center w-full"
            >
              <h1 className="font-sans text-xl font-semibold text-gray-50">
                {show.dateCreated}
              </h1>
              <h1 className="font-semibold">{show.startTime}</h1>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default MovieShows;
