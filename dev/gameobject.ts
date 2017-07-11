class GameObject {
    private _x      : number = 0;
    private _y      : number = 0;
    private _width  : number = 0;
    private _height : number = 0;
    private _facing : number = 1;
    private _div    : HTMLElement;

    public get x(): number          { return this._x;       }
    public set x(value: number)     { this._x = value;      }

    public get y(): number          { return this._y;       }
    public set y(value: number)     { this._y = value;      }

    public get width() : number     { return this._width;   }
    public set width(v : number)    { this._width = v;      }
    
    public get height() : number    { return this._height;  }
    public set height(v : number)   { this._height = v;     }

    public get facing() : number    { return this._facing;  }
    public set facing(v : number)   { this._facing = v;     }

    constructor(tag: string) {
        this._x = window.innerWidth/4 + Math.random() * (window.innerWidth/2);
        this._y = window.innerHeight/4 + Math.random() * (window.innerHeight/2);

        let parent:HTMLElement = <HTMLElement> document.getElementsByTagName("game")[0];

        this._div = document.createElement(tag);
        parent.appendChild(this._div);

        this._width  = this._div.clientWidth;
        this._height = this._div.clientHeight;

        this.draw();
    }
    
    public update() : void {
        
    }

    public draw() : void {
        this._div.style.transform = `translate(${this._x-this._width/2}px, ${this._y-this._height/2}px) scale(${this._facing},1)`;
    }

}