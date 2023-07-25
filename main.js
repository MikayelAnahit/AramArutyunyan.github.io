import { Player } from "./sprite.js";
import { Input } from "./input.js";
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 16 * 160;
canvas.height = 16*160;
class Game{
    constructor(){
        this.player = new Player(this);
        this.input = new Input();
    }

    update(deltaTime){
        this.player.update(this.input.keys, deltaTime);
    }
    draw(context){
        this.player.draw(context);
    }
}



var lastTime = 0;
var game = new Game();
function animate(timeStep){
    const deltaTime = timeStep - lastTime;
    lastTime = timeStep;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    game.draw(ctx);
    game.update(deltaTime);
    requestAnimationFrame(animate);
}

animate(0);