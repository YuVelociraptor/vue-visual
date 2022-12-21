const p5Setup = function (p5){

    let i = 0;

    p5.setup = () => {
        const canvas = p5.createCanvas(500, 500, p5.WEBGL);
        canvas.parent('canvas');

        p5.background(255, 255, 200);

        p5.smooth();

        p5.frameRate(60);
    };

    p5.draw = () => {

        i = i + 1;
        //p5.background(p5.abs(p5.sin(p5.radians(i))) * 255, 255, 200);
        p5.background(255, 255, 200);

        p5.rotateX(p5.radians(i));

        // p5.line(-100, -100, 100 - i, -100, 100, 100 - i);
        // p5.line(-100, 100, 100 - i, 100, 100, 100 - i);
        // p5.line(100, 100, 100 - i, 100, -100, 100 - i);
        // p5.line(100, -100, 100 - i, -100, -100, 100 - i);

        p5.line(-100, -100, 0, -100, 100, 0);
        p5.line(-100, 100, 0, 100, 100, 0);
        p5.line(100, 100, 0, 100, -100, 0);
        p5.line(100, -100, 0, -100, -100, 0);
    };
};

export {p5Setup};