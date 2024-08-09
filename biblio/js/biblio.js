let livres = []; // let livres = new Array()

livres.push([101,'Bel Ami','Guy de Maupassant']);
livres.push([104,'Le Comte de Monte Christo','Alexandre Dumas']);
livres.push([105, 'Les Trois Mousquetaires' , 'Alexandre Dumas']);
livres.push([106, 'I, robot' ,'Richard Matheson']);

console.log(livres);

//EXO : affichez dans la console, l'auteur du 2ème livre

console.log("livre[1]",livres[1]);
console.log("livre[1][2]",livres[1][2]);

// EXO : écire dans la balise tbody : "<tr><td>1</td><td>apprendre le js</td><td>Nordine Ateur</td></tr>"
let elementTbody = document.querySelector("tbody");
// autre méthode : elementTbody = document.getElementsByTagname("tbody")[0]; 

/*
elementTbody.innerHTML = "<tr><td>1</td><td>apprendre le js</td><td>Nordine Ateur</td></tr>";
elementTbody.innerHTML += "<tr><td>2</td><td>un livre</td><td>Anne Onyme</td></tr>";
*/

// EXO : remplir la table HTML avce les données de la variable "livres"
displayRecord(livres);

/* CORRECTION :

for(let i = 0; i < livres.lenght; i++){
    console.log(livres[i][0], livres[i][1], livres[i][2]);
    let ligne = "<tr>";
    ligne += "<td>" + livres[i][0] +"</td>";
    ligne += "<td>" + livres[i][1] +"</td>";
    ligne += "<td>" + livres[i][2] +"</td>";
    let ligne = "</tr>";
    elementTbody.innerHTML += ligne;
}*/

// EXO

let formulaire = document.querySelector("#formulaire");
let inputId = document.querySelector("#idLivre");
let inputTitle = document.querySelector("#title");
let inputAuteur = document.querySelector("#auteur");

formulaire.addEventListener("submit", function(eventSubmit){
    eventSubmit.preventDefault();
    let index = Number(inputId.value);
    let auteur = inputAuteur.value;
    let title = inputTitle.value;
    livres.push([index, title, auteur]);
    for(let i = 0; i < livres.length; i++ ){
        livres[0];
        if(index == livres[0]){
            livresDejaLu = livres[0];
            console.log(livresDejaLu)
        }
    }

    displayRecord(livres);
})

