//@ts-check
import { canvas, ctx } from "./common/canvas.js";
import {Player } from "./player.js";
//import { SimpleGoodItem } from "./collectable/good.js";
import { SimpleGoodItem } from "./collectable/good.js";
//let s1 = new SimpleGoodItem
//s1.
let item1 = new SimpleGoodItem(canvas.width / 2, canvas.height / 2)

let player = new Player();

let lastTimestamp = 0;

function gameLoop(timestamp) {
    let elapsedTime = timestamp - lastTimestamp;
lastTimestamp = timestamp;

ctx.clearRect(0, 0, canvas.width, canvas.height);

player.update();
player.draw();

item1.update();
item1.draw();

    window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);