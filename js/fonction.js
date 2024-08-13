function bonjour(){
    document.write("<p>Bonjour le monde !</p>");
}

console.log("chargenment du fichier fonction.js");

bonjour();
bonjour();

// fonction avec argument
function salut(prenom){
    document.write("<p>Bonjour " + prenom + ", bienvenue au pole S</p>" );
}

//EXO appeler la fonction salut avec votre prénom
salut("Shin le générale invincible");

// fonction avec plusieurs arguments
function phrases(mot1, mot2, mot3){
    if( mot3 != undefined){
        document.write("<h4>" + mot2 + " " + mot3 + " " + mot1 + "</ch4>");
    }else{
        document.write("<h4>" + mot2 + " " + mot3 + " " + mot1 + "</ch4>");
    }
}

phrases("Iron Man<br>", "je", "suis",);
phrases("ineluctable<br>", "I am");

// fonction qui retourne une valeur
function tva(prix){
    let calcul= prix * .2;
    return calcul;
}

let taxe= tva(100);
document.write("La taxe sur un produit de 100€ est " + taxe + "€<br>");

let prix = 200;
let calcul = tva(prix);
document.write("La taxe sur un produit de " + prix + "€ est " + calcul + "€<br>");


// Ecouteur d'évènement :  Différence entre les fonctions et les fonctions fléchées

/* 
    • avec une fonction standard, le mot-clé this représente l'objet qui a déclenché l'évènement.
    
	• avec une fonction fléchée, le mot-clé this représente l'objet Window.
    	Pour récupérer l'objet qui a déclenché l'évènement, on utlise
        	event.target
	
*/

let h1 = document.querySelector("h1");
h1.addEventListener("mouseover", function(event){
    console.log("évènement mouseover function", this);
    this.style.color = "red";
})

h1.addEventListener("mouseout", (event) => {
    console.log("évènement mouseout fonction fléchée", this);
    console.log("évènement mouseout fonction fléchée", event, event.target);
    event.target.style.color = "green";

})
