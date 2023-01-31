// eslint-disable-next-line
// @ts-ignore
import promptSync from 'prompt-sync';
const prompt = promptSync({});

/*
BOUCLES : EXO 2
Faire une fonction qui retourne si un paramètre est un nombre ou non.
Si oui, elle retournera s'il est positif, négatif, entier, décimal.
Faire une méthode pour chacun des tests effectués
 */
export function exo2(inconnu: number): string {
    if (typeof inconnu != 'number') {
        return `Ce n'est pas un nombre.`;
    }
    return `C'est un nombre, ${isPositif(inconnu)} et ${isDecimal(inconnu)}.`;
}

function isPositif(inconnu: number): string {
    if (inconnu >= 0) {
        return 'positif';
    } else {
        return 'négatif';
    }
}

function isDecimal(inconnu: number): string {
    if (Number.isInteger(inconnu) === false) {
        return 'décimal';
    } else {
        return 'non décimal';
    }
}

// ------------------------------------------------------------------------------
/*
 * BOUCLES : EXO 3
 * Vérifier que tous les paramètres sont des nombres
 * Calculer et afficher la somme, la moyenne des paramètres
 * Trouver et afficher le minimum et le maximum (avec et sans la librairie Math)
 * */
export function exo3(...parametre: number[]): string {
    const tabl = [...parametre];
    for (let i = 0; i < tabl.length; i++) {
        if (typeof tabl[i] != 'number') {
            return `Les paramètres ne sont pas tous des number`;
        }
    }
    return `Somme : ${somme(tabl)}/Moyenne : ${moyenne(tabl)}/Minimum (sans Math) : ${mininum(
        tabl
    )}/Maximum (sans Math) : ${maximum(tabl)}/Minimum : ${mininum(tabl)}/Maximum : ${maximum(tabl)}`;
}

function somme(tabl: number[]): number {
    let resultat = 0;
    for (let i = 0; i < tabl.length; i++) {
        resultat = resultat + tabl[i];
    }
    return resultat;
}

export function moyenne(tabl: number[]): number {
    return somme(tabl) / tabl.length;
}

export function mininum(tabl: number[]): number {
    let min = tabl[0];
    for (const i of tabl) {
        if (min >= i) {
            min = i;
        }
    }
    return min;
}

export function maximum(tabl: number[]): number {
    let max = tabl[0];
    for (const i of tabl) {
        if (max <= i) {
            max = i;
        }
    }
    return max;
}

// ------------------------------------------------------------------------------
/*
 * BOUCLES : EXO 4
 * Faire un juste prix
 * Faire une fonction qui renvoie : trop petit, trop grand ou exact
 * Demander à l'utilisateur de rentrer un numéro pour comparer
 * Répéter jusqu'à trouver le bon numéro
 * Afficher le nombre d'essais
 */

function randomNumber(max: number): number {
    return Math.floor(Math.random() * max);
}

// eslint-disable-next-line
function exo4(): string {
    const prix = randomNumber(100);
    let choixUser = +prompt(`Chossisez un autre nombre : `);
    while (choixUser != prix) {
        if (choixUser < prix) {
            choixUser = +prompt(`
            Trop petit,
            Chossisez un autre nombre : `);
        } else {
            choixUser = +prompt(`
            Trop grand,
            Chossisez un autre nombre : `);
        }
    }
    return `Bien joué chef `;
}

// ------------------------------------------------------------------------------
/*
 * BOUCLES : EXO 5
 * Faire un juste prix inversé
 * Faire une fonction qui prend en paramètre un nombre entre 1 et 100
 * Trouver le nombre en moins d'essai possible, 2 solutions : force brute puis dichotomie
 */

export function exo5BrutForce(prix: number): string {
    console.log('le prix est :' + prix);

    for (let choix = 0; choix <= prix; choix = choix + 1) {
        console.log(choix);
    }
    return `Trouvé en ${prix} essai(s)`;
}

export function exo5Dicho(prix: number): string | number {
    let maximum = 100;
    let minimum = 0;
    let choix = maximum / 2;
    const choices = [choix];
    while (choix != prix) {
        console.log('minimum : ' + minimum);
        console.log('max :' + maximum);
        console.log('choix :' + choix);
        console.log('prix :' + prix);
        console.log('--------------------------');
        if (prix < choix) {
            maximum = choix;
            choix = Math.floor((minimum + maximum) / 2);
        } else {
            minimum = choix;
            choix = Math.floor((minimum + maximum) / 2);
        }
        choices.push(choix);
    }
    return `[${choices}] Trouvé en ${choices.length} essai(s)`;
}
