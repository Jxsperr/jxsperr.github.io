const text = ['Welcome to my site!', 'Willkommen auf meiner Seite!'];

let i = 0;
let lang = 0;
const speed = 75;


window.onload = function() {
    writeText();
}

function writeText() {
    if (i < text[lang].length) {
        document.getElementById('typewriter').innerHTML += text[lang].charAt(i);
        i++;
        setTimeout(writeText, speed);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (i >= 0) {
        document.getElementById('typewriter').innerHTML =
        document.getElementById('typewriter').innerHTML.slice(0, -1);
        i--;
        setTimeout(deleteText, speed);
    } else {
        if (lang == 0) {
            lang = 1;
        } else {
            lang = 0;
        }
        setTimeout(writeText, 250);
    }
}
