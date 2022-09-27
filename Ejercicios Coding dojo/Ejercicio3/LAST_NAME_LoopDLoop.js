/*
Un preparador físico e ingeniero mecánico local está construyendo un dispositivo IoT que hace saltar un caramelo cada vez que un corredor llega a 3 kilómetros en una trotadora, pero deja de dar caramelos en el kilómetro 10. Tenemos la tarea de la funcionalidad de bucle para saber cuando dar un caramelo y cuando parar.

Paso 1: Usando comentarios en tu VS Code, responde las siguientes preguntas: 

    1A_¿Cómo sabemos que necesitamos un bucle aquí? 
    1B_¿Cuál es el punto de partida del bucle?
    1C_¿Cuándo debe detenerse el bucle?
    1D_¿Cómo sabrás parar?
    1E_¿Cuál es el incremento para cada iteración del bucle?
    1F_¿Qué variables necesitamos?

    NOTA --> la lista anterior de preguntas es una gran herramienta para ayudarte a desglosar la construcción de un bucle. En el futuro, se espera que sepas cómo hacer esas preguntas por tu cuenta. 

Paso 2: construye el bucle.

Paso 3: guarda y envía.

Característica Tramo 1

Crea un nuevo bucle en el que el corredor solo recibe un caramelo cada 3 kilómetros Y si se desplaza a más de 9 kilómetros por hora.

*/

//1A: Por que es un codigo que podemos automatizar
//1B: El punto de partida lo establecemos nosotros, en este caso es necesario ponerlo en 0
//1C: El bucle deberia detenerse cuando la persona deje de correr
//1D: Usando un condicional
//1E: El incremento de cada interaccion es 1
//1F: Necesitamos un 3 variable de tipo number, por que manipularemos numeros

//KILOMETROS que corre nuestro sujeto al dia
let corredor = 13;

//VELOCIDAD en km del corredor
let velCorredor = 10;

for(let i = 0; i < corredor; i++){
    if ((i % 3) == 0 && velCorredor > 9){
        console.log("Recibe caramelo")
    }
}
