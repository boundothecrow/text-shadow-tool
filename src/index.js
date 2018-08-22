import './css/index.css';

/* Select elements  */
// Editable texts
var editTop = document.querySelector('#editTop');       // Text box for
var editBottom = document.querySelector('#editBottom'); // editing the texts
var inputTop = document.querySelector('#topText');          // Text box for
var inputBottom = document.querySelector('#bottomText');    // editing shadows
// The header and subheader texts
var topTxt = document.querySelector('#top');        // The top text
var bottomTxt = document.querySelector('#bottom');  // and the bottom text

// Default values
var topShadow = '0 3px 4px black, 0 6px 8px black';
var bottomShadow = '0 1px 2px black, 0 2px 4px black';
var textTop = 'This is a sample header';
var textBottom = 'Bottom Text'

// Apply the shadows
topTxt.style.textShadow = topShadow;
bottomTxt.style.textShadow = bottomShadow;

// Apply the default text
editTop.value = textTop;
editBottom.value = textBottom;
topTxt.innerHTML = textTop;
bottomTxt.innerHTML = textBottom;
inputTop.value = topShadow;
inputBottom.value = bottomShadow;


// Every time the user releases the key, update the CSS
inputTop.addEventListener('keyup', (e) => {
    topShadow = e.target.value;
    topTxt.style.textShadow = topShadow;

});

inputBottom.addEventListener('keyup', (e) => {
    bottomShadow = e.target.value;
    bottomTxt.style.textShadow = bottomShadow;
});

// Every time the user release the key within the text box, update the header text
editTop.addEventListener('keyup', (e) => {
    textTop = e.target.value;
    topTxt.innerHTML = textTop;
});

editBottom.addEventListener('keyup', (e) => {
    textBottom = e.target.value;
    bottomTxt.innerHTML = textBottom;
});