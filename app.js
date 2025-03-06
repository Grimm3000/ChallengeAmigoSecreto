
//Arreglos y variables
const entradaAmigo = document.getElementById("amigo");
const amigos =[];
const listaAmigos = document.getElementById("listaAmigos");
const amigoSecret = document.getElementById("resultado");

console.log(listaAmigos.value);
// listaAmigos.value
listaAmigos[0]="Sabrina";

//Funciones

function agregarAmigo(){
    if(entradaAmigo.value ==""){
        alert("Por favor, inserte un nombre.");
    }else{
        
    amigos.push(entradaAmigo.value);
    console.log(amigos);
    listaAmigos.innerHTML =  listaAmigos.innerHTML + `<li>${entradaAmigo.value}</li>`;

    }
    entradaAmigo.value = "";
}

function sortearAmigo(){
    if (amigos.length == 0) {
        alert("No hay amigos en la lista para sortear.");
       
    }else{
    let numRandom = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[numRandom];
    
    amigoSecret.innerHTML = "El Amigo Secreto es: " + `${amigoSecreto}`;
    }

   


}
