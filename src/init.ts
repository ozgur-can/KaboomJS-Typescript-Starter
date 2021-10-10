let k: KaboomCtx;

const init = () => {
  k = kaboom({
    global: true,
    crisp: true,
    clearColor: [0],
    letterbox: true,
  });

  // k.debug.inspect = true;

  // k.layers(["ui"])

  k.loadSprite("guy", "src/assets/guy.png");
};

export { init, k };
