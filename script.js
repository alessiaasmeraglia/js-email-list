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
        li.classList.add("list-group-item");  //Aggiungo la classe per lo stile della lista
        li.textContent = email;  //Inserisco l’indirizzo email come testo della lista
        emailList.appendChild(li);  //Aggiungo la li dentro la ul
    });
}

//Creo la funzione per le email
function getEmails() {
    emailList.innerHTML = ''; //Svuoto la lista prima di inserire i nuovi elementi
    const emails = []; //Creo un array vuoto per contenere le email

    for (let i = 0; i < 10; i++) { //Faccio 10 fetch
        fetch(apiUrl) //Chiamo l’API per ottenere un’email casuale
        .then(risposta => risposta.json()) //Trasformo la risposta in formato JSON
        .then(dati => { //Prendo l’email dalla risposta e la inserisco nell’array
            emails.push(dati.response); //Aggiungo l’email all’array

            if(emails.length === 10) { //Quando arrivo a 10 email, le stampo nella ul
                renderEmails(emails); //Chiamo la funzione per stampare le email
            }
        })
    }
}

getEmails(); //Chiamo la funzione per ottenere le email al caricamento della pagina
generateBtn.addEventListener("click", getEmails); //Aggiungo un event listener al bottone per ottenere nuove email quando viene cliccato