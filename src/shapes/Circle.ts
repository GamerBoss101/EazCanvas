
export default class Circle {
    private ctx: any;
    x: number;
    y: number;
    radius: number;
    color: string;

    constructor(x: number, y: number, radius: number, color: string, ctx: any) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}