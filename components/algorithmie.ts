import {CalculUtil} from "./algorithmie/CalculUtil";
import {ChaineUtil} from "./algorithmie/ChaineUtil";
import {Recherche} from "./algorithmie/Recherche";
import {Tri} from "./algorithmie/Tri";

/*
 * Créer une classe CalculUtil qui aura trois méthodes
 * 1) min(a, b) qui retournera le minimum entre a et b
 * 2) max(a, b) qui retournera le maximum entre a et b
 * 3) inverser(tab, i, j) qui inversera les valeurs des cases i et j du tableau
 */
// eslint-disable-next-line
function Exo1() {
    return CalculUtil.inverser([1, 6], 0, 1);
}


/*
 * Créer une classe ChaineUtil qui aura trois méthodes
 * 1) isVide(a) qui retournera true si la chaine est vide, null, undefined, 0, ''
 * 2) palindrome('bob') qui retournera true ou false si la chaine de caractère est un palindrome
 * 3) voyelle('test') qui retournera le nombre de voyelles de la chaine de caractère
 */
// eslint-disable-next-line
function Exo2() {
    return ChaineUtil.isPalindrome('kayakk');
}


/*
 * Créer une classe Recherche qui aura deux méthodes
 * 1) rechercheMinimum(tab) qui retournera l'indice du minimum dans le tableau
 * 2) rechercheMaximum(tab) qui retournera l'indice du maximum dans le tableau
 */
// eslint-disable-next-line
function Exo3(): number {
    return Recherche.rechercherMinimum([-100, 2, -53, -64, 0, -2]);
}


/*
 * Créer une classe Tri
 * Créer une méthode afficherTableau pour afficher un tableau avec une boucle
 * Créer une méthode triTableau qui va trier le tableau selon l'algorithme suivant
 * Soit i = 0, indice de départ du tableau
 * Parcourir le tableau 1 fois de l'indice i à n pour trouver le minimum
 * Inverser la case du minimum avec la 1ère case du tableau
 * Répéter les opérations en augmentant l'indice i jusqu'à la fin du tableau
 * Afficher le tableau, trier et afficher de nouveau le tableau
 */
// eslint-disable-next-line
function Exo4(): void {
    const tab = [-100, 2, -53, -604, 0, -2];
    Tri.afficherTableau(tab);
    Tri.triTableau(tab);
    Tri.afficherTableau(tab);
}