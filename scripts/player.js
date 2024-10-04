// @ts-check
import {canvas, ctx} from "./common/canvas.js";
export class Player {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 75;
        this.height = 25;

this.speed = 10;

this.keybinding = {
    up:"ArrowUp",
    down: "ArrowDown",
    right: "ArrowRight",
    left: "ArrowLeft",
}

this.moving = {
    up:false,
    down:false,
    right:false,
    left:false,
}
this.wireupKeyborad();
    }
wireupKeyborad() {
    window.addEventListener("keydown", (e) => {
        console.log(e);

        switch(e.code){
            case this.keybinding.up:
                this.moving.up= false
                break;

                case this.keybinding.down:
                    this.moving.down= false
                    break;

                    case this.keybinding.right:
                        this.moving.right= false
                        break;

                        case this.keybinding.left:
                            this.moving.left= false
                            break;
        }
    })

    window.addEventListener("keyup", (e) => {
        console.log(e);
    })
}

    update() {
        if(this.x <0) {
            this.x = 0;
        }

        if(this.y <0) {
            this.y = 0;
        }

        if(this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width;
        }
        
        if(this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
        }
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}
