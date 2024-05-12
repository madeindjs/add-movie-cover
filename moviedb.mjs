import { MovieDb } from "moviedb-promise";
import oleoo from "oleoo";

/**
 * Parse the scene / p2p release name from the filename and search the movie on [themoviedb.org](https://www.themoviedb.org/)
 * @param {string} filename
 * @param {string} tmdbApiKey
 */
export async function findMovieFromFilename(filename, tmdbApiKey) {
  const tmdb = new MovieDb(tmdbApiKey);
  const release = oleoo.parse(filename);

  const movies = await tmdb.searchMovie({
    query: release.title,
    year: release.year ?? undefined,
  });

  if (!movies.results?.length) throw Error(`no movie found for ${filename}`);

  return movies.results[0];
}
