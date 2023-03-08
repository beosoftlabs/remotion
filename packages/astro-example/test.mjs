import assert from "assert";
import { interpolate } from "remotion";
import { Player } from "@remotion/player";
import { VERSION } from "remotion/version";
import { enableSkia } from "@remotion/skia/enable";
import { Lottie } from "@remotion/lottie";
import { MotionBlur } from "@remotion/motion-blur";
import { ThreeCanvas } from "@remotion/three";
import { Gif } from "@remotion/gif";

const val = interpolate(1, [0, 1], [0, 100]);

assert(val === 100);
assert(Boolean(Player));
assert(typeof VERSION === "string");
assert(Boolean(enableSkia));
assert(Boolean(Lottie));
assert(Boolean(Gif));
assert(Boolean(ThreeCanvas));

console.log("ESM works!");
