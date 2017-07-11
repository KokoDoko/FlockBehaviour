class Game {

    private gameObjects : Array<GameObject> = new Array<GameObject>();
    
    constructor() {
        this.gameObjects.push(new Fenton());

        for(let i = 0;i<10;i++){
           this.gameObjects.push(new Sheep());
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() : void {
        for(let g of this.gameObjects) {
            g.update();
            g.draw();
        }

        requestAnimationFrame(() => this.gameLoop());
    }
}