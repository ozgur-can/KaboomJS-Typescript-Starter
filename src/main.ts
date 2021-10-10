import { init, k } from "./init";
import { gameOver } from "./scenes/gameover";

init();

k.scene("gameover", gameOver);

k.go("gameover");