/*

INPUT is an EMPTY TAG and CANNOT have innerHTML, innerText or textContent

You must USE VALUE instead of innerHTML.

SHIFT + ALT + A - coment and undo coment shortcut

*/

// -- variables

var inputElements = document.querySelectorAll('input');
var formElements = document.querySelectorAll('form');
var labelElements = document.querySelectorAll('label');
var btnElements = document.querySelectorAll('button');
var containerElements = document.querySelectorAll('form > div');

var inputTypeTxt = inputElements[0];
var inputTypeRdo1 = inputElements[1];
var inputTypeRdo2 = inputElements[2];
var inputTypeRdo3 = inputElements[3];
var inputTypeChk = inputElements[4];
var inputTypeSbt = inputElements[5];
var inputTypeBtn = inputElements[6];

var labelRdo0 = labelElements[0];
var labelRdo1 = labelElements[1];
var labelRdo2 = labelElements[2];
var labelChk = labelElements[3];

var firstForm = formElements[0];

var firstBtn = btnElements[0];

var btnStyleArray = [inputTypeSbt, inputTypeBtn, firstBtn];

var lblStyleArray = [labelRdo0, labelRdo1, labelRdo2, labelChk];

console.log(
  inputTypeTxt,
  inputTypeRdo1,
  inputTypeRdo2,
  inputTypeRdo3,
  inputTypeChk,
  inputTypeSbt,
  inputTypeBtn,
  firstForm,
  containerElements,
  btnStyleArray,
  lblStyleArray,
);

// -- variables

// -- code

// change form element

firstForm.style.width = '100%';
firstForm.style.display = 'flex';
firstForm.style.flexDirection = 'column';
firstForm.style.alignItems = 'start';
firstForm.style.justifyContent = 'center';

// change form element

// change iput type text

inputTypeTxt.style.width = '180px';
inputTypeTxt.style.padding = '4px';
inputTypeTxt.style.border = 'none';
inputTypeTxt.style.outline = 'none';
inputTypeTxt.style.backgroundColor = '#ebebeb';

// change iput type text

for (var a = 0; a < containerElements.length; a++) {
  containerElements[a].style.marginBottom = '8px';
  containerElements[a].style.display = 'flex';
  containerElements[a].style.flexDirection = 'column';
  containerElements[a].style.alignItems = 'start';
  containerElements[a].style.justifyContent = 'start';
  if (a === 2) {
    containerElements[a].style.flexDirection = 'row';
    containerElements[a].style.alignItems = 'center';
    containerElements[a].style.justifyContent = 'center';
  }
}

for (var b = 0; b < btnStyleArray.length; b++) {
  btnStyleArray[b].style.border = 'none';
  btnStyleArray[b].style.width = '180px';
  btnStyleArray[b].style.padding = '8px 0';
  btnStyleArray[b].style.fontWeight = 'bold';
  btnStyleArray[b].style.color = 'white';
  btnStyleArray[b].style.backgroundColor = 'royalblue';
}

for (var c = 0; c < lblStyleArray.length; c++) {
  lblStyleArray[c].style.marginLeft = '8px';
}

let copyText = () => {
  inputTypeTxt.select();
  inputTypeTxt.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputTypeTxt.value);
  alert('You have just copied the text inside the input element!');
};

// -- code
