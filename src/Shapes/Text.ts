
export default class Text {
    x: number;
    y: number;
    text: string;
    color: string;
    font: string;
    constructor(x: number, y: number, text: string, color: string, font: string) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color;
        this.font = font;
    }

    setText(text: string) {
        this.text = text;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
    }
}