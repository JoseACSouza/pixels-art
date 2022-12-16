window.onload = () => {
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
const palleteSection = document.getElementById('pallete');
const addPallete = document.createElement('div');
addPallete.id = 'color-palette';
palleteSection.appendChild(addPallete);
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
palleteElement[1].style.backgroundColor = 'blue';
palleteElement[2].style.backgroundColor = 'yellow';
palleteElement[3].style.backgroundColor = 'red';


//Requisito 3
palleteElement[0].style.backgroundColor = 'black';


//Requisito 4
const buttons = document.getElementById('buttons');
buttons.style.width = '15%';
buttons.style.margin = '12px auto';
const buttonRandomColor = document.createElement('button');
buttonRandomColor.id = 'button-random-color';
buttonRandomColor.innerHTML = 'Cores aleatórias';
buttonRandomColor.style.marginRight = '10%';
buttons.appendChild(buttonRandomColor);
buttonRandomColor.addEventListener('click', () => {
    for (let index = 1; index < palleteElement.length; index += 1) {
        let randomRGB = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
        localStorage.setItem(`cor${index}`, randomRGB);
        palleteElement[index].style.backgroundColor = randomRGB;
    }
})


//Requisito 5
for (let index = 1; index < palleteElement.length; index += 1) {
    let rgb = localStorage.getItem(`cor${index}`);
    palleteElement[index].style.backgroundColor = rgb;
}

//Requisito 6 e 7
const addBoard = document.getElementById('table');
let size = 5;
const pixelBoard = document.createElement('div');
addBoard.appendChild(pixelBoard);
pixelBoard.id = 'pixel-board';
pixelBoard.style.backgroundColor = 'white';
pixelBoard.style.width = '210px';
pixelBoard.style.height = '210px';
pixelBoard.style.margin = '0 auto';
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
        if (target.path[0].classList.length == 2) {
            target.path[0].classList.remove('selected');
        } else {
            for (let index2 = 0; index2 < palleteElement.length; index2 += 1) {
                palleteElement[index2].classList.remove('selected');
            }
            target.path[0].classList.add('selected');

        }
    })
}

// Requisito 10
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
const saveBoard = document.getElementsByClassName('pixel');

const attPixelBoard = () => {
    const pixelSaved = [];
    for (let index = 0; index < saveBoard.length; index += 1) {
        pixelSaved.push(saveBoard[index].style.backgroundColor);
    }
    localStorage.setItem('pixelBoard', JSON.stringify(pixelSaved));
}

for (let index = 0; index < saveBoard.length; index += 1) {
    saveBoard[index].style.backgroundColor = JSON.parse(localStorage.getItem('pixelBoard'))[index];
}
}