# Movie cover

[![npm version](https://badge.fury.io/js/movie-cover.svg)](https://badge.fury.io/js/movie-cover)

Add covers to movies files:

1. Parse the scene / p2p release name from the filename
2. search the movie on [themoviedb.org](https://www.themoviedb.org/)
3. Use [ffmpeg](https://ffmpeg.org/) to add a cover to the file

## Install

```sh
npm i movie-cover
```

## Usage

### CLI

```sh
THEMOVIEDB_KEY="YOUR-API-KEY" movie-cover ./movies/Halloween.II.2009.THEATRICAL.Cut.MULTi3.1080p.Bluray.HDLight-Zone80.mkv
```

### Lib

```js
import { addCoverToMovieFile } from "movie-cover";

await addCoverToMovieFile(
  "./movies/Halloween.II.2009.THEATRICAL.Cut.MULTi3.1080p.Bluray.HDLight-Zone80.mkv",
  "YOUR-API-KEY"
);
```

## Todo

- [ ] support `.mp4` files (and maybe other formats)
- [ ] improve the TUI using [terminal-image](https://www.npmjs.com/package/terminal-image) to ask confirmation before doing the change
