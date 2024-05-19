//Programación de la lógica del 3 en raya


//Declaración de variables
let titulo_jue = document.getElementById('titulo_jue');
let reinicio = document.getElementById('reinicio');
let cajas = Array.from(document.getElementsByClassName('caja'));

console.log(cajas);

const circulo = "O";
const cruz = "X";
let Turno_Jugador = cruz;

let espacios =  Array(9).fill(null);

console.log(espacios);

const Comenzar_Juego = () => {
    cajas.forEach(caja => caja.addEventListener('click', click_en_caja))
};


//Que al hacer click en cada caja, se escriba el icono del jugador actual
function click_en_caja(e) {
    const id = e.target.id

    if(!espacios[id]) {
        espacios[id] = Turno_Jugador ;
        e.target.innerText = Turno_Jugador;

        //Darle la victoria a un jugador
        if (Victoria() != false){
            alert("Un jugador ha ganado")
            reiniciar();
        
        }


        Turno_Jugador = Turno_Jugador == cruz ? circulo : cruz

    };

    console.log(e.target)
}

const Condiciones_Victoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];



//Medir si un jugador ha ganado
function Victoria() {
    for (const condicion of Condiciones_Victoria) {
        let [a, b ,c] = condicion
    
        if(espacios[a] && (espacios[a] == espacios[b] && espacios[a] == espacios[c])) {

            return  [a,b,c];


        }
    }
    return false
}

//Reiniciar el juego
reinicio.addEventListener('click', reiniciar)

function reiniciar() {

    alert("Se va a reiniciar la partida")

    espacios.fill(null)

    cajas.forEach( caja => {

        caja.innerText = ''

    })

    titulo_jue = '3 en raya'

    Turno_Jugador = cruz;

}


Comenzar_Juego()