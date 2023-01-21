'use strict'


// hacer REQUEST a la api de randomuser.me y usar la RESPONSE para renderizar una persona
fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(response => renderPersona(response.results[0]))

// cambiar elementos HTML usando el parametro
function renderPersona(persona) {

    document.getElementById('fotoPerfil').src = persona.picture.large ;
    document.getElementById('nombre').innerHTML = persona.name.first;
    document.getElementById('apellido').innerHTML = persona.name.last;
    document.getElementById('trabajoTitulo').innerHTML = trabajoTitulo;
    document.getElementById('email').innerHTML = persona.email;
    document.getElementById('telefono').innerHTML = persona.phone;
    document.getElementById('direccion').innerHTML = `${persona.location.street.number} ${persona.location.street.name}`;

}


// TODO: hacer lista random de titulos
let trabajoTitulo = 'WEB DEVELOPER'

