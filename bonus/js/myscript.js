/*
Descrizione esercizio:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/


// // chiedi all'utente il suo nome
// let nameUser = prompt ("Inserisci il tuo nome");
// console.log(nameUser);
// // chiedi all'utente il suo cognome
// let secondName = prompt ("Inserisci il tuo cognome");
// console.log(secondName);
// // chiedi il suo colore preferito
// let prefColor = prompt ("Inserisci il tuo colore preferito");
// console.log(prefColor);
// // costante 21
// const numberUser = 21;
// // scrivi sulla pagina nomecognomecolore21
// document.getElementById("user-name").innerHTML = "<h1>" + nameUser + secondName + prefColor + numberUser + "</h1>";



// chiedi all'utente il suo nome
let nameUser = prompt ("Inserisci il tuo nome");
console.log(nameUser);
// chiedi all'utente il suo cognome
let secondName = prompt ("Inserisci il tuo cognome");
console.log(secondName);
// chiedi il suo colore preferito
let prefColor = prompt ("Inserisci il tuo colore preferito");
console.log(prefColor);
// numero pref
let prefNumber = prompt("Inserisci il tuo numero preferito");
console.log(prefNumber);
// costante 5
const numberFive = 5;
// numero
let numberP = parseInt(prefNumber) + numberFive
// scrivi sulla pagina nomecognomecolore21
document.getElementById("user-name").innerHTML = nameUser + secondName + prefColor + numberP ;

// test-user
 document.getElementById("test-user").innerHTML = document.getElementById("test-user").innerHTML + nameUser + secondName + prefColor + numberP;

// test-color
document.getElementById("color-user").innerHTML = "<span>" + nameUser + secondName + prefColor + numberP + "</span>";

//alert
alert("Ciao " + nameUser + secondName + prefColor + numberP + " grazie per aver effettuato l'accesso");
