let livresJSON = `[
    {"id":1, "titre":"1984", "auteur":"George Orwell"},
    {"id":2, "titre":"Odysée", "auteur":"Homère"},
    {"id":4, "titre":"Akira", "auteur":"Katsuhiro Otomo"},
    {"id":5, "titre":"Fondation", "auteur":"Isaac Asimov"},
    {"id":6, "titre":"Dune", "auteur":"Frank Herbert"},
    {"id":7, "titre":"I, robot", "auteur":"Isaac Asimov"},
    {"id":8, "titre":"Les enfants de Dune", "auteur":"Frank Herbert"},
    {"id":9, "titre":"Le meutre de Roger Acroyd", "auteur":"Agatha Christie"},
    {"id":10, "titre":"Le Seigneur des Anneaux", "auteur":"J.R.R. Tolkien"},
    {"id":11, "titre":"La ferme des animaux", "auteur":"George Orwell"},
    {"id":12, "titre":"Fondation et Empire", "auteur":"Isaac Asimov"}
]`;

console.log(livresJSON);

/* JSON.parse : transforme un string format JSON en variables javascript */
let livres = JSON.parse(livresJSON);
console.log(livres);

function actualiserListeLivres(){
    let elementTbody = document.querySelector("tbody");
    elementTbody.innerHTML = "";
    for (const livre of livres) {
        elementTbody.innerHTML +=  "<tr><td>" + livre.id + "</td><td>" + livre.titre + "</td><td>" +  livre.auteur  + "</td> <td><a id='modifier" + livre.id + "' classe='btSupp btn'> <i class='fa fa-trash'></i> </a></td></tr>";
    }
}

actualiserListeLivres();

let boutonsSuppression = document.querySelectorAll("btSupp");
for (const bouton of boutonsSuppression) {
    bouton.addEventListener("click", function(evt){
        console.log(this, this.id, this.className, this.classList);
        let idLivreASupprimer;
        idLivreASupprimer = this.id.replace("modifier", ""); // véridié si ce n'est pas Livre
        // livre.id = "livre10" -> idLivreASupprimer = "10"
        for(let i = 0; i < livres.length; i++){
            if (idLivreASupprimer == livres[i].id){
                livres.splice( i, 1);
                break;
            }
        }
        console.log("après", livres, elementTbody);
        elementTbody.innerHTML = "";
        for(const book of livres) {
            let ligne = "<tr>";
            ligne += "<td>" + book.id + "</td>";
            ligne += "<td>" + book.titre + "</td>";
            ligne += "<td>" + book.auteur + "</td>";
            ligne += "<td><a id='livre" + book.id + "' class='btSupp btn btn-danger'><i class='fa fa-trash'></i> </a></td>";
            ligne += "</tr>";
            elementTbody.innerHTML += ligne;
        }
    })
}
// CORRECTION :

/* let livresJSON = `[
    {"id":1, "titre":"1984", "auteur":"George Orwell"},
    {"id":2, "titre":"Odysée", "auteur":"Homère"},
    {"id":4, "titre":"Akira", "auteur":"Katsuhiro Otomo"},
    {"id":5, "titre":"Fondation", "auteur":"Isaac Asimov"},
    {"id":6, "titre":"Dune", "auteur":"Frank Herbert"},
    {"id":7, "titre":"I, robot", "auteur":"Isaac Asimov"},
    {"id":8, "titre":"Les enfants de Dune", "auteur":"Frank Herbert"},
    {"id":9, "titre":"Le meutre de Roger Acroyd", "auteur":"Agatha Christie"},
    {"id":10, "titre":"Le Seigneur des Anneaux", "auteur":"J.R.R. Tolkien"},
    {"id":11, "titre":"La ferme des animaux", "auteur":"George Orwell"},
    {"id":12, "titre":"Fondation et Empire", "auteur":"Isaac Asimov"}
]`;

console.log(livresJSON);

// JSON.parse : transforme un string format JSON en variables javascript
let livres = JSON.parse(livresJSON);

function actualiserListeLivres() {
    let elementTbody = document.querySelector("tbody");
    for(const book of livres) {
        let ligne = "<tr>";
        ligne += "<td>" + book.id + "</td>";
        ligne += "<td>" + book.titre + "</td>";
        ligne += "<td>" + book.auteur + "</td>";
        ligne += "<td><a id='livre" + book.id + "' class='btSupp btn btn-danger'><i class='fa fa-trash'></i> </a></td>";
        ligne += "</tr>";
        elementTbody.innerHTML += ligne;
    }

    let boutonsSuppresion = document.querySelectorAll(".btSupp");
    for (const bouton of boutonsSuppresion) {
        bouton.addEventListener("click", function(evt) {
            console.log(this, this.id, this.className, this.classList);
            let idLivreASupprimer;
            idLivreASupprimer = this.id.replace("livre", "");  
            // this.id = "livre10"   =>  idLivreASupprimer = "10"
            for(let i = 0; i < livres.length; i++) {
                if( idLivreASupprimer == livres[i].id) {
                    livres.splice(i, 1);
                    break;
                }
            }
            console.log("après", livres, elementTbody);
            elementTbody.innerHTML = "";
            for(const book of livres) {
                let ligne = "<tr>";
                ligne += "<td>" + book.id + "</td>";
                ligne += "<td>" + book.titre + "</td>";
                ligne += "<td>" + book.auteur + "</td>";
                ligne += "<td><a id='livre" + book.id + "' class='btSupp btn btn-danger'><i class='fa fa-trash'></i> </a></td>";
                ligne += "</tr>";
                elementTbody.innerHTML += ligne;
            }
        })
    }
}

actualiserListeLivres();
*/