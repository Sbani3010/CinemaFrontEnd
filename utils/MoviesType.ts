export type Movie = {
  movie_id: string;
  title: string;
  overview: string;
  posterImg: string;
  backdropImg: string;
  releaseDate: string;
  ratting: number;
  genres: object;
};
export type Movies = {
  movies: Movie[];
};
export type MovieData = {
  movie: Movie;
};
