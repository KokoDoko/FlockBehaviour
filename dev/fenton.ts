/// <reference path="gameobject.ts" />


class Fenton extends GameObject{

    public xspeed:number = 0;
    public yspeed:number = 0;
    private xtarget:number = 0;
    private ytarget:number = 0;
    private static _instance : Fenton;

    public static get instance() : Fenton {
        if(!this._instance) this._instance = new Fenton();
        return Fenton._instance;
    }

    private constructor() {
        super("fenton");
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