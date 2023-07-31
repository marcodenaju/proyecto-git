/* Tipos de datos:
- string = "cadena de datos"
- number = 1 (o sea números, sin comillas porque en ese caso sería un string)
- booleano = true (o false / ceros y unos)


- Casos especiales de datos: Undefined, Null (nula o vacía, que no es lo mismo que sin definir(Undefined)), Nan (Not a number, cuando hacemos una operación con una variable que no es un número); 
(tipos de datos que nos dice que las variables no están declaradas.
    Las variables se declaran con let, var, const. Trabajan con bloques)
Ejemplo de cómo declarar una variable:
let numero = 15; (se declara la variable numero) La variable let se puede modificar, a diferencia de la variable const (que es constante)
Ejemplo:

let numero = 19

numero = 23

alert(numero)

ejemplo erroneo con const (esto nos tira error, se tiene que declarar e inicializar al mismo tiempo,  en cambio var y let se pueden declarar por su parte 
y modificar por su parte):

const numero;

numero = 2;

alert(numero)

- Scope: es el ámbito de las variables, el alcance.

- Hoisting: 

- Crear multiples variables:

let numero1 = 23;
let numero2 = 39;

-prompt (es una función integrada que muestra un cuadro de diálogo (ventana emergente) al usuario, permitiéndole ingresar información o datos.)

let nombre = prompt("Ingresa tu nombre");

alert("Hola " + nombre)

En este ejemplo el resultado en el cuadro de diálogo serîa Hola concatenado al nombre ingresado.
La palabra ingresada se almacena en la variable nombre.


OPERADORES ARITMÉTICOS

Ejemplo de suma:

numero1 = 10;

numero2 = 5;

resultado = numero1 + numero2;

alert(resultado)

Ejemplo de exponenciador:

numero1 = 10;

resultado = numero1**3;

alert(resultado)

(El resultado va a ser 1000, o sea 10 al cubo) Otra forma sería:

numero1 = 10;

numero2 = 3;

resultado = numero1**numero3;

alert(resultado)


CONCATENAR (unir) Ejemplo:

saludo = "Hola Nahuel,";
pregunta = "cómo estás?"

frase = saludo + " " + pregunta;

alert(frase)


FORMA RECOMENDADA DE CONCATENAR: con backtiks (comillas simples) y la variable entre ${}

nombre = "Nahuel"

frase = `soy ${nombre} y estoy programando`;

alert(frese);


CONDICIONALES (if, else if, else)

if (10 < 15) {
    alert("hola")
}

En este ejemplo el bloque se ejecuta porque lo que está dentro del if es true.

Bloque = todo lo que esté dentro de las llaves.

Ejemplo que no se ejecuta:

nombre = "pepe"

if (nombre == "pedro") {
    alert("hola")
}

-------------

else if:

nombre = "pepe"

if (nombre == "pedro") {
    alert("tu nombre es malardo")
}

else (nombre == "pepe")
alert("tu nombre es " + nombre)

(if es el primero (uno solo) else if (PODEMOS PONER TANTOS else if como queramos) y else es el último y es uno solo.

------

else: (Si nada de lo anterior se cumple hagamos otra cosa)

nombre = "pepe"

if (nombre == "pedro") {
    alert("tu nombre es malardo")
}

else if (nombre == "nahuel") {
alert("tu nombre es buenardo")
}

else {
    alert("tu nombre es otro")
}


















*/