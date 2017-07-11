/// <reference path="gameobject.ts" />

class Sheep extends GameObject{
    
    private xspeed:number = 0;
    private yspeed:number = 0;
    private rndOffset:number = Math.random() * 2 + 1;

    constructor() {
        super((Math.random()>0.3) ? "sheep" : "blacksheep");
    }

    public update() {
        this.x = Math.min(Math.max(this.x + this.xspeed, 75), window.innerWidth - 75);
        this.y = Math.min(Math.max(this.y + this.yspeed, 75), window.innerHeight - 75);

        this.calculateSpeed();
    }

    private calculateSpeed() {
        let xdist:number = this.x - Fenton.instance.x;
        let ydist:number = this.y - Fenton.instance.y;

        let distance:number = Math.sqrt(xdist * xdist + ydist * ydist);
        this.xspeed = xdist/distance * (500/distance) * this.rndOffset;
        this.yspeed = ydist/distance * (500/distance) * this.rndOffset;

        this.facing = (this.xspeed < 0) ? 1 : -1;
    }
}