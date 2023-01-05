class CarbonPair {
    constructor(x1, y1, z1, x2, y2, z2) {

        this.x1 = x1;
        this.y1 = y1;
        this.z1 = z1;
        this.x2 = x2;
        this.y2 = y2;
        this.z2 = z2;
    }

    drawLine(p5, rat){
        p5.line(this.x1 * rat, this.y1 * rat, this.z1 * rat, this.x2 * rat, this.y2 * rat, this.z2 * rat);
    }
}

const carbonArray = new Array(60);
carbonArray[0] = new CarbonPair(1.20352583333333, -0.32037, -3.41132, 2.35040583333333, -0.6607, -2.61255);
carbonArray[1] = new CarbonPair(1.20352583333333, -0.32037, -3.41132, 0.700925833333333, 1.03202, -3.4285);
carbonArray[2] = new CarbonPair(1.20352583333333, -0.32037, -3.41132, 0.0907258333333333, -1.24455, -3.42397);
carbonArray[3] = new CarbonPair(0.700925833333333, 1.03202, -3.4285, 1.38331583333333, 2.0366, -2.64609);
carbonArray[4] = new CarbonPair(0.700925833333333, 1.03202, -3.4285, -0.749254166666667, 0.96979, -3.45699);
carbonArray[5] = new CarbonPair(-0.749254166666667, 0.96979, -3.45699, -1.13003416666667, -0.44456, -3.45638);
carbonArray[6] = new CarbonPair(-0.749254166666667, 0.96979, -3.45699, -1.48635416666667, 1.98887, -2.69734);
carbonArray[7] = new CarbonPair(-1.13003416666667, -0.44456, -3.45638, 0.0907258333333333, -1.24455, -3.42397);
carbonArray[8] = new CarbonPair(-1.13003416666667, -0.44456, -3.45638, -2.32835416666667, -0.85522, -2.69471);
carbonArray[9] = new CarbonPair(0.0907258333333333, -1.24455, -3.42397, 0.116715833333333, -2.47441, -2.64349);
carbonArray[10] = new CarbonPair(2.35040583333333, -0.6607, -2.61255, 3.01514583333333, 0.3348, -1.82737);
carbonArray[11] = new CarbonPair(2.35040583333333, -0.6607, -2.61255, 2.37990583333333, -1.87877, -1.85464);
carbonArray[12] = new CarbonPair(1.38331583333333, 2.0366, -2.64609, 2.53226583333333, 1.6807, -1.86262);
carbonArray[13] = new CarbonPair(1.38331583333333, 2.0366, -2.64609, 0.671965833333333, 3.02092, -1.86505);
carbonArray[14] = new CarbonPair(-1.48635416666667, 1.98887, -2.69734, -0.782664166666667, 3.00568, -1.91255);
carbonArray[15] = new CarbonPair(-1.48635416666667, 1.98887, -2.69734, -2.67107416666667, 1.59948, -1.90852);
carbonArray[16] = new CarbonPair(-2.32835416666667, -0.85522, -2.69471, -2.29877416666667, -2.09949, -1.89452);
carbonArray[17] = new CarbonPair(-2.32835416666667, -0.85522, -2.69471, -3.09644416666667, 0.1643, -1.93104);
carbonArray[18] = new CarbonPair(0.116715833333333, -2.47441, -2.64349, 1.27598583333333, -2.80293, -1.8419);
carbonArray[19] = new CarbonPair(0.116715833333333, -2.47441, -2.64349, -1.05780416666667, -2.90501, -1.88732);
carbonArray[20] = new CarbonPair(3.01514583333333, 0.3348, -1.82737, 3.43308583333333, -0.32732, -0.63384);
carbonArray[21] = new CarbonPair(3.01514583333333, 0.3348, -1.82737, 2.53226583333333, 1.6807, -1.86262);
carbonArray[22] = new CarbonPair(2.53226583333333, 1.6807, -1.86262, 2.57165583333333, 2.35268, -0.59921);
carbonArray[23] = new CarbonPair(0.671965833333333, 3.02092, -1.86505, 1.42294583333333, 3.21388, -0.6447);
carbonArray[24] = new CarbonPair(0.671965833333333, 3.02092, -1.86505, -0.782664166666667, 3.00568, -1.91255);
carbonArray[25] = new CarbonPair(-0.782664166666667, 3.00568, -1.91255, -1.43495416666667, 3.27051, -0.62889);
carbonArray[26] = new CarbonPair(-2.67107416666667, 1.59948, -1.90852, -2.63833416666667, 2.41296, -0.66002);
carbonArray[27] = new CarbonPair(-2.67107416666667, 1.59948, -1.90852, -3.09644416666667, 0.1643, -1.93104);
carbonArray[28] = new CarbonPair(-3.09644416666667, 0.1643, -1.93104, -3.55777416666667, -0.41704, -0.63127);
carbonArray[29] = new CarbonPair(-2.29877416666667, -2.09949, -1.89452, -1.05780416666667, -2.90501, -1.88732);
carbonArray[30] = new CarbonPair(-2.29877416666667, -2.09949, -1.89452, -3.07267416666667, -1.83441, -0.65049);
carbonArray[31] = new CarbonPair(-1.05780416666667, -2.90501, -1.88732, -0.660744166666667, -3.49269, -0.60418);
carbonArray[32] = new CarbonPair(1.27598583333333, -2.80293, -1.8419, 2.37990583333333, -1.87877, -1.85464);
carbonArray[33] = new CarbonPair(1.27598583333333, -2.80293, -1.8419, 0.792135833333333, -3.43832, -0.63731);
carbonArray[34] = new CarbonPair(2.37990583333333, -1.87877, -1.85464, 3.02331583333333, -1.69445, -0.58845);
carbonArray[35] = new CarbonPair(3.43308583333333, -0.32732, -0.63384, 3.43322583333333, 0.32671, 0.63357);
carbonArray[36] = new CarbonPair(3.43308583333333, -0.32732, -0.63384, 3.02331583333333, -1.69445, -0.58845);
carbonArray[37] = new CarbonPair(2.57165583333333, 2.35268, -0.59921, 3.02365583333333, 1.6939, 0.58835);
carbonArray[38] = new CarbonPair(2.57165583333333, 2.35268, -0.59921, 1.42294583333333, 3.21388, -0.6447);
carbonArray[39] = new CarbonPair(1.42294583333333, 3.21388, -0.6447, 0.792555833333333, 3.43818, 0.63719);
carbonArray[40] = new CarbonPair(-1.43495416666667, 3.27051, -0.62889, -0.660244166666667, 3.4927, 0.60424);
carbonArray[41] = new CarbonPair(-1.43495416666667, 3.27051, -0.62889, -2.63833416666667, 2.41296, -0.66002);
carbonArray[42] = new CarbonPair(-2.63833416666667, 2.41296, -0.66002, -3.07240416666667, 1.83466, 0.65075);
carbonArray[43] = new CarbonPair(-3.55777416666667, -0.41704, -0.63127, -3.07267416666667, -1.83441, -0.65049);
carbonArray[44] = new CarbonPair(-3.55777416666667, -0.41704, -0.63127, -3.55760416666667, 0.41752, 0.63168);
carbonArray[45] = new CarbonPair(-3.07267416666667, -1.83441, -0.65049, -2.63855416666667, -2.41265, 0.66025);
carbonArray[46] = new CarbonPair(-0.660744166666667, -3.49269, -0.60418, 0.792135833333333, -3.43832, -0.63731);
carbonArray[47] = new CarbonPair(-0.660744166666667, -3.49269, -0.60418, -1.43543416666667, -3.27033, 0.62898);
carbonArray[48] = new CarbonPair(0.792135833333333, -3.43832, -0.63731, 1.42246583333333, -3.21419, 0.64459);
carbonArray[49] = new CarbonPair(3.02331583333333, -1.69445, -0.58845, 2.57130583333333, -2.35318, 0.59916);
carbonArray[50] = new CarbonPair(3.43322583333333, 0.32671, 0.63357, 3.01511583333333, -0.33468, 1.82746);
carbonArray[51] = new CarbonPair(3.43322583333333, 0.32671, 0.63357, 3.02365583333333, 1.6939, 0.58835);
carbonArray[52] = new CarbonPair(3.02365583333333, 1.6939, 0.58835, 2.38000583333333, 1.87903, 1.85433);
carbonArray[53] = new CarbonPair(0.792555833333333, 3.43818, 0.63719, 1.27582583333333, 2.80294, 1.84201);
carbonArray[54] = new CarbonPair(0.792555833333333, 3.43818, 0.63719, -0.660244166666667, 3.4927, 0.60424);
carbonArray[55] = new CarbonPair(-0.660244166666667, 3.4927, 0.60424, -1.05781416666667, 2.90504, 1.88727);
carbonArray[56] = new CarbonPair(-3.07240416666667, 1.83466, 0.65075, -2.29871416666667, 2.09921, 1.89477);
carbonArray[57] = new CarbonPair(-3.07240416666667, 1.83466, 0.65075, -3.55760416666667, 0.41752, 0.63168);
carbonArray[58] = new CarbonPair(-3.55760416666667, 0.41752, 0.63168, -3.09624416666667, -0.16424, 1.9312);
carbonArray[59] = new CarbonPair(-2.63855416666667, -2.41265, 0.66025, -1.43543416666667, -3.27033, 0.62898);
carbonArray[60] = new CarbonPair(-2.63855416666667, -2.41265, 0.66025, -2.67074416666667, -1.5995, 1.90873);
carbonArray[61] = new CarbonPair(-1.43543416666667, -3.27033, 0.62898, -0.782654166666667, -3.00572, 1.91238);
carbonArray[62] = new CarbonPair(1.42246583333333, -3.21419, 0.64459, 2.57130583333333, -2.35318, 0.59916);
carbonArray[63] = new CarbonPair(1.42246583333333, -3.21419, 0.64459, 0.672035833333333, -3.02075, 1.86516);
carbonArray[64] = new CarbonPair(2.57130583333333, -2.35318, 0.59916, 2.53246583333333, -1.68069, 1.86231);
carbonArray[65] = new CarbonPair(3.01511583333333, -0.33468, 1.82746, 2.53246583333333, -1.68069, 1.86231);
carbonArray[66] = new CarbonPair(3.01511583333333, -0.33468, 1.82746, 2.35046583333333, 0.66109, 2.61243);
carbonArray[67] = new CarbonPair(2.38000583333333, 1.87903, 1.85433, 2.35046583333333, 0.66109, 2.61243);
carbonArray[68] = new CarbonPair(2.38000583333333, 1.87903, 1.85433, 1.27582583333333, 2.80294, 1.84201);
carbonArray[69] = new CarbonPair(1.27582583333333, 2.80294, 1.84201, 0.116425833333333, 2.47442, 2.64354);
carbonArray[70] = new CarbonPair(-1.05781416666667, 2.90504, 1.88727, 0.116425833333333, 2.47442, 2.64354);
carbonArray[71] = new CarbonPair(-1.05781416666667, 2.90504, 1.88727, -2.29871416666667, 2.09921, 1.89477);
carbonArray[72] = new CarbonPair(-2.29871416666667, 2.09921, 1.89477, -2.32813416666667, 0.85486, 2.69487);
carbonArray[73] = new CarbonPair(-3.09624416666667, -0.16424, 1.9312, -2.32813416666667, 0.85486, 2.69487);
carbonArray[74] = new CarbonPair(-3.09624416666667, -0.16424, 1.9312, -2.67074416666667, -1.5995, 1.90873);
carbonArray[75] = new CarbonPair(-2.67074416666667, -1.5995, 1.90873, -1.48595416666667, -1.98888, 2.6973);
carbonArray[76] = new CarbonPair(-0.782654166666667, -3.00572, 1.91238, 0.672035833333333, -3.02075, 1.86516);
carbonArray[77] = new CarbonPair(-0.782654166666667, -3.00572, 1.91238, -1.48595416666667, -1.98888, 2.6973);
carbonArray[78] = new CarbonPair(0.672035833333333, -3.02075, 1.86516, 1.38355583333333, -2.03638, 2.64595);
carbonArray[79] = new CarbonPair(2.53246583333333, -1.68069, 1.86231, 1.38355583333333, -2.03638, 2.64595);
carbonArray[80] = new CarbonPair(2.35046583333333, 0.66109, 2.61243, 1.20342583333333, 0.32117, 3.41124);
carbonArray[81] = new CarbonPair(0.116425833333333, 2.47442, 2.64354, 0.0900558333333332, 1.24457, 3.42399);
carbonArray[82] = new CarbonPair(-2.32813416666667, 0.85486, 2.69487, -1.12998416666667, 0.44381, 3.45636);
carbonArray[83] = new CarbonPair(-1.48595416666667, -1.98888, 2.6973, -0.748464166666667, -0.97009, 3.45684);
carbonArray[84] = new CarbonPair(1.38355583333333, -2.03638, 2.64595, 0.701575833333333, -1.03144, 3.42833);
carbonArray[85] = new CarbonPair(1.20342583333333, 0.32117, 3.41124, 0.701575833333333, -1.03144, 3.42833);
carbonArray[86] = new CarbonPair(1.20342583333333, 0.32117, 3.41124, 0.0900558333333332, 1.24457, 3.42399);
carbonArray[87] = new CarbonPair(0.0900558333333332, 1.24457, 3.42399, -1.12998416666667, 0.44381, 3.45636);
carbonArray[88] = new CarbonPair(-1.12998416666667, 0.44381, 3.45636, -0.748464166666667, -0.97009, 3.45684);
carbonArray[89] = new CarbonPair(-0.748464166666667, -0.97009, 3.45684, 0.701575833333333, -1.03144, 3.42833);

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
        p5.background(255, 255, 200);

        p5.rotateY(p5.radians(i));

        drawC60(p5)
    };
};

function drawC60(p5){

    carbonArray.forEach(c => c.drawLine(p5, 50));
}

export {p5Setup};