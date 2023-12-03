/*
INTEGRANTES:
Brenda Gobira Valença - 2020025038
Gabriela Emanuele de Araújo Amorim - 2020011260
*/ 

var tam = 1600;
var isShowingBorder = true;
var color = "rgb(255, 255, 255)";
var quadro = document.querySelector(".areaTrabalho");
var conteinerCoresPreSelecionadas = document.getElementById("coresPreSelecionadas");
var isClicking = false;

//Criação da área do pixel art
for (let i = 0; i < tam; i++) {
  let item = document.createElement("div");
  quadro.appendChild(item);
}

//Seleção de cor por meio do input de cor
var seletorDeCor = document.getElementById("inputCor");
seletorDeCor.addEventListener('change', (ev) => {
  color = hexToRgb(ev.target.value);
});

//Lógica para as opções de cores pré selecionadas
var coresPreSelecionadas =  conteinerCoresPreSelecionadas.children;
var corAtualSelecionada = null;
for(let item of coresPreSelecionadas) {
  item.addEventListener("click", () => {
    color = item.style.backgroundColor;
    item.classList.add('corSelecionada');
    if (corAtualSelecionada) {
      corAtualSelecionada.classList.remove('corSelecionada');
    }
    corAtualSelecionada = item;
  });
}

quadro.addEventListener('mousedown', () => {
  isClicking = true;
});

quadro.addEventListener('mouseup', () => {
  isClicking = false;
});

//Lógica para pintura dos quadros 
var quadrantes = quadro.children;
var backgroundColor = "rgba(241, 236, 236, 0.9)";
for (let item of quadrantes) {
  item.addEventListener("click", () => {
    if (!isClicking) {
      if (item.style.backgroundColor != color) {
        item.style.backgroundColor = color;
      }
      else {
        item.style.backgroundColor = backgroundColor;
      }
    }
  });

  item.addEventListener('mouseenter', () => {
    if (isClicking) {
      item.style.backgroundColor = color;
    }
  });
}

// Função para converter código hex em rbg 
// Fonte: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}

//Lógica para mostrar ou esconder o grid
function mostraGrid() {
  for (let item of quadrantes) {
    if (isShowingBorder) {
      item.style.border = "0px";
    }
    else {
      item.style.border = "1px solid white";
    }
  }
  isShowingBorder = !isShowingBorder;
}