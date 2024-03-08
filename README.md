# Movie cover

Add covers to movies files:

1. Parse the scene / p2p release name from the filename
2. search the movie on [themoviedb.org](https://www.themoviedb.org/)
3. Use [ffmpeg](https://ffmpeg.org/) to add a cover to the file

## Setup

```sh
git clone https://github.com/madeindjs/add-movie-cover.git
cd add-movie-cover
npm i
# optional - link the script to use it as `movie-cover`
npm link
```

## Usage

```sh
THEMOVIEDB_KEY="YOUR-API-KEY" node main.mjs ./movies/Halloween.II.2009.THEATRICAL.Cut.MULTi3.1080p.Bluray.HDLight-Zone80.mkv
```

## Todo

- [ ] support `.mp4` files (and maybe other formats)
- [ ] improve the TUI using [terminal-image](https://www.npmjs.com/package/terminal-image) to ask confirmation before doing the change
- [ ] publish to NPM
