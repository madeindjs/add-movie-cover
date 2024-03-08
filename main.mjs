import path from "node:path";
import { addCoverToVideo } from "./ffmpeg.mjs";
import { findMovieFromFilename } from "./moviedb.mjs";

for (const filepath of process.argv.slice(2)) {
  const basename = path.basename(filepath);
  const movie = await findMovieFromFilename(basename).catch(console.error);

  if (movie === undefined) continue;
  if (movie.poster_path === undefined) {
    console.warn(`no image found for ${movie.id}`);
    continue;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;

  await addCoverToVideo(filepath, imageUrl);

  console.log(basename, movie, imageUrl);
}
