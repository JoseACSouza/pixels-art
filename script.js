// window.onload = () => {
//Requisito 1
const titleFunction = () => {
    const addtitle = document.getElementsByTagName('header')[0];
    const title = document.createElement('h1');
    title.innerHTML = 'Paleta de Cores';
    title.id = 'title';
    title.style.textAlign = 'center';
    addtitle.appendChild(title);
}
titleFunction();

//Requisito 2
const paletteSection = document.getElementById('palette');
const addPallete = document.createElement('div');
addPallete.id = 'color-palette';
paletteSection.appendChild(addPallete);
const pallete = document.getElementById('color-palette');
pallete.style.width = '19%';
pallete.style.margin = '12px auto';

;

for (let index = 0; index < 4; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    addPallete.appendChild(color);
}

const palleteElement = document.getElementsByClassName('color');
for (let index = 0; index < 4; index += 1) {
    palleteElement[index].style.border = "1px solid black";
    palleteElement[index].style.padding = '30px';
    palleteElement[index].style.display = 'inline-block';
}
palleteElement[1].style.backgroundColor = 'rgb(0, 0, 255)';
palleteElement[2].style.backgroundColor = 'rgb(0, 255, 0)';
palleteElement[3].style.backgroundColor = 'rgb(255, 0, 0)';


//Requisito 3
palleteElement[0].style.backgroundColor = 'rgb(0, 0, 0)';
let colorPalette = [];
if( localStorage.getItem('status') == "0"){
    colorPalette[0]= 'black';
}else {    
    for(let index = 0; index < palleteElement.length; index+=1){
    colorPalette.push(palleteElement[index].style.backgroundColor);
    localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
}}

//Requisito 4
const buttons = document.getElementById('buttons');
buttons.style.width='18%';
buttons.style.margin='12px auto';
const buttonRandomColor = document.createElement('button');
buttonRandomColor.id = 'button-random-color';
buttonRandomColor.innerHTML = 'Cores aleatórias';
buttonRandomColor.style.marginRight = '10%';
buttons.appendChild(buttonRandomColor);
buttonRandomColor.addEventListener('click', () => {
    for (let index = 1; index < palleteElement.length; index += 1) {
        let randomRGB = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
        colorPalette[index]= randomRGB;
        localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
        palleteElement[index].style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'))[index];
    }
})


//Requisito 5
for (let index = 0; index < palleteElement.length; index += 1) {
    palleteElement[index].style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'))[index];
}


//Requisito 6 e 7
let size = 5;
if (localStorage.getItem('status') ==0){
    size = JSON.parse(localStorage.getItem('boardSize'));
        localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
}
console.log(size);
const addBoard = document.getElementById('table');
const pixelBoard = document.createElement('div');
addBoard.appendChild(pixelBoard);
pixelBoard.id = 'pixel-board';
pixelBoard.style.backgroundColor = 'white';
pixelBoard.style.width = `${size*42}px`;
pixelBoard.style.height = `${size*42}px`;
pixelBoard.style.margin = '0 auto';
pixelBoard.style.marginBottom = '10px';
pixelBoard.style.border = '1px solid black';

for (let index = 0; index < size; index += 1) {
    const line = document.createElement('div');
    pixelBoard.appendChild(line);
    line.id = 'line';
    line.style.width = '100%';
    line.style.height = '42px';
    for (let index2 = 0; index2 < size; index2 += 1) {
        const pixel = document.createElement('div');
        line.appendChild(pixel);
        pixel.className = 'pixel';
        pixel.style.width = '40px';
        pixel.style.height = '40px';
        pixel.style.border = '1px solid black';
        pixel.style.display = 'inline-block';
        pixel.style.backgroundColor = 'white';
    }
}
//Requisito 8
const initialColor = document.getElementsByClassName('color')[0];
initialColor.classList.add('selected');

//Requisito 9
for (let index = 0; index < palleteElement.length; index += 1) {
    palleteElement[index].addEventListener('click', (target) => {
            for (let index2 = 0; index2 < palleteElement.length; index2 += 1) {
                palleteElement[index2].classList.remove('selected');
            }
            target.path[0].classList.add('selected');
    })
}

// Requisito 10
const saveBoard = document.getElementsByClassName('pixel');
const pixel = document.getElementsByClassName('pixel');
for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', (target) => {
        const selectedColor = document.getElementsByClassName('selected');
        if ((target.path[0].style.backgroundColor === 'white') && (selectedColor.length != 0)) {
            target.path[0].style.backgroundColor = selectedColor[0].style.backgroundColor;
        } else if (selectedColor.length == 0) {
            target.path[0].style.backgroundColor = 'white';
        }
        else { target.path[0].style.backgroundColor = selectedColor[0].style.backgroundColor; }
        attPixelBoard();
    })
}



//Requisito 11
const buttonClear = document.createElement('button');
buttonClear.id = 'clear-board';
buttonClear.innerHTML = 'Limpar';
buttons.appendChild(buttonClear);
buttonClear.addEventListener('click', (target) => {
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = 'white';
        attPixelBoard();

    }
})

//Requisito 12
const attPixelBoard = () => {
    const pixelSaved = [];
    for (let index = 0; index < pixel.length; index += 1) {
        pixelSaved.push(pixel[index].style.backgroundColor);
    }
    localStorage.setItem('pixelBoard', JSON.stringify(pixelSaved));
}

if (localStorage.getItem('status') == "0") {

} else {attPixelBoard();}
for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = JSON.parse(localStorage.getItem('pixelBoard'))[index];
}

// Requisito 13
const inputBoardSize = document.createElement('input');
inputBoardSize.type = 'number';
inputBoardSize.min = '1';
inputBoardSize.id = 'board-size';
inputBoardSize.style.width = '35px';
inputBoardSize.style.marginLeft = '33%';
inputBoardSize.style.marginTop = '12px';
const generateBoard = document.createElement('button');
generateBoard.id = 'generate-board';
generateBoard.innerHTML = 'VQV';
buttons.appendChild(inputBoardSize);
buttons.appendChild(generateBoard);

generateBoard.addEventListener("click", ()=>{
    const input = document.getElementById('board-size');
    if (input.value <= 0 ){
        alert('Board inválido!');
    } else if (input.value <=5){
        localStorage.setItem('boardSize', 5);
        location.reload();
    } else if (input.value >=50){
        localStorage.setItem('boardSize', 50);
        location.reload();
    }else { size = input.value;
        localStorage.setItem('boardSize', JSON.stringify(size));
        location.reload();
    }
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = 'white';
        attPixelBoard();

    }

})

//Define quando será utilizado o valor inicial
let status = 0;
localStorage.setItem('status', status);
// }