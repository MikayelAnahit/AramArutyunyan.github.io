export class Player{
    constructor(game){
        this.game = game;
        this.player = document.getElementById('player');
        this.width = 40;
        this.height = 80;
        this.posX = 0;
        this.posY = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 3;
        this.speed = 0;
        this.maxSpeed = 10;

        this.fps = 20;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
    }
    update(keys, deltaTime){
        if (keys.length == 0) this.speed = 0;
        else{
            if(keys.includes('KeyA')){ 
                this.posX += this.speed;
                this.speed = -this.maxSpeed;
            }
            else if(keys.includes('KeyD')) {
                this.posX += this.speed;
                this.speed = this.maxSpeed;
            }
            else if(keys.includes('KeyW')){
                this.posY += this.speed;
                this.speed = -this.maxSpeed;
            }
            else if(keys.includes('KeyS')){
                this.posY += this.speed;
                this.speed = this.maxSpeed;
            }
        }
        if(this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            // Анимация фреймов
        }else{
            this.frameTimer += deltaTime;
        }
    }

    draw(context){
        context.drawImage(this.player, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.posX, this.posY, this.width, this.height);
    }
}