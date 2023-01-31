// 1° - Créer une classe Ville, contenant un nom et une liste de Ville de destination
// 2° - Initialiser les objets avec les données suivantes :
//     - Ville n°1:
// O Nom : Paris
// O Destination : Londres, Munich
// - Ville n°2:
// • Nom : Londres
// O Destination : Paris, Barcelone, Munich
// C) Ville n°3:
// O Nom : Munich
// • Destination: Londres
// - Ville n°4:
// O Nom : Barcelone
// o Destination: Paris, Londres
//
//
//
// 3° - Créer une méthode qui permet d'afficher le nom d'une ville ainsi que la liste de ses destinations
// 4° - Dans une méthode main, afficher la liste de tous les AR directs possibles entre 2 villes:
//     => Pour chaque ville de départ A
//             O Pour chaque ville destination B
//                       Si la ville A appartient aux destinations de B, c'est OK

import { Ville } from './EXO1/Ville';

const paris = new Ville('Paris');
const londres = new Ville('Londres');
const barcelone = new Ville('Barcelone');
const munich = new Ville('Munich');
paris.destinations = [munich, londres];
munich.destinations = [londres];

barcelone.destinations = [paris, londres];
londres.destinations = [barcelone, munich, paris];
// munich.afficheAllerRetour();

// 1° - Créer une classe Personne, avec un nom, prénom et un n° de téléphone
// 2° - Créer une méthode saisirPersonne() qui permet de saisir au clavier le nom, prénom et n° d'une personne. Cette
// méthode retournera un objet de type Personne.
// 3° - Créer une classe Annuaire contenant une collection de Personne. Cette classe doit contenir les méthodes suivantes :
//     -> ajouterPersonne() qui ajoute une personne à l'annuaire
//     -> supprimerPersonne(String nom) qui supprimer une personne de l'annuaire
//     -> rechercherPersonne(String nom) qui retourne et affiche une personne si elle est dans l'annuaire
// 4° Ajouter la possibilité de faire un annuaire inversé, en utilisant le n° de téléphone
// 5° - Utiliser cette classe dans une fonction, avec un menu à 2 niveaux:
//     -> annuaire normal, puis proposer les fonctions ajouter, supprimer, rechercher
//     -> annuaire inversé,
//     puis proposer les fonctions ajouter, supprimer, rechercher

import promptSync from 'prompt-sync';
import { Annuaire } from './EXO2/Annuaire';
import { Personne } from './EXO2/Personne';
import { AnnuaireInverse } from './EXO2/AnnuaireInverse';
const prompt = promptSync({});

const annuaire = new Annuaire();
const annuaireInverser = new AnnuaireInverse();
const personne = new Personne();

// const perso1 = new Personne().saisirPersonne();
// const perso2 = new Personne().saisirPersonne();
// const perso3 = new Personne().saisirPersonne();
//
// annuaire.ajouterPersonne(perso2);

// annuaire.ajouterPersonne(perso3);
// annuaireInverser.ajouterPersonne(perso1);
// annuaireInverser.ajouterPersonne(perso2);
// annuaireInverser.ajouterPersonne(perso3);
// console.log('annuaire ', annuaire);
// console.log('annuaireInverser', annuaireInverser);

let choixFonction: string;

function afficherAcceuilMenu() {
    console.log(' ● Bienvenu dans  le menu de Ahmeeeeeeeed\n');
    console.log(' ● Pour accéder à l`annuraire normal tapez 1');
    console.log(' ● Pour accéder à l`annuraire inversé tapez 2 ');
    console.log(' ● Pour quitter l application tapez 3 \n');
    console.log('Veuillez faire votre choix : \n');
}

function choixAnnuaireNormal() {
    console.log('● Pour saisir une personne tappez a ');
    console.log('● Pour supprimer une personne tappez b ');
    console.log('● Pour rechercher une personne tappez c ');
    console.log('● Pour quitter cette page tappez d ');
    console.log('● Pour consulter l annuaire tappez e ');
    console.log('\n');
}

function saisirAutrePers() {
    console.log('\n');
    console.log('⁜ Voulez-vous saisir une autre personne ? ');
    console.log(' ● Si oui tappez 1');
    console.log(' ● Si non tappez 2');
    console.log('\n');
}
function supprimerAutrePers() {
    console.log('\n');
    console.log('⁜ Voulez-vous supprimer une autre personne ? ');
    console.log(' ● Si oui tappez 1');
    console.log(' ● Si non tappez 2');
    console.log('\n');
}
function rechercherAutrePers() {
    console.log('\n');
    console.log('⁜ Voulez-vous rechercher une autre personne ? ');
    console.log(' ● Si oui tappez 1');
    console.log(' ● Si non tappez 2');
    console.log('\n');
}
function quitterAnnuaire() {
    console.log('\n');
    console.log('⁜ Pour quitter l annuaire tappez 1 sinon poursuivez ');
    console.log('\n');
}

