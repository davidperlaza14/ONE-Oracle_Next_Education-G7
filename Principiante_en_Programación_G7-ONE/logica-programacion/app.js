// Variables 
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = 'vez';
let maximosIintentos = 6;
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor: `));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos ==1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        // Incrementamos cuando no acierta.
        intentos ++;
        // palabraVeces = 'veces';
        if (intentos > maximosIintentos) {
            alert(`Llegaste al numero maximo de ${maximosIintentos} intentos`);
            break;
        }
        // La condicion no se cumplio
        // alert('Lo siento, no acertaste el numero');
    }
}