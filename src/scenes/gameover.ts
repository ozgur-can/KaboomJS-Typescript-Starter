import { k } from "../init";

const gameOver = () => {
  k.add([
    k.pos(k.width() * 0.5, k.height() * 0.5),
    k.text("game is over", { size: k.height() / 20 }),
    k.color(k.rand(0, 255), k.rand(0, 255), k.rand(0, 255)),
    k.origin("center"),
    k.shake(10),
  ]);

  k.mouseClick(() => k.go("example"));
};

export { gameOver };
