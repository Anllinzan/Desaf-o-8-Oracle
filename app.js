//Desafio etiqueta el título 2
let Titulo = document.querySelector ('h1');
Titulo.innerHTML = 'Hora del Desafio';

//Crea una función que muestre "El botón fue clicado" desafio 3
function IntentoDeUsuario() {
    alert('El botón fue clicado');
}
// Pregunta al hacer click desafio 4
function IntentoDeUsuario1() {
    prompt('¿Nombre de la ciudad?');
    alert('Estoy en la ciudad de Brasilia, me acordé de ti.');
}

//Desafio 5 "Yo amo JS" 
function IntentoDeUsuario2() {
    alert('Amo JS');
}

//Desafio 6 "Suma"
function SumarNumeros() {
    let numeroUno = parseInt(prompt('Por favor ingrese el primer numero: '));
    let numeroDos = parseInt(prompt('Por favor ingrese el segundo numero: '));
    let totalSuma = numeroUno + numeroDos;

    alert(`La suma del numero ${numeroUno} y el numero ${numeroDos} es: ${totalSuma}`);

}