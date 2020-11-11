//Vicent, soy xema. Vamos a suponer que el modal global está aqui en este js
//Voy a hacer los imports de los gifs y los voy a meter en un array


import linea1 from '../images/linia.gif'
import linea2 from '../images/linia2.gif'
import linea3 from '../images/linia3.gif'
import bingo1 from '../images/bingo.gif'
import bingo2 from '../images/bingo2.gif'
import bingo3 from '../images/bingo3.gif'

//Metemos los gifs en un array
var imgsBingo=new Array();
imgsBingo.push(bingo1,bingo2,bingo3);

var imgsLinea=new Array();
imgsLinea.push(linea1,linea2,linea3);

//Estas funcionen devuelven un gif aleatorio de los que hemos hecho el import
function randomBingo(){
    let img=imgsBingo[Math.round(Math.random() * ((imgsBingo.length-1) - 0) + 0  )];
    return img;
}
function randomLinea(){
    let img=imgsLinea[Math.round(Math.random() * ((imgsLinea.length-1) - 0) + 0  )];
    return img;
}

export const modalLinia= (player) => {
    let img;
    //Suponemos que aux es la variable que nos dice si hemos hecho linea o bingo

    //Descomentar este if
    // if(aux=='linea'){
    //     img=randomLinea(); //Gif de linea random
    // }else{
    //     img=randomBingo(); //Gif de bingo random
    // }
    /////

    //Borrar la linea de abajo
    img=randomLinea();
     

    return `

    <div id="liniaForm" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <h1>Linia player ${player}</h1>
                <img src=${img} />
            </div>  
        </div>

    `
}