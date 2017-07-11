/// <reference path="gameobject.ts" />


class Fenton extends GameObject{

    public static instance : Fenton;
    
    public xspeed:number = 0;
    public yspeed:number = 0;
    
    private xtarget:number = 0;
    private ytarget:number = 0;
    
    constructor() {
        super("fenton");
        Fenton.instance = this;
        window.addEventListener("mousemove", (e : MouseEvent) => this.setTarget(e));
        this.xtarget = window.innerWidth/2;
        this.ytarget = window.innerHeight/2; 
    }

    public update() {
        this.x += this.xspeed;
        this.y += this.yspeed;

        this.calculateSpeed();
    }
    
    private calculateSpeed() {
        let xdist:number = this.xtarget - this.x;
        let ydist:number = this.ytarget - this.y;

        this.xspeed = (xdist/20);
        this.yspeed = (ydist/20);

        this.facing = (this.xspeed < 0) ? 1 : -1;
    }

    private setTarget(e : MouseEvent) {
        this.xtarget = e.clientX;
        this.ytarget = e.clientY;    
    }
}