import { MovieDb } from "moviedb-promise";
import process from "node:process";
import oleoo from "oleoo";

const envKey = "THEMOVIEDB_KEY";
const apiKey = process.env[envKey];

if (!apiKey) {
  console.error(`You need to define ${apiKey} env`);
  process.exit(1);
}

const tmdb = new MovieDb(apiKey);

/**
 * Parse the scene / p2p release name from the filename and search the movie on [themoviedb.org](https://www.themoviedb.org/)
 * @param {string} filename
 */
export async function findMovieFromFilename(filename) {
  const release = oleoo.parse(filename);

  const movies = await tmdb.searchMovie({
    query: release.title,
    year: release.year ?? undefined,
  });

  if (!movies.results?.length) {
    throw Error(`no movie found for ${filename}`);
  }

  return movies.results[0];
}
