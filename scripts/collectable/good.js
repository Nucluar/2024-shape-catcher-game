//@ts-check
import { CollecatableItem} from "./collectable-base.js";
 
export class SimpleGoodItem extends CollecatableItem {
    constructor(x =0, y =0){
        super(x, y)

        this.width = 50;
        this.height = 50;

        this.alpha = 0;

        this.color = "hsla(112, 100%, 50%, 0%)";
    }

    update(elapsedTime) {}
    
}
