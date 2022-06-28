/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

'use strict'

document.getElementById('submit-btn').addEventListener('click', svorioKonvertavimas)

function svorioKonvertavimas(event){
     event.preventDefault()
   
    const irasytiKilogramus = document.getElementById('search');
    const outputElement = document.getElementById('output');
    const gramai = irasytiKilogramus.value  / 0.0010000;
    const svarai = irasytiKilogramus.value * 2.2046;
    const uncijos = irasytiKilogramus.value * 35.274;

    outputElement.innerText = `Gramai (g) - ${gramai}, Svarai (lb)-${svarai}, Uncijos (oz)-${uncijos} `;
        return;
    };
    
    document.querySelector('form').addEventListener('submit-btn'); 
    
