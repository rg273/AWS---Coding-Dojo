/*

Crea una función que, dado un nombre, diga "buenos días" a esa persona por su nombre.

Por ejemplo, la llamada de función greet("Anakin") registraría en la consola, ¡Buen día, Anakin!

Nivel 2: Personaliza aún más tu función incluyendo la hora del día en tu saludo. Pista: ¿las funciones solo pueden tomar un parámetro?

Nivel 3: Tú y el Conde Dooku tienen problemas. Personaliza aún más tu código para que diga "¡Voy por ti, Dooku!" si tu función se llama con "Count Dooku".
*/

greet("Anaki" , "8AM")
greet("Count Dooku" , "8AM")

function greet(name, hora){
    if(name == "Count Dooku" || name == "Dooku" ){
        console.log("¡Voy por ti, Dooku!");
        console.log("hora del dia: " + hora );
    }else {
        console.log("¡Buen día, "+ name + "! ");
        console.log("hora del dia: " + hora );
    }
}