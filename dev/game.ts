class Game {

    private gameObjects : Array<GameObject> = new Array<GameObject>();
    
    constructor() {
        this.gameObjects.push(Fenton.instance);

        for(let i = 0;i<10;i++){
            this.gameObjects.push(new Sheep());
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() : void {
        for(let gameObject of this.gameObjects) {
            gameObject.update();
            gameObject.draw();
        }

        requestAnimationFrame(() => this.gameLoop());
    }
}