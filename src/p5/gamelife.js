let playFlag = false;
let i = 0;

const p5Setup = function (p5){

    p5.setup = () => {

        const canvas = p5.createCanvas(500, 500);
        canvas.parent('canvas');

        p5.smooth();

        p5.frameRate(60);
    }

    p5.draw = () => {

        if(playFlag){

            i = i + 1;
        }

        p5.background(255 * p5.abs(p5.sin(p5.radians(i * 0.7))), 255 * p5.abs(p5.sin(p5.radians(i * 1.1))), 255 * p5.abs(p5.sin(p5.radians(i * 1.3))));
    }
}

const startP5 = () => {

    playFlag = !playFlag;
}

export {p5Setup, startP5};