/* Declaración de variable */
let Amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const botonReiniciar = document.getElementById("reiniciar");
    const listaAmigos    = document.getElementById('listaAmigos');
    const nombre = input.value.trim();

    // Validación para evitar nombres vacíos
    if (!nombre) {
        alert("Por favor ingresa un nombre");
        input.focus();
        return;
    }

    // Expresion regular para validar caracteres permitidos
    const regex = /[0-9@#\/\*\?!¡¿]/;
    if (regex.test(nombre)) {
        alert("Solo se aceptan caracteres no especiales");
        input.focus();
        return;
    }

    // Validación de la longitud del nombre ingresado (mínimo 3 caracteres)
    if (nombre.length < 3) {
        alert("Ingresa un nombre con al menos 3 caracteres");
        input.focus();
        return;
    }

    // Validacion de nombres duplicados
    if (Amigos.includes(nombre)) {          
        alert("Este nombre ya existe, intentalo con otro nombre");
        input.value = '';
        input.focus();
        return;
    }   

    // Validación de máximo de amigos para el sorteo, en este caso 30
    if (Amigos.length >= 30) {
        alert(`Has alcanzado el número máximo de amigos ${Amigos.length}`);
        input.value = '';
        input.focus();
        return;
    }

    botonReiniciar.disabled = false;
    Amigos.push(nombre);
    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
    input.value = '';
    input.focus();
}

// Se ejecuta el sorteo
function sortearAmigo() {
    // Validación para realizar el sorteo con un mínimo de 3 amigos
    if (Amigos.length < 3) {
        alert("Debes capturar al menos 3 nombres para realizar el sorteo");
        return;
    }
    // Se sortea el nombre
    const indice = Math.floor(Math.random() * Amigos.length);
    const nombreElegido = Amigos[indice];

    // Se muestra el nombre sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreElegido}</strong></li>`;
}

// Se reinicia el sorteo para comenzar desde cero
function reiniciarJuego(){
    listaAmigos.innerHTML = "";
    resultado.innerHTML="";
    Amigos = [];
    botonReiniciar.disabled = true;
    return;
}

