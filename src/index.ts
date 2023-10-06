import Rect from "./Shapes/Rect";
import Circle from "./Shapes/Circle";
import Polygon from "./Shapes/Polygon";
import Text from "./Shapes/Text";
import CImage from "./Shapes/Image";

export default class EazCanvas {
    app: Array<any>;
    isRunning: boolean;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(props: any) {

        this.app = [];
        this.isRunning = true;

        if(props.parent) {
            const parent = document.querySelector(props.parent) as HTMLCanvasElement;
            this.canvas = document.createElement('canvas') as HTMLCanvasElement;
            parent?.appendChild(this.canvas);
            this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        } else if(props.canvas) {
            this.canvas = props.canvas;
            this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        } else {
            throw new Error('No canvas or parent provided');
        }

        this.canvas.width = props.width;
        this.canvas.height = props.height;

        this.setBackground(props.background || 'white');

        this.animate();
    }

    setWidth(width: number) {
        this.canvas.width = width;
    }

    getWidth() {
        return this.canvas.width;
    }

    setHeight(height: number) {
        this.canvas.height = height;
    }

    getHeight() {
        return this.canvas.height;
    }

    setBackground(color: string) {
        this.canvas.style.backgroundColor = color;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    stop() {
        this.isRunning = false;
    }

    getShapes() {
        return this.app;
    }

    Rect(x: number, y: number, width: number, height: number, color: string) {
        const rect = new Rect(x, y, width, height, color);
        this.app.push(rect);
        return rect;
    }

    Circle(x: number, y: number, radius: number, color: string) {
        const circle = new Circle(x, y, radius, color);
        this.app.push(circle);
        return circle;
    }

    Polygon(x: number, y: number, color: string, points: Array<any>) {
        const polygon = new Polygon(x, y, color, points);
        this.app.push(polygon);
        return polygon;
    }

    Text(x: number, y: number, text: string, color: string, font: string) {
        const textObj = new Text(x, y, text, color, font);
        this.app.push(textObj);
        return textObj;
    }

    Image(x: number, y: number, width: number, height: number, src: string) {
        const image = new CImage(x, y, width, height, src);
        this.app.push(image);
        return image;
    }

    animate() {
        if(!this.isRunning) return;
        this.clear();
        this.app.forEach((element: any) => {
            element.draw(this.ctx);
        });
        // @ts-ignore
        requestAnimationFrame(this.animate.bind(this));
    }
    
    hits(shape: any, callback: Function) {
        this.canvas.addEventListener('click', (event: any) => {
            const mousePos = this.getMousePos(event);
            if(shape.isPointInside(mousePos)) {
                callback(mousePos);
            }
        });
    }

    getMousePos(event: MouseEvent) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    onClick(callback: Function) {
        this.canvas.addEventListener('click', (event: MouseEvent) => {
            callback(this.getMousePos(event));
        });
    }

    onHover(callback: Function) {
        this.canvas.addEventListener('mousemove', (event: MouseEvent) => {
            callback(this.getMousePos(event));
        });
    }

    onHoverOut(callback: Function) {
        this.canvas.addEventListener('mouseout', (event: MouseEvent) => {
            callback(this.getMousePos(event));
        });
    }
}

export { default as RGB } from "./Colors/RGB";
export { default as HEX } from "./Colors/HEX";
