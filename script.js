/* 
- creo un array vuoto
- faccio 10 fetch
- ogni risposta la metto nell’array
- quando arrivo a 10 email, le stampo nella ul */
// Recupero gli elementi dal DOM
const emailList = document.getElementById("emailList");
const generateBtn = document.getElementById("generateBtn");
// URL dell'API per ottenere email casuali
const apiUrl = "https://flynn.boolean.careers/exercises/api/random/mail";

// Funzione che stampa le email
function renderEmails(emails){
    emailList.innerHTML = ''; //Svuoto la lista prima di inserire i nuovi elementi

    //Scorro tutte le email presenti nell’array
    emails.forEach((email) => {
        const li = document.createElement("li");  //Creo un nuovo elemento <li>
        li.textContent = email;  //Inserisco l’indirizzo email come testo della lista
        emailList.appendChild(li);  //Aggiungo la li dentro la ul
    });
}

//Creo la funzione per le email
function getEmails() {
    emailList.innerHTML = '';
    const emails = [];

    for (let i = 0; i < 10; i++) {
        fetch(apiUrl)
        .then(risposta => risposta.json())
        .then(dati => {
            //console.log(dati);
            emails.push(dati.response);

            if(emails.length === 10) {
                renderEmails(emails);
            }
        })
    }
}

getEmails();
generateBtn.addEventListener("click", getEmails);