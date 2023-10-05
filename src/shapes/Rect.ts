

export default class Rect {
    private ctx: any;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    constructor(x: number, y: number, width: number, height: number, color: string, ctx: any) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}