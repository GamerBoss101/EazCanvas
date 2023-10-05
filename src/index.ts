// Importing all shapes
import Rect from "./shapes/Rect";
import Circle from "./shapes/Circle";

export class EazCanvas {
    app: any[];
    canvas: HTMLCanvasElement;
    ctx: any;
    constructor(obj: any) {

        this.app = [];
        this.canvas = obj.canvas as HTMLCanvasElement;

        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = obj.width;
        this.canvas.height = obj.height;
        this.canvas.style.backgroundColor = obj.backgroundColor;

    }

    add(obj: any) {
        this.app.push(obj);
    }

    remove(obj: any) {
        this.app.splice(this.app.indexOf(obj), 1);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    requestAnimationFrame(): number {
        return window.requestAnimationFrame(() => {
            this.clear();
            this.app.forEach((obj) => {
                obj.draw();
            });
            this.requestAnimationFrame();
        });
    }

    start() {
        this.requestAnimationFrame();
    }

    stop() {
        window.cancelAnimationFrame(this.requestAnimationFrame());
    }

    Rect(obj: any) {
        let rect = new Rect(obj.x, obj.y, obj.width, obj.height, obj.color, this.ctx);
        this.add(rect);
        return rect;
    }

    Circle(obj: any) {
        let circle = new Circle(obj.x, obj.y, obj.radius, obj.color, this.ctx);
        this.add(circle);
        return circle;
    }
}