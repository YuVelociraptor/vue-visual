const p5Setup = function (p5){

    p5.setup = () => {

        const canvas = p5.createCanvas(500, 500);
        canvas.parent('canvas');

        p5.background(255, 255, 200);

        p5.smooth();

        p5.frameRate(60);
    }

    p5.draw = () => {

    }
}

export {p5Setup};