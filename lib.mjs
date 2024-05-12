import path from "node:path";
import { addCoverToVideo } from "./ffmpeg.mjs";
import { findMovieFromFilename } from "./moviedb.mjs";

export async function addCoverToMovieFile(filepath, tmdbApiKey) {
  const basename = path.basename(filepath);

  let movie = await findMovieFromFilename(basename, tmdbApiKey);
  if (!movie) throw Error(`Could not find the movie from the filename: ${basename}`);

  if (movie.poster_path === undefined) throw Error(`The movie ID ${movie.id} does not have a Poster`);

  const imageUrl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;

  await addCoverToVideo(filepath, imageUrl);
}
