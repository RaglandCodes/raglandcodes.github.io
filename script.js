const colours = ['#004D40', ' #212121', ' #BF360C', ' #1B5E20', '#1A237E'];
let randomColor = colours[Math.floor(Math.random() * colours.length)];

console.log(`${randomColor} <== randomColor\n\n`);

let root = document.documentElement;
root.style.setProperty('--accent-colour', randomColor);
