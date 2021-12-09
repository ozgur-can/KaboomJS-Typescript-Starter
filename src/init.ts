import { KaboomCtx } from "./types";

let k: KaboomCtx;

const init = () => {
  //@ts-ignore
  k = kaboom({
    global: true,
    crisp: true,
    background: [100, 50, 100],
    letterbox: true,
  });

  // k.debug.inspect = true;

  // k.layers(["ui"])

  k.loadSprite("guy", "src/assets/guy.png");
};

export { init, k };
