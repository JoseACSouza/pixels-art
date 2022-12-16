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
buttons.style.width='15%';
buttons.style.margin='12px auto';
const buttonRandomColor = document.createElement('button');
buttonRandomColor.id = 'button-random-color';
buttonRandomColor.innerHTML = 'Cores aleatórias';
buttonRandomColor.style.marginRight ='10%';
buttons.appendChild(buttonRandomColor);
buttonRandomColor.addEventListener('click', () => {
    for (let index = 1; index < palleteElement.length; index += 1) {
        let randomRGB = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
        localStorage.setItem(`cor${index}`, randomRGB);
        palleteElement[index].style.backgroundColor = randomRGB;
    }
})

