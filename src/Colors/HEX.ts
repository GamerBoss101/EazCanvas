// HEX color class
import RGB from './RGB';

export default class HEX {
    code: string;
    constructor(code: string) {
        this.code = code;
    }
    parse(text: string | RGB) {
        if(text instanceof RGB) {
            this.code = this.rgbToHex(text.r, text.g, text.b);
            return;
        }
        this.code = text;
    }

    rgbToHex(r: number = 0, g: number = 0, b: number = 0) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    componentToHex(c: number) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    toString() {
        return this.code;
    }
}