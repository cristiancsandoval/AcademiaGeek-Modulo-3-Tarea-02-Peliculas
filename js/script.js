//Archivo principal JS

import {data} from '../js/data.js';

let slider = document.getElementById("sliderImagenes");
let lista = document.getElementById("listaPeliculas");

//Creación de la lista de películas al final de la sección inicio a partir de la información en data.js

let listaPeliculas = document.createDocumentFragment();

data.forEach(infoPelicula =>{

    const {nombre, foto, identificador} = infoPelicula;

    let nuevaPelicula = document.createElement("div");
    nuevaPelicula.setAttribute("class", "contenedorPelicula");
    nuevaPelicula.setAttribute("id", identificador);

    let nombrePelicula = document.createElement("p");
    nombrePelicula.textContent = nombre;
    nombrePelicula.setAttribute("class", "nombrePelicula");

    let fotoPelicula = document.createElement("img");
    fotoPelicula.setAttribute("src", foto);
    fotoPelicula.setAttribute("alt", nombre);
    fotoPelicula.setAttribute("class", "fotoPelicula");

    nuevaPelicula.appendChild(fotoPelicula);
    nuevaPelicula.appendChild(nombrePelicula);

    listaPeliculas.appendChild(nuevaPelicula);

})

lista.appendChild(listaPeliculas);

//Creación del slider de imágenes de las películas (tres imágenes por selección)

//Inicialización de las películas, al iniciar la página se muestran las tres primeras en el documento data.js
let sliderPeliculas = document.createDocumentFragment();

let sliderPel1 = document.createElement("div");
sliderPel1.setAttribute("class", "sliderPel");
let sliderImg1 = document.createElement("img");
sliderImg1.setAttribute("src", data[0].foto);
sliderImg1.setAttribute("alt", data[0].nombre);
sliderImg1.setAttribute("id", "sliderImg1");
sliderPel1.appendChild(sliderImg1);
sliderPeliculas.appendChild(sliderPel1);

let sliderPel2 = document.createElement("div");
sliderPel2.setAttribute("class", "sliderPel");
let sliderImg2 = document.createElement("img");
sliderImg2.setAttribute("src", data[1].foto);
sliderImg2.setAttribute("alt", data[1].nombre);
sliderImg2.setAttribute("id", "sliderImg2");
sliderPel2.appendChild(sliderImg2);
sliderPeliculas.appendChild(sliderPel2);

let sliderPel3 = document.createElement("div");
sliderPel3.setAttribute("class", "sliderPel");
let sliderImg3 = document.createElement("img");
sliderImg3.setAttribute("src", data[2].foto);
sliderImg3.setAttribute("alt", data[2].nombre);
sliderImg3.setAttribute("id", "sliderImg3");
sliderPel3.appendChild(sliderImg3);
sliderPeliculas.appendChild(sliderPel3);

slider.appendChild(sliderPeliculas);

//Modificación de imágenes del slider de acuerdo con el click de los botones (derecho o izquierdo)

//Inicialización de posiciones de las imágenes en la lista del documento data.js
let sliderPos1 = 0;
let sliderPos2 = 1;
let sliderPos3 = 2;

let cantidadPel = data.length;
let foto1 = document.getElementById("sliderImg1");
let foto2 = document.getElementById("sliderImg2");
let foto3 = document.getElementById("sliderImg3");


function moverIzq(){

    let btnIzquierdo = document.getElementById("botonIzquierdo");
    btnIzquierdo.addEventListener('click', moverIzquierda );

}

function moverIzquierda(){

    if (sliderPos1 == 0){
        sliderPos1 = (cantidadPel - 1);
    } else {
        sliderPos1 -=1;
    }
    
    if (sliderPos2 == 0){
        sliderPos2 = (cantidadPel - 1);
    } else {
        sliderPos2 -=1;
    }
    
    if (sliderPos3 == 0){
        sliderPos3 = (cantidadPel - 1);
    } else {
        sliderPos3 -=1;
    }

    foto1.setAttribute("src", data[sliderPos1].foto);
    foto1.setAttribute("alt", data[sliderPos1].nombre);
    
    foto2.setAttribute("src", data[sliderPos2].foto);
    foto2.setAttribute("alt", data[sliderPos2].nombre);
    
    foto3.setAttribute("src", data[sliderPos3].foto);
    foto3.setAttribute("alt", data[sliderPos3].nombre);

};

function moverDer(){
    
    let btnDerecho = document.getElementById("botonDerecho");
    btnDerecho.addEventListener('click', moverDerecha);
}

function moverDerecha(){

    if (sliderPos1 == (cantidadPel - 1)){
        sliderPos1 = 0;
    } else {
        sliderPos1 +=1;
    }

    if (sliderPos2 == (cantidadPel - 1)){
        sliderPos2 = 0;
    } else {
        sliderPos2 +=1;
    }

    if (sliderPos3 == (cantidadPel - 1)){
        sliderPos3 = 0;
    } else {
        sliderPos3 +=1;
    }

    foto1.setAttribute("src", data[sliderPos1].foto);
    foto1.setAttribute("alt", data[sliderPos1].nombre);
    
    foto2.setAttribute("src", data[sliderPos2].foto);
    foto2.setAttribute("alt", data[sliderPos2].nombre);
    
    foto3.setAttribute("src", data[sliderPos3].foto);
    foto3.setAttribute("alt", data[sliderPos3].nombre);

}

moverDer();
moverIzq();
