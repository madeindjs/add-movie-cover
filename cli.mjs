#!/usr/bin/env node
import process from "node:process";
import { addCoverToMovieFile } from "./lib.mjs";

const envKey = "THEMOVIEDB_KEY";
const apiKey = process.env[envKey];

if (!apiKey) {
  console.error(`You need to define ${apiKey} env`);
  process.exit(1);
}

for (const filepath of process.argv.slice(2)) {
  try {
    await addCoverToMovieFile(filepath, apiKey);
    console.log(`${filepath} updated`);
  } catch (error) {
    console.error(`Could not add cover for ${filepath} : ${error}`);
  }
}
