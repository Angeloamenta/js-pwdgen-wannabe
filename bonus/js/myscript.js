/*
Descrizione esercizio:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/


// chiedi all'utente il suo nome
let nameUser = prompt ("Inserisci il tuo nome");
console.log(nameUser);
// chiedi all'utente il suo cognome
let secondName = prompt ("Inserisci il tuo cognome");
console.log(secondName);
// chiedi il suo colore preferito
let prefColor = prompt ("Inserisci il tuo colore preferito");
console.log(prefColor);
// costante 21
const numberUser = 21;
// scrivi sulla pagina nomecognomecolore21
document.getElementById("user-name").innerHTML = "<h1>" + nameUser + secondName + prefColor + numberUser + "</h1>";

// test-user
document.getElementById("test-user").innerHTML = document.getElementById("test-user").innerHTML + nameUser + secondName + prefColor + numberUser;