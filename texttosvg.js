
var fonts = ['Italianno-Regular.ttf', 'YatraOne-Regular.ttf'];

for (let index = 0; index < fonts.length; index++) {
    const element = fonts[index];
    console.log('\n\n-----------------------------\n' + element + '\n-----------------------------\n\n')
    const TextToSVG = require('text-to-svg');
    const textToSVG = TextToSVG.loadSync(element);
 
    const attributes = {fill: 'red', stroke: 'black', id:'letter-3'};
    const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};
 
    const svg = textToSVG.getSVG('B', options);
 
    console.log(svg);

    console.log('\n\n-----------------------------\n' + element + ' caps B\n-----------------------------\n\n')
    const TextToSVG1 = require('text-to-svg');
    const textToSVG1 = TextToSVG1.loadSync(element);
 
    const attributes1 = {fill: 'red', stroke: 'black', id:'letter-3'};
    const options1 = {x: 30, y: 30, fontSize: 72, anchor: 'top', attributes: attributes1};
 
    const svg1 = textToSVG1.getSVG('Blurred Perceptions', options1);
 
    console.log(svg1);
    
}
