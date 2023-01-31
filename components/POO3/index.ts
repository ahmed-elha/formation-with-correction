// EXO1:
// 1 - Créer la classe Joueur et 4 instances de cette classe (20 < nbPointVie ‹ 50, 1 < nbDegat < 5 et niveau = 1)
// 2 - Créer une instance de la classe Dragon (100 < nbPointVie < 200, 5 < nbDegat < 20 et nbXP = 250)
// 3 - Dans le joueur, créer la méthode gagnerNiveau(), qui augmente les PV du joueur de 10,
//   augmente son nbDegat de 5 et son niveau de 1 ; Passer vos joueurs niveau 2

// 4 - Dans le joueur, créer la méthode attaquer (Dragon dragon), qui retranche « nbDegat » du joueur
//   1 au « nbPointVie » du dragon. Si le dragon meurt (nbPointVie <=0), le joueur gagne 1 niveau

// 5 - Dans le dragon, créer la méthode attaquer(Joueur joueur), qui retranche « nbDegat » du dragon
// au « nbPointVie » du joueur. Si le joueur meurt (nbPointVie <=0), le dragon gagne 50 XP

// 6 - Simuler des combats : créer un tableau de Joueur, faites les attaquer le dragon. Puis le dragon
// attaque 1 joueur du tableau. Les joueurs morts ne jouent plus
// 7 - Les joueurs disposent maintenant d'une réserve de Mana (20 points), commune à tous les
// joueurs. Cette réserve permet de rajouter des dégâts (1 point Mana = + 4 dégâts). Chaque attaque décrémente de 1 unité cette réserve

import { Joueur } from './EXO1/Joueur';
import { Dragon } from './EXO1/Dragon';
import { Amoire } from './EXO2/Amoire';
import { Table } from './EXO2/Table';
import { Commode } from './EXO2/Commode';

const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const main = () => {
    const joueur1 = new Joueur('joueur 1', random(20, 50), random(1, 5));
    const joueur2 = new Joueur('joueur 2', random(20, 50), random(1, 5));
    const joueur3 = new Joueur('joueur 3', random(20, 50), random(1, 5));
    const joueur4 = new Joueur('joueur 4', random(20, 50), random(1, 5));
    const shenron = new Dragon('Shenron', random(100, 200), random(5, 20), 250);

    let game = true;

    const tabJoueur = [joueur1, joueur2, joueur3, joueur4];

    while (game) {
        for (let i = 0; i < tabJoueur.length; i++) {
            tabJoueur[i].attaquerDragon(shenron);
            if (shenron.nbPointVie <= 0) {
                game = false;
                break;
            }
        }
        const aleatoire = random(0, tabJoueur.length - 1);
        shenron.attaquerJoueur(tabJoueur[aleatoire]);
        if (tabJoueur[aleatoire].nbPointVie <= 0) {
            tabJoueur.splice(tabJoueur.indexOf(tabJoueur[aleatoire]), 1);
            if (tabJoueur.length === 0) {
                game = false;
            }
        }
    }
};

// main();

// EXO2:
// 1 - Implémenter le diagramme suivant:
// 2 - Dans un main, créer des instances de ces différentes classes.
// 3 - Créer une Interface « Transportable » qui propose la méthode transporter(). Cette méthode
//    retourne le nombre de personnes nécessaires (au moins 1 personne) pour transporter l'objet en question sachant que :
//    -   on a besoin de 1 personne supplémentaire par tranche de 50 Kg de poids
//    - on a besoin de 1 personne supplémentaire par tranche de 2 m^3
// On ne retiendra que le maximum de personne nécessaire pour le poids ou pour le volume.
//     Exemple: une armoire de de 120 kg et 1 m^3 nécessite 1 + 2 = 3 personnes.
// Une table de 10 kg et de 3 m^3 nécessite 1 + 1 = 2 personnes.
// 4 - Est-il possible de regrouper les attributs communs dans une seule classe ? Si oui, comment ? Implémenter la solution

const main2 = () => {
    const armoire = new Amoire('Armoire', 3, 2, 3);
    const table = new Table('Table', 4, 4, 70);
    const commode = new Commode('Commode', 3, 1, 20);

    commode.transporter();
    table.transporter();
    armoire.transporter();
};
main2();
