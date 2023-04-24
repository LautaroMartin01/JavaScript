let nombre = prompt ("Ingrese su nombre")
while (nombre === ""){
    nombre = prompt ("Ingrese su nombre")
}
let lastname = prompt ("Ingrese su apellido")
while (lastname === ""){
    lastname = prompt ("Ingrese su apellido")
}
if (nombre != "" && lastname != "") {
    alert (`Hola ${nombre} ${lastname}`)
    console.log (`Hola ${nombre} ${lastname}`)
}
// //Inicio de sesion//

let tipo = prompt (`Bienvenido a su calculadora de interés. \nPor favor eliga el tipo de interés que desea calcular.\nEscriba "simple" para calcular un interés simple. \nEscriba "compuesto" para calcular un interés compuesto`)
if (tipo === "simple") {
    let dinero = Number(prompt ("Bienvenido a su calculadora de interés simple. \nPor favor ingrese debajo el monto de dinero que desea invertir."))
    console.log (`El dinero a invertir es de ${dinero}`)
    if (dinero < 2000) {
        alert ("Por algo se empieza")
    } else if (dinero <= 200000) {
        alert ("Buena cantidad de dinero vamos a hacerlo crecer!!")
    } else if (dinero > 200000) {
        alert ("Esto nos va a dar mucho dinero de interés!!")
    }
    // //Monto de dinero a invertir//

    let tiempo = Number(prompt("¿Cuántos meses desea invertir su dinero?"))
    console.log (`La cantidad de meses en el cual el dinero será invertido es de: ${tiempo}`)
    // //Plazo de dinero en el tiempo//

    let interesAnual = Number(prompt("¿Cuál es la tasa de interés anual?\nIngrese el valor sin % "))
    let interes = ((interesAnual/100)/12)
    console.log (`El interés mensual es de: ${interes}`)
    // //Tasa de interes mensual//

    function resultado () {
        let resultado = Number((dinero*interes*tiempo) + dinero) 
        console.log (`Al final del periodo usted tendra ${resultado}`)
        alert (`${nombre} ${lastname} al final del periodo usted tendra $${resultado}`)
    }
    // //Resultado del ejercicio con interés simple//
} else if (tipo === "compuesto") {
    let dinero = Number(prompt ("Bienvenido a su calculadora de interés compuesto con capitalizacíon diaria. \nPor favor ingrese debajo el monto de dinero que desea invertir."))
    console.log (`El dinero a invertir es de ${dinero}`)
    if (dinero < 2000) {
        alert ("Por algo se empieza")
    } else if (dinero <= 200000) {
        alert ("Buena cantidad de dinero vamos a hacerlo crecer!!")
    } else if (dinero > 200000) {
        alert ("Esto nos va a dar mucho dinero de interés!!")
    }
    // //Monto de dinero a invertir//

    let tiempo = Number(prompt("¿Cuántos meses desea invertir su dinero?"))
    let  tiempodiario = tiempo*30
    console.log (`La cantidad de meses en el cual el dinero será invertido es de: ${tiempodiario}`)
    // //Plazo de dinero en el tiempo (diario)//

    let interesAnual = Number(prompt("¿Cuál es la tasa de interés anual? \nIngrese el valor sin %"))
    let interes = (((interesAnual/100)/12)/30)
    console.log (`El interés mensual es de: ${interes}`)
    // //Tasa de interes mensual//

    function resultado () {
        let resultado = Number((dinero*(1+interes)**tiempo) + dinero) 
        console.log (`Al final del periodo usted tendra ${resultado}`)
        alert (`${nombre} ${lastname} al final del periodo usted tendra $${resultado}`)
        // //Resultado del ejercicio con interés compusto//
    }
}
resultado();


//Controlar los numeros//