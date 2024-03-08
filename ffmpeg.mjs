import { $ } from "execa";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

function getTmpFile(ext) {
  return path.join(os.tmpdir(), `movie-cover.${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.${ext}`);
}

/**
 * Use [ffmpeg](https://ffmpeg.org/) to add a cover to the file.
 *
 * @param {string} file
 * @param {string} cover
 */
export async function addCoverToVideo(file, cover) {
  const tmpFile = getTmpFile(path.extname(file));

  const { stdout, stderr, failed } =
    await $`ffmpeg -i ${file} -attach ${cover} -map 0 -c copy -metadata:s:t mimetype="image/jpg" -metadata:s:t:0 filename="cover.jpg" ${tmpFile}`;

  if (failed) throw Error(stderr);

  await fs.rename(tmpFile, file);
}
