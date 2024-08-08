let nb = prompt("Tapez un nombre, svp :");

if( nb > 10){
    document.write("nb est supérieur à 10");
}

document.write("<p>code suivant la structure IF<p><br>");

if(nb < 10){
    document.write("<p>nb est inférieur à 10 </p>");
} else {
    document.write("<p>donc nb est supérieur à 10 ?</p>");
}

document.write("code suivant la structure IF ELSE");

if(nb < 10){
    document.write("<p> Vous n'avez pas la moyenne : recalé(e)</p>");
} else if(nb > 10){
    document.write("<p> Vous avez plus que la moyenne : mention</p>");
} else{
    document.write("<p> Vous avez pile la moyenne : rattrapage</p>");
}


if(5 == "5"){
    document.write("le numérique est égual à la chaîne");
}else {
    document.write("le numérique est différent de la chaîne");
}
document.write("<hr>");


if( "avions" > "voiture"){
    document.write("ça va plus vite");
}else {
    document.write("c'est mieux pour les petits trajets");
}
document.write("<hr>");


if(5 === "5"){
    document.write("le numérique est strictement égual à la chaîne");
}else {
    document.write("le numérique est strictement différent de la chaîne");
}
document.write("<hr>");

nb = parseInt(nb);
if( nb ){
    document.write("nb est vrai");
}else {
    document.write("nb est faux");
}





let n = 5 - "sdfqsf";

/* isNaN est une fonction qui est vrai si n vaut NotANumber. Donc isNaN est faux si n est un nombre */

if( isNaN(n)){
    document.write("n n'est pas un nombre (NaN)<br>");
} else{
    document.write("n est un nombre<br>");
}

//

let identifiant = prompt("Tapez votre identifiant de connexion");
let mdp = prompt("Tapez votre mot de passe");

//identifiants == admin et mdp == 12345
if(identifiant == "admin"){
    if(mdp == "12345"){
        document.write("Bravo, vous êtes connecté<br>");
    }else {
        document.write("Le mot de passe ne correspond pas<br>");
    }
}else {
    document.write("Cet identifiant n'existe pas<br>");
}

//
if(identifiant == "admin" && mdp == "12345"){
    document.write("Bravo, vous êtes connecté<br>");
}else {
    document.write("identifiant et/ou mot de passe incorrect<br>");
}

//
let vacances = confirm("Êtes-vous en vacances ?");
let weekEnd = confirm("Est-ce le week-end ?");

if(vacances || weekEnd){
    document.write("il faut se reposer... ou faire du JS, c'est mieux 🤷‍♂️");
}else {
    document.write("Au travail !!!");
}

// switch

let jour = prompt("Quel jour sommes-nous ?");
switch(jour){
    case "lundi":
        document.write("c'est dur de se lever");
        break;
    case "mercredi": case "jeudi":
        document.write("milieu de semaine, courage !");
        break;
    case "vendredi":
        document.write("dernière journée de travail");
    case "mardi":
        document.write("c'est encore plus dure de se lever");
        break;

    default:
        document.write("WEEK-END !!!!");
}