
//alert("js dans un fichier base.js");

/*
Commentaires sur plusieurs lignes.
Les commenr=taires ne sont jamais interprétés.
Ou // Commentaire sur une seul ligne.
*/

console.log("affichage de la console");

document.write("Bonjour Didier, bienvenue eu Pole S");

/*VARIABLE :  */

let prenom;     //Déclaration d'une variable
var nombre;     //Déclaration avec le mot-clé 'var'

var nombre;     //On peut rappeler la variable autant de fois que l'on veut contrairement à let

//AFFECTATION : donner une valeur à une variable
prenom = "Didier";
nombre = "Ceci est un texte car le nom de la variable ne change pas sa valeur";

// Déclaration - affectation
let jour = "lundi";

document.write("<h2>Nous somme le ");
document.write(jour);
document.write("</h2>");

/* EXPRESSION : en programmation, une expression est tout ce qui a une valeur. Donc
    - une variable est une expression
    - 5 est une expression
    -2 * 3 est une expression (qui vaut 6)
    
    Une expression a un type. Les languages de programmation ne gèrent pas les textes et les valeurs numériques
        de la même façon.
*/

/* TYPES: les types simples (ou primitifs ou scalaires) sont les suivants :
    -string : chaine de caractères (délimité par des "" guilliemets ou des '' apostrophes
    -number : numérique, soit un nombre entier, soit un nombre réel
    -boolean : booléen. C'est un type qui ne peut avoir que 2 valeurs : true (=vrai) et false(=faux)
*/
prenom = "Fred";    // type string
nombre = 5.2;       // type number
let vf = true       // type boolean

// Pour onnaitre le typê d'une expression, on peut utiliser l'opérateur typeof */
console.log("prenom", prenom, typeof prenom);
console.log("nombre", nombre, typeof nombre);
console.log("vf", vf, typeof vf);

let nombre2 = "5.2";

document.write("La variable nombre2 est le type ");
document.write(typeof nombre2);
document.write(" et vaut ");
document.write(nombre2 );
document.write("<br>");

/* OPERATEURS ARITHMETIQUE */
nombre = 2 + 3;
nombre = 2 - 3;
nombre = 2 * 3;
nombre = 2 / 3;
nombre = 5 % 2; // reste de la division entière


console.log(nombre);
nombre = nombre * 3;
console.log(nombre);

/* 
    OPERATEUR DE CONCATENATION : coller un string derrière un autre string
        opérateur : +
*/

prenom = "Di" + "dier";
console.log(prenom);

document.write("Bonjour " + prenom + " , bienvenue au Pole S<br>");


console.log(nombre - prenom);
/* Si vous faîtes un calcul qui ne peut pas donner un résultat numérique (ex: 2 - "bonjour"), le résultat du type numérique,
    NaN = Not A Number
*/

nombre = 5;

nombre2 = nombre - "2";

console.log("nombre2", typeof nombre2, nombre2);

prenom = "100";

nombre2 = prenom * nombre;
console.log(nombre2);

nombre2 = prenom + nombre;
console.log(nombre2);

nombre2 = parseInt(prenom) + nombre;
console.log("nombre2 après parseInt", nombre2);

//
prenom = "100,5";
nombre2 = prenom + nombre;
console.log("1.nombre2", nombre2);

prenom = "100.5";
nombre2 = prenom + nombre;
console.log("2.nombre2", nombre2);

prenom = "100.5";
nombre2 = prenom - nombre;
console.log("3.nombre2", nombre2);

/*
NOMMAGE DES VARIABLES 
    ● on peut utiliser n'importe quelle lettre, chiffre et les caractères _ et $
    ● Le nom d'une variable ne peut pas commencer par un chiffre
    ● Js est sensible à la caisse (=case sensitive) : js différencie les minuscules et MAJUSCULUES

    CONVENTION (accord entre les développeurs pour le nommage des variables, ce ne sont pas des règles, donc pas obligatoires)
        -casse camelCase : nombreDeVoitures
        -casse snake_case : nombre_de_voitures
        -casse PascaleCase : NombreDeVoitures

        -casse kebab-case : nombre-de-voiture utilisé que pour les classes html
*/

let a;
let A;

/* LES CONSTANTES */
/* une constante, contrairement à une variable ne change pas de valeurs.
    Pour la déclaration, on utilise le mot-clé 'const' .
    Les règles de nommmage sont les mêmes que pour les variables.
    
    Par convention, dans la pluspart des languages de programmation, le nom
    des constantes est tout en MAJUSCULE (mais ce n'est pas toujours le cas
    pour JS)
*/
const JOUR = "lundi";

document.write("Aujourd'hui nous sommes le " + JOUR + " 12 août");
// JOUR = "quelque chose";

/* constantes JS : undefined, NaN
                    Math.PI
*/
const tableauConst = [2, 5, 9];
// tableauConst = "autre chose";
tableauConst.push(789);
console.log(tableauConst);

tableauConst[1] = "nouvelle valeur";