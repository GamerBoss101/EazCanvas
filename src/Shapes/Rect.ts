
export default class Rect {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    constructor(x: number, y: number, width: number, height: number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getCenter() {
        return {
            x: this.width / 2,
            y: this.height / 2
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}