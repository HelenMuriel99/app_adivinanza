let numeroSecreto = Math.floor(Math.random() *10 +1);
let numeroDelJugador = 0;
let intentos =1;
let maximoIntentos = 3;

console.log(numeroSecreto);
maximoIntentos= prompt("Ingrese el numero maximo de intentos: ")


while(numeroSecreto != numeroDelJugador){
    numeroDelJugador = prompt(" Ingrese el numero entre 1 a 10")
    
    if (numeroSecreto == numeroDelJugador) {
        alert(`Acertaste el numero es: ${numeroSecreto}. Lo hisiste en ${intentos} ${intentos==1 ? 'vez' : 'veces'}`)
    }else{
        if (numeroDelJugador > numeroSecreto) {
            alert('El nuero es menor')
        }else{
            alert('El numero es mayor')
        }
    }
    intentos++;
    if(intentos > maximoIntentos){
        alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`)
        break;
    }
}