function menu() {
    let main = true;
    let exitMenuFunction = true;
    let exitFunction = true;
    let choixMenu = '';
    let choixMethode = '';
    let continueOrExit = '';
    let choixPersonne = '';

    while (main) {
        afficherAcceuilMenu();
        choixMenu = prompt('');
        if (choixMenu === '1') {
            console.log(' ⁜ Vous avez selectionner l annuaire normal');
            exitMenuFunction = true;
            while (exitMenuFunction) {
                choixAnnuaireNormal();
                choixMethode = prompt('');
                exitFunction = true;
                while (exitFunction) {
                    choixAnnuaireNormal();
                    if (choixMethode === 'a') {
                        console.log('\n');
                        console.log('SAISIS DE LA PERSONNE ');
                        annuaire.ajouterPersonne(personne.saisirPersonne());
                        saisirAutrePers();
                        continueOrExit = prompt('');
                        if (continueOrExit === '1') {
                            exitFunction = true;
                        } else {
                            exitFunction = false;
                        }
                    }
                    if (choixMethode === 'b') {
                        console.log('\n');
                        console.log('SUPPRIMER LA PERSONNE');
                        choixPersonne = prompt('');
                        annuaire.supprimerPersonne(choixPersonne);
                        supprimerAutrePers();
                        continueOrExit = prompt('');
                        if (continueOrExit === '1') {
                            exitFunction = true;
                        } else {
                            exitFunction = false;
                        }
                    }
                    if (choixMethode === 'c') {
                        console.log('RECHERCHER UNE PERSONNE ');
                        choixPersonne = prompt('');
                        console.log(annuaire.rechercherPersonne(choixPersonne));
                        rechercherAutrePers();
                        continueOrExit = prompt('');
                        if (continueOrExit === '1') {
                            exitFunction = true;
                        } else {
                            exitFunction = false;
                        }
                    }
                    if (choixMethode === 'd') {
                        exitFunction = false;
                        exitMenuFunction = false;
                        console.log('⁜ Vous avez quitter l annuaire normal');
                    }
                    if (choixMethode === 'e') {
                        console.log('\n');
                        console.log('CONSULTER L ANNUAIRE');
                        choixPersonne = prompt('');
                        console.log(annuaire);
                        quitterAnnuaire();
                        continueOrExit = prompt('');
                        if (continueOrExit === '1') {
                            exitFunction = false;
                        } else {
                            exitFunction = true;
                        }
                    }
                    if (
                        choixMethode !== 'a' &&
                        choixMethode !== 'b' &&
                        choixMethode !== 'c' &&
                        choixMethode !== 'd' &&
                        choixMethode !== 'e'
                    ) {
                        console.log('erreur refaites votre choix');
                        break;
                    }
                }
            }
        }
        if (choixMenu === '2') {
            console.log('⁜ Vous avez selectionner l annuaire inverse');
            exitMenuFunction = true;
            while (exitMenuFunction) {
                choixAnnuaireNormal();
                console.log('\n');
                choixMethode = prompt('');
                exitFunction = true;
                while (exitFunction) {
                    if (choixMethode === 'a') {
                        console.log('\n');
                        console.log('SAISIS DE LA PERSONNE ');
                        annuaireInverser.ajouterPersonne(personne.saisirPersonne());
                        saisirAutrePers();
                        continueOrExit = prompt('');
                        if (continueOrExit === '1') {
                            exitFunction = true;
                        } else {
                            exitFunction = false;
                        }
                    }
                    if (choixMethode === 'b') {
                        console.log('\n');
                        console.log('SUPPRIMER LA PERSONNE');
                        choixPersonne = prompt('');
                        annuaireInverser.supprimerPersonne(choixPersonne);
                        supprimerAutrePers();
                        continueOrExit = prompt('');
                        if (continueOrExit === '1') {
                            exitFunction = true;
                        } else {
                            exitFunction = false;
                        }
                    }
                    if (choixMethode === 'c') {
                        console.log('RECHERCHER UNE PERSONNE ');
                        choixPersonne = prompt('');
                        console.log(annuaireInverser.recherche(choixPersonne));
                        rechercherAutrePers();
                        continueOrExit = prompt('');
                        if (continueOrExit === '1') {
                            exitFunction = true;
                        } else {
                            exitFunction = false;
                        }
                    }
                    if (choixMethode === 'd') {
                        exitFunction = false;
                        exitMenuFunction = false;
                        console.log('⁜ Vous avez quitter l annuaire normal');
                    }
                    if (choixMethode === 'e') {
                        console.log('\n');
                        console.log('CONSULTER L ANNUAIRE');
                        console.log(annuaireInverser);
                        quitterAnnuaire();
                        continueOrExit = prompt('');
                        if (continueOrExit === '1') {
                            exitFunction = false;
                        } else {
                            exitFunction = true;
                        }
                    }
                    if (
                        choixMethode !== 'a' &&
                        choixMethode !== 'b' &&
                        choixMethode !== 'c' &&
                        choixMethode !== 'd' &&
                        choixMethode !== 'e'
                    ) {
                        console.log('erreur refaites votre choix');
                        break;
                    }
                }
            }
        }
        if (choixMenu === '3') {
            main = false;
            console.log(' ⁜ Vous quittez l application');
        }
        if (choixMenu !== '1' && choixMenu !== '2' && choixMenu !== '3') {
            console.log('erreur refaites votre choix');
        }
        console.log('-----------------');
    }
}

menu();
