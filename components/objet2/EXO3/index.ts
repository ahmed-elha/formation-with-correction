// 1° - Dans un nouveau package, créer une interface Redimensionnable, qui possède la méthode
// redimensionner(int facteur).
// 2°- Créer une classe « Carre », qui possède un nom et un attribut « cote ».
// Créer une classe Cercle qui possède un nom et un attribut « rayon ».
// 3° - Faire une méthode pour afficher le nom et l'attribut dans chacune des classes.
// 4° - Maintenant, ces 2 classes implémentent l'interface Redimensionnable :
// Pour un carré, on multiplie son coté par le facteur Pour un cercle, on multiplie son rayon par le facteur
// 5°- Dans un Main, utiliser la méthode sur des instances de Carre et de Cercle
// 6° - Ajouter la méthode calculerAire() dans l'interface. Quelle est son type de retour ? Faire les
// modifications adéquates dans les classes
// 7° - Dans le Main, utiliser la notion de
// Coupling (cf cours Collections) pour as créer des Carre et des
// VI Cerclef et les stocker dans une liste
// 8° - Parcourir la liste (contenant des carrés et des cercles) pour afficher les objets ainsi que leur aire.
// 9° - Créer une classe Triangle Equilateral, qui implémente Redimensionnable. Ajouter des instances de
// cette classe dans la liste précédente.

import { Cercle } from './Cercle';
import { Carre } from './Carre';
import { TriangleEquilateral } from './TriangleEquilateral';
import { IRedimentionnable } from './IRedimentionnable';

const main = (): void => {
    const ballon = new Cercle('ballon', 10);
    const cube = new Carre('cube', 10);
    const triangle = new TriangleEquilateral('triangle', 10);
    const tab: IRedimentionnable[] = [];
    tab.push(cube, ballon, triangle);
    for (let i = 0; i < tab.length; i++) {
        tab[i].afficheNomEtAttribut();
        console.log('--------------------------');
    }
};
main();
