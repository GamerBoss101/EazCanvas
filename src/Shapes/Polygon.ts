
export default class Polygon {
    x: number;
    y: number;
    color: string;
    points: Array<any>;
    constructor(x: number, y: number, color: string, points: Array<any>,) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.points = points;
    }
    addPoint(x: number, y: number) {
        this.points.push({ x, y });
    }
    draw(ctx: CanvasRenderingContext2D) {
        const polygon = new Path2D();
        polygon.moveTo(this.points[0].x, this.points[0].y);
        this.points.forEach((point: any) => {
            polygon.lineTo(point.x, point.y);
        });
        polygon.closePath();
        ctx.fillStyle = this.color;
        ctx.fill(polygon);
    }
}