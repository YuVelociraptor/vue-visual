const p5Setup = function (p5){

    let i = 0;

    p5.setup = () => {
        const canvas = p5.createCanvas(500, 500);
        canvas.parent('canvas');

        p5.background(255, 255, 200);

        p5.smooth();

        p5.frameRate(60);
    };

    p5.draw = () => {

        p5.background(p5.abs(p5.sin(p5.radians(i))) * 255, 255, 200);
        i = i + 1;
    };
};

export {p5Setup};