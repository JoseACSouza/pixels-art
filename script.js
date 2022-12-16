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