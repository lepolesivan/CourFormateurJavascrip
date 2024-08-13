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

function actualiserListeLivres() {
    let elementTbody = document.querySelector("tbody");
    elementTbody.innerHTML = "";
    for(const book of livres) {
        let ligne = "<tr>";
        ligne += "<td>" + book.id + "</td>";
        ligne += "<td>" + book.titre + "</td>";
        ligne += "<td>" + book.auteur + "</td>";
        ligne += "<td>";
        ligne += "<a id='modif-livre" + book.id + "' class='btModif btn btn-primary'><i class='fa fa-edit'></i> </a> ";
        ligne += "<a id='livre" + book.id + "' class='btSupp btn btn-danger'><i class='fa fa-trash'></i> </a></td>";
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
                actualiserListeLivres();
                elementTbody.innerHTML += ligne;
            }
        })
    }

    let boutonsModificationt = document.querySelectorAll(".btModif");
    boutonsModificationt.forEach((bouton) => {
        bouton.addEventListener("click", event => {
            let idAModifier = bouton.id.replace("modif-livre", ""); // event.target on la remplacé parce qu'il y avait un petit problème
            livres.forEach( (book, indice) => {
                if( idAModifier == book.id){
                    let inputId = document.querySelector("#id");
                    let inputTitre = document.querySelector("#titre");
                    let inputAuteuer = document.querySelector("#auteur");
                    inputId.value = book.id;
                    inputAuteuer.value = book.auteur;
                    inputTitre.value = book.titre;
                    document.querySelector("form h2").innerHTML = "Modifier un livre";
                    inputId.setAttribute("readonly", true);
                }
            });
            actualiserListeLivres();
        })
    })
}

actualiserListeLivres();

let formulaire = document.querySelector('#frmLivre');
formulaire.addEventListener('submit', (event) => {
    // annuler la soumission du formulaire
    event.preventDefault();

    // récuperer les valeurs tapées dans les inputs
    let idLivre = document.querySelector("#id").value;
    let titreLivre = document.querySelector("#titre").value;
    let auteurLivre = document.querySelector("#auteur").value;
    
    // créer un nouvel objet livre
    let livre = {
        id: idLivre,
        titre: titreLivre,
        auteur: auteurLivre
    };

    //vérifier si l'identifiant passé dans le formulaire est déjà présent dans la liste
    let dejaPresent = false;
    for (const book of livres) { // la boucle va s'exécuté pour chaque 'book'
        if(livre.id == book.id){
            dejaPresent = true;
            book.titre = livre.titre;
            book.auteur = livre.auteur;
            document.querySelector("form h2").innerHTML = "Ajouter un livre";
            document.querySelector("#id").removeAttribute("readonly");
            break;
        }
    }
    if (!dejaPresent){
       // ajouter ce livre à la liste des livres
    livres.push(livre);
    }

    // mettre à jour l'affichege
    actualiserListeLivres();
    event.target.reset(); // reset() = simule le fait d'appuyer sur le bouton reset
});

