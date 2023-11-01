const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
let img;

function preload(){
    img = loadImage('roshni.jpg');
}

function setup(){
    noCanvas();
    img.loadPixels();
    for (let j = 0; j < img.height; j++) {
        let row = "";
        for (let i = 0; i < img.width; i++) {
        const pixelIndex = (i + j * img.width) * 4;
        const r = img.pixels[pixelIndex + 0];
        const g = img.pixels[pixelIndex + 1];
        const b = img.pixels[pixelIndex + 2];

        const avg = (r + g + b) / 3;

        const len = density.length;
        const charIndex = floor(map(avg, 0, 255, len - 1, 0));

        const c = density.charAt(charIndex);
        if (c == " ") row += "\u00A0";
        else row += c;
        }
        
        const container = document.querySelector('.container');
        const newDiv = document.createElement('div');
        const textNode = document.createTextNode(row);
        newDiv.appendChild(textNode);
        container.appendChild(newDiv);
    }
}

setTimeout(() => {
    console.log(document.querySelector('.container').innerHTML);
}, 1000)