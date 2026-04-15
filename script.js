/* 
- creo un array vuoto
- faccio 10 fetch
- ogni risposta la metto nell’array
- quando arrivo a 10 email, le stampo nella ul */
const emailList = document.getElementById("emailList");
const generateBtn = document.getElementById("generateBtn");

const apiUrl = "https://flynn.boolean.careers/exercises/api/random/mail";