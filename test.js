//DECLARACIÓN DE VARIABLES
let nombre = "Juan"; //esto declara una variable
var apelldio = "Perez"; //Esto tambien declara una varieble 
const PI = 3.1416;//Esto declara una constante
//LA DIFERENCIA ENTRE LET Y VAR TIENE QUE VER CON EL SCOPE
funcionMUYMUYIMPORTANTE(x);
//OPERADORES
let suma = 1 +1;
let resta = 1-1;
let multiplicacion = 1 * 1;
let division = 1/1;
let modulo = 1 % 1;
//COMPARACION
let mayor = 1 > 2;
let menor = 1< 2;
let igual = 1 == 1;
let identico = 1 === 1;
let x = 1;
let y = "1";
let igualdad = x == y;
let identidad = x === y;
let diferente = 1 != 1;
//LOGICOS
let and = true && true;
let or = true || false;
let not = !true;

//TIPOS DE DATOS
//string
let cadena ="Hola mundo";
let numero = 10;
let boleano = true;
let array = ["Juan", "Pedro", "Maria"];
let arraybolea = [true, false, true];
let arraymix = ["Juan", 1,true];
let arraynum = [1,2,3,4,5];
let arrayobj = [{nombre: "Juan"}, {nombre: "Pedro"}];
//object 
let user = {
nombre: "Juan",
apelldio:"Perez",
lugarDeNacimiento: {
    pais:"Mexico",
    estado:"CDMX",
},
lugarVisitados: ["USA","Canada", "Japon"],
}
//ESTO
//Undefined
let indefinido;
//NULL
let nulo = null;


//FUNCIONES
function saludar (){
    console.log("HOLA");
}
function suma(a,b){
    return a + b;
}
const sumafuncion = (a,b) => a + b;
sumafuncion(1,2);
//LAS FUNCIONES FLECHAS ESTARAN PRESENTES EN MUCHAS COSAS QUE HAGAMOS
//CALLBACK
function operacion(a,b, CALLBACK){
    return CALLBACK(a,b);
}
