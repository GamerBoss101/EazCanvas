
export default class RGB {
    r: number | undefined;
    g: number | undefined;
    b: number | undefined;
    constructor(r: number | string, g: number, b: number) {

        if(typeof r === 'string') {
            this.parse(r);
            return;
        }
        
        this.r = r;
        this.g = g;
        this.b = b;
    }

    getR(): number | undefined {
        return this.r;
    }

    getG(): number | undefined {
        return this.g;
    }

    getB(): number | undefined {
        return this.b;
    }

    parse(text: string) {
        const rgb = text.split(',');
        this.r = parseInt(rgb[0].replace('rgb(', ''));
        this.g = parseInt(rgb[1]);
        this.b = parseInt(rgb[2].replace(')', ''));
    }

    toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}