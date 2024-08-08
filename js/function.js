function ecrireLigne(texte){
    document.write(texte + "<br>");
}

function ecrire(texte){
    document.write(texte);
}

function addition(nb1, nb2){
    //return parseFloat(nb1) + parseFloat(nb2);
    return Number(nb1) + Number(nb2); // Number transforme n'importe quel type en numérique.
    console.log("L' instruction après le 'return' ne sera jamais exécutée");
}

function derniereValeur(tableau){
    return tableau[[tableau.length - 1]];
}

function plusPetiteValeur(tableau){
    let valeur = tableau[0];
    for(let position of tableau){
        if(position < valeur){
            valeur = position;
        }
    }
    return valeur;
}

function montantRemise(prix, pourcentage){
    let a = "0." + pourcentage;
    let remise =prix * a;
    return remise; 
}

function prixSolde(prix, pourcentage){
    let a = "1." + pourcentage;
    let remise = prix / a;
    return remise;
}