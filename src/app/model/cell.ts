export class Cell {
    cordX: number;
    cordY: number;
    onFire: boolean;
    burned: boolean;
    
    constructor(cordX: number, cordY: number) {
        this.cordX = cordX;
        this.cordY = cordY;
        this.burned = false;
        this.onFire = false;
    } 
    
    }
    