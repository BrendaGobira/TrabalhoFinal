/*
  INTEGRANTES:
  Brenda Gobira Valença - 2020025038
  Gabriela Emanuele de Araújo Amorim - 2020011260
*/ 

import { useEffect, useRef, useState } from "react";
import './NewProject.css';
import BackgroundList from "../../components/BackgroundList";

var tam = 1600;

// Função para converter código hex em rbg 
// Fonte: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}

function NewProject({favBackgrounds = []}) {
  const quadro = useRef(null);
  const conteinerCoresPreSelecionadas = useRef(null);
  const isClicking = useRef(false);
  const color = useRef("rgb(255, 255, 255)");
  const isShowingBorder = useRef(true);
  const quadrantes = useRef(null);
  const [currentBackground, setCurrentBackground] = useState(null);

  const initializeGrid = () => {
    quadro.current.innerHTML = "";

    //Criação da área do pixel art
    for (let i = 0; i < tam; i++) {
      let item = document.createElement("div");
      quadro.current.appendChild(item);
    }

    //Lógica para as opções de cores pré selecionadas
    var coresPreSelecionadas =  conteinerCoresPreSelecionadas.current.children;
    var corAtualSelecionada = null;
    for(let item of coresPreSelecionadas) {
      item.addEventListener("click", () => {
        color.current = item.style.backgroundColor;
        item.classList.add('corSelecionada');
        if (corAtualSelecionada) {
          corAtualSelecionada.classList.remove('corSelecionada');
        }
        corAtualSelecionada = item;
      });
    }

    quadro.current.addEventListener('mousedown', () => {
      isClicking.current = true;
    });

    document.addEventListener('mouseup', () => {
      isClicking.current = false;
    });

    //Lógica para pintura dos quadros 
    quadrantes.current = quadro.current.children;
    var backgroundColor = "rgba(241, 236, 236, 0.9)";
    for (let item of quadro.current.children) {
      item.addEventListener("click", () => {
        if (!isClicking.current) {
          if (item.style.backgroundColor != color.current) {
            item.style.backgroundColor = color.current;
          }
          else {
            item.style.backgroundColor = backgroundColor;
          }
        }
      });

      item.addEventListener('mouseenter', () => {
        if (isClicking.current) {
          item.style.backgroundColor = color.current;
        }
      });
    }
  }

  useEffect(() => {
    initializeGrid();
  }, []);

  function mostraGrid() {
    for (let item of quadrantes.current) {
      if (isShowingBorder.current) {
        item.style.border = "0px";
      }
      else {
        item.style.border = "1px solid white";
      }
    }
    isShowingBorder.current = !isShowingBorder.current;
  }

  const gridStyle = currentBackground ? {
    backgroundImage: `url('${currentBackground.background}')`,
  } : {};

  return (
    <div className="linha">
      <div className="areaTrabalho efeitoSombra" style={gridStyle} ref={quadro}></div>
      <div id="menu-drawPage">
        <div style={{ display: 'flex', maxWidth: '200px' }}>
          <BackgroundList
            backgrounds={favBackgrounds.map(bg => ({ ...bg, isFavorite: currentBackground && currentBackground.background == bg.background })) }
            icon="check"
            onFavorite={(bg) => setCurrentBackground(bg)}
          />
        </div>
        <button
          type="button"
          className="gridButton efeitoSombra"
          onClick={mostraGrid}
        >
          Mostrar grid
        </button>
        <div className="conteinerSeletorDeCores efeitoSombra">
          <h2>Cores:</h2>
          <input
            className="inputCor"
            value="#FFFFFF"
            id="inputCor"
            type="color"
            name="cor"
            onChange={(ev) => color.current = hexToRgb(ev.target.value)}
          />
          <div className="coresPreSelecionadas" id="coresPreSelecionadas" ref={conteinerCoresPreSelecionadas}>
            <div style={ { backgroundColor: "#ff0000" } }></div>
            <div style={ { backgroundColor: "#0000FF" } }></div>
            <div style={ { backgroundColor: "#00FF00" } }></div>
            <div style={ { backgroundColor: "#FFFF00" } }></div>
            <div style={ { backgroundColor: "#ffa500" } }></div>
            <div style={ { backgroundColor: "#ffc0cb" } }></div>
            <div style={ { backgroundColor: "#800080" } }></div>
            <div style={ { backgroundColor: "#a52a2a" } }></div>
            <div style={ { backgroundColor: "#ffffff" } }></div>
            <div style={ { backgroundColor: "#000000" } }></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewProject