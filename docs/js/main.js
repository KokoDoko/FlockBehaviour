class GameObject {
    constructor(tag) {
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._facing = 1;
        this._x = window.innerWidth / 4 + Math.random() * (window.innerWidth / 2);
        this._y = window.innerHeight / 4 + Math.random() * (window.innerHeight / 2);
        let parent = document.getElementsByTagName("game")[0];
        this._div = document.createElement(tag);
        parent.appendChild(this._div);
        this._width = this._div.clientWidth;
        this._height = this._div.clientHeight;
        this.draw();
    }
    get x() { return this._x; }
    set x(value) { this._x = value; }
    get y() { return this._y; }
    set y(value) { this._y = value; }
    get width() { return this._width; }
    set width(v) { this._width = v; }
    get height() { return this._height; }
    set height(v) { this._height = v; }
    get facing() { return this._facing; }
    set facing(v) { this._facing = v; }
    update() {
    }
    draw() {
        this._div.style.transform = `translate(${this._x - this._width / 2}px, ${this._y - this._height / 2}px) scale(${this._facing},1)`;
    }
}
class Fenton extends GameObject {
    constructor() {
        super("fenton");
        this.xspeed = 0;
        this.yspeed = 0;
        this.xtarget = 0;
        this.ytarget = 0;
        Fenton.instance = this;
        window.addEventListener("mousemove", (e) => this.setTarget(e));
        this.xtarget = window.innerWidth / 2;
        this.ytarget = window.innerHeight / 2;
    }
    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.calculateSpeed();
    }
    calculateSpeed() {
        let xdist = this.xtarget - this.x;
        let ydist = this.ytarget - this.y;
        this.xspeed = (xdist / 20);
        this.yspeed = (ydist / 20);
        this.facing = (this.xspeed < 0) ? 1 : -1;
    }
    setTarget(e) {
        this.xtarget = e.clientX;
        this.ytarget = e.clientY;
    }
}
class Game {
    constructor() {
        this.gameObjects = new Array();
        this.gameObjects.push(Fenton.instance);
        for (let i = 0; i < 10; i++) {
            this.gameObjects.push(new Sheep());
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    gameLoop() {
        for (let gameObject of this.gameObjects) {
            gameObject.update();
            gameObject.draw();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
}
window.addEventListener("load", function () {
    new Game();
});
class Sheep extends GameObject {
    constructor() {
        super((Math.random() > 0.3) ? "sheep" : "blacksheep");
        this.xspeed = 0;
        this.yspeed = 0;
        this.rndOffset = Math.random() * 2 + 1;
    }
    update() {
        this.x = Math.min(Math.max(this.x + this.xspeed, 75), window.innerWidth - 75);
        this.y = Math.min(Math.max(this.y + this.yspeed, 75), window.innerHeight - 75);
        this.calculateSpeed();
    }
    calculateSpeed() {
        let xdist = this.x - Fenton.instance.x;
        let ydist = this.y - Fenton.instance.y;
        let distance = Math.sqrt(xdist * xdist + ydist * ydist);
        this.xspeed = xdist / distance * (500 / distance) * this.rndOffset;
        this.yspeed = ydist / distance * (500 / distance) * this.rndOffset;
        this.facing = (this.xspeed < 0) ? 1 : -1;
    }
}
//# sourceMappingURL=main.js.map