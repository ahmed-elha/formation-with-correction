// Commentaire sur une ligne
/* Commentaire
  sur
  plusieurs
  lines
  !!!!
*/

// Variables
let nbA = 3
let nbB = 5

// Exercice 1
// Afficher un "Hello world !"
console.log("Exercice 1");
console.log("Hello World");

// Exercice 2
// Faire une fonction qui va prendre en paramètres deux nombres et qui les additionne
console.log("Exercice 2");

function addition(a, b) {
    return a + b;
}

console.log(addition(2, 4));
    // Exercice 3
    // Faire une fonction qui va afficher proprement l'addition
    // ex :
    // Exercice 3 :
    // a = 8
    // b = 3
    // a + b = 11

function getAddition(a, b) {
    let result = a + b;
    return console.log(`${a} + ${b} = ${result}`);
}

getAddition(3, 4);
'-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --'
// Exercice 4
// Faire une fonction qui prends x en paramètre et qui affiche "J'ai 1 an", "J'ai 2 ans", ..., "J'ai x an"
// Faire les deux méthode (for et while)
console.log("Exercice 4");

console.log("1st METHODE");

function myAge1(x) {
    for (let i = 0; i <= x; i = i + 1) {
        console.log(`J'ai ${i} ans`);
    }
}
myAge1(20);

console.log("2nd METHODE");

function myAge2(x) {
    let i = 0;
    while (i < x) {
        i = i + 1;
        console.log(`J'ai ${i} ans`);
    }
}

myAge2(12);

// Exercice 5
// Faire une fonction qui vérifie si une personne a la droit de boire de l'alcool ou non
console.log("Exercice 5");

console.log("1st METHODE");

function drinkAlcool1(x) {
    let i = x;
    if (i < 18) {
        console.log("Va boire du jus gamin");
    } else {
        console.log("Vas-y mon grand");
    }
}

drinkAlcool1(18);

console.log("2nd METHODE");

function drinkAlcool2(x) {
    x < 18
        ? console.log("Va boire du jus gamin")
        : console.log("Vas-y mon grand");
}

drinkAlcool2(18);

// Exercice 6
// Faire une fonction qui affiche tous les éléments d'un tableau
console.log("Exercice 6");

console.log("1st METHODE");

function getElemArray1() {
    let a = [1, 23, 55, 42, 67, 32];
    for (let i = 0; i < a.length; i = i + 1) {
        console.log(a[i]);
    }
}

getElemArray1();

console.log("2nd METHODE");

function getElemArray2() {
    let a = [1, 23, 55, 42, 67, 32];
    let i = 0;
    while (i < a.length) {
        console.log(a[i]);
        i = i + 1;
    }
}

getElemArray2();

// Exercice 7
// Faire une fonction qui trie un tableau
console.log("Exercice 7 ");

console.log("1st METHODE");

// function trieTabl1() {
//   let a = [1, 23, 55, 42, 67, 32];
//   let i = 0;

//   while (i < a.length) {
//     i = i + 1;

//     if (a[i] < a[i + 1]) {
//       a[i];
//     }
//     else if (a[i] > a[i + 1]) {
//       a[i + 1];
//     }
//     else if (a[i] === a[i + 1]) {
//       a[i];
//     }
//   }
//   console.log(a[i]);
// }

// trieTabl1();

// function trieTabl1(a){
//    a = [1, 23, 55, 42, 67, 32];
//   for (i=0;i<a.length;i=i++){
//     posmin=i
//     for (j=0;j<a.length;){}
//   }
// }

function sort(tab1) {
    for (let i = 0; i < tab1.length - 1; i++) {
        //stocker l'index de l'élément minimum
        let min = i;
        for (let j = i + 1; j < tab1.length; j++) {
            if (tab1[j] < tab1[min]) {
                // mettre à jour l'index de l'élément minimum
                min = j;
            }
        }
        //on crée une variable de stockage temporaire pour stocker
        //la plus petite varibale
        //on inverse
        let tmp = tab1[i];
        tab1[i] = tab1[min];
        tab1[min] = tmp;
    }
    return tab1;
}
let tab1 = [5, 8, 11, 6, 1, 9, 3];

sort(tab1);
console.log(tab1);

// Exercice 8
// Faire une fonction qui dit si un nombre est pair ou impair
console.log("Exercice 8");

console.log("1st METHODE");

function parite(a) {
    if (a % 2 == 0) {
        return console.log("ce nombre est pair");
    } else {
        console.log("ce nombre est impair");
    }
}
parite(50);

console.log("2nd METHODE");

function parite2(a) {
    a % 2 == 0
        ? console.log("ce nombre est pair")
        : console.log("ce nombre est impair");
}
parite2(0);

// Exercice 9
// Faire une fonction qui affiche la moyenne de tous les éléments d'un tableau
console.log("Exercice 9");

console.log("1st METHODE");

//difficulter a renvoyer la valeur du resultat
// C'est normal je suis un gros connard j'ai mis % au lieu de / pour diviser
//Je pense que je dois aller dormir
function moyenne1() {
    let a = [12, 42, 445, 32, 21, 45];
    let result = 0;
    let summ = 0;
    for (i = 0; i < a.length; i = i++) {
        summ = summ + a[i++];
    }
    //   console.log(summ);

    //    console.log(a.length)
    result = summ / a.length;
    // console.log(result)

    console.log(`La moyenne est ${result}`);
}

moyenne1();

console.log("2nd METHODE");

function moyenne2() {
    let a = [12, 42, 445, 32, 212, 45];
    let result = 0;
    let summ = 0;
    let i = 0;
    while (i < a.length) {
        i = i++;
        summ = summ + a[i++];
    }
    result = summ / a.length;
    console.log(`La moyenne est ${result}`);
}

moyenne2();

// Exercice 10
// Faire une fonction qui affiche un nombre en nombre romain
console.log("Exercice 10");

console.log("1st METHODE");

function solution(number) {
    let result = "",
        //Je pose 2 listes une avec des chiffres arabes l'autres romains,et  a chaque fois je vais associer une value arabe a
        //une value romaine
        arabe = [100, 90, 50, 40, 10, 9, 5, 4, 1],
        romain = ["C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    arabe.map(function (value, index) {
        while (number >= value)
        {
            // (+=) calcule la somme ou la concaténation des deux opérandes puis affecte le résultat à la variable représentée par l'opérande gauche.
            result += romain[index];
            //(-=) calcule la soustraction de l'opérande gauche par l'opérande droit puis affecte le résultat à la variable représentée par l'opérande gauche.
            number -= value;
        }
    });
    console.log(result);
    return result;
}

solution(98);

// Exercice 11
// Faire une fonction qui prends en paramètre un nombre et qui retourne la somme des nombres de 1 à x
console.log("Exercice 11");

console.log("1st METHODE");

function somme(x) {
    let result = 0;
    for (i = 0; i <= x; i = i++) {
        result = result + i++;
    }
    console.log(result);
}
somme(15);

console.log("2nd METHODE");

function somme2(x) {
    let result = 0;
    let i = 0;
    while (i <= x) {
        i = i++;
        result = result + i++;
    }
    console.log(result);
}
somme2(15);

// Exercice 12
// Faire une fonction qui retourne la factorielle d'un nombre placé en paramètre
console.log("Exercice 12");

console.log("1st METHODE");

function factorielle1(x) {
    let result = 1;
    if (x == 0 || x == 1) {
        console.log(1);
    } else {
        for (i = 1; i <= x; i = i++) {
            result = result * i++;
        }
        console.log(result);
    }
}
factorielle1(15);

console.log("2nd METHODE");

function factorielle2(x) {
    let result = 1;
    let i = 1;
    if (x == 0 || x == 1) {
        console.log(1);
    } else {
        while (i <= x) {
            i = i++;
            result = result * i++;
        }
        console.log(result);
    }
}
factorielle2(0);

// Exercice 13
// Faire une fonction qui affiche la table de multiplication d'un nombre donné en paramètre
// ex :
// maFonction(5)
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// .
// .
// .
// 5 x 10 = 50
console.log("Exercice 13");

console.log("1st METHODE");

function tablmultipl1(x) {
    let result = 0;
    for (i = 1; i <= 10; i = i++) {
        result = x * i;
        console.log(`${x}x${i++} = ${result}`);
    }
}
tablmultipl1(5);

console.log("2nd METHODE");

function tablmultipl2(x) {
    let result = 0;
    let i = 1;
    while (i <= 10) {
        i = i++;
        result = x * i;
        console.log(`${x}x${i++} = ${result}`);
    }
}
tablmultipl2(5);

// Exercice 14
// Faire une fonction qui retourne le plus grand nombre dans un tableau
console.log("Exercice 14 XXXXXXXXXXXXXX");

console.log("1st METHODE");

function max() {
    let bigger = 0;
    let a = [23, 442, 54, 1200, 56, 89];

    // Je parcours ma liste
    for (let i = 0; i < a.length; i++) {
        // je compare bigger avec l'element de mon tableai
        if (bigger < a[i]) {
            // s'il est plus grand je le stock
            bigger = a[i];
        } else {
        }
        // sinon je fais rien
    }
    console.log(bigger);
}

max();

console.log("2nd METHODE");

function max1() {
    let bigger = 0;
    const array = [23, 442, 54, 1200, 56, 89];

    for (let i = 0; i < array.length; i++) {
        // je compare bigger avec l'element de mon tableau
        bigger = bigger < array[i] ? array[i] : bigger;

        // s'il est plus grand je le stock

        // sinon je fais rien
    }

    //condition ? true : false

    console.log(bigger);
}
max1();

// Exercice 15
// Faire une fonction qui prends deux nombres en paramètres et qui retourne le plus grand des deux
console.log("Exercice 15");

console.log("1st METHODE");

function biggerthan1(a, b) {
    let biggerthan = 0;
    if (a < b) {
        biggerthan = b;
    } else {
        biggerthan = a;
    }
    console.log(biggerthan);
}
biggerthan1(12, 8);

console.log("2nd METHODE");

function biggerthan2(a, b) {
    a < b ? console.log(b) : console.log(a);
}

biggerthan2(101, 12);

// Exercice 16
// Faire une fonction qui va échanger deux éléments dans un tableau. Les indices des éléments seront donnés en paramètres
console.log("Exercice 16");

console.log("1st METHODE");

function inverse(x, y) {
    let a = [12, 42, 445, 32, 21, 45];
    [a[x], a[y]] = [a[y], a[x]];

    console.log(a);
}
inverse(0, 3);


// Exercice 17
// Faire une fonction qui initialise une matrice. La taille de la matrice sera donnée en paramètres.
console.log("Exercice 17");

let tabl1 = [1, 2, 3, 4, 5, 6];
let tabl2 = [7, 8, 9, 12, 52, 56];
let matrice = [tabl1, tabl2];

function matrix1(matrice) {
    for (i = 0; i < matrice.length; i++) {
        console.log(matrice[i].join(" "));
        // for (j=0;j<matrice[i].length;j++){
        //  console.log(matrice[i][j])
        // }
    }
}

matrix1(matrice);

// Exercice 18
// Faire une fonction qui calcule la somme de deux matrice et qui retourne le résultat.
console.log("Exercice 18");
console.log("1st METHODE");

function matrice3(H, W) {
    let matrix = [];

    for (let y = 0; y < H; y++) {
        matrix[y] = [];
        for (let x = 0; x < W; x++) {
            matrix[y][x] = "X";
        }
    }

    console.log(matrix.join("\n"));
}
matrice3(4, 6);

// Exercice 19
// Faire une fonction qui retourne l'indice de la première occurence d'un élément du tableau. Renvoyer -1 si élément non trouvé.
// ex :
// tab = [1, 12, 5, 3, 8, 15]
// search(12)
// --> 1
console.log("Exercice 19");
console.log("1st METHODE");

function sommematrice() {
    let tabl1 = [2, 3, 4, 5];
    let tabl2 = [4, 3, 3, 1];
    // tableau.push(14)
    let result = [];
    for (let i = 0; i < tabl1.length; i++) {
        result.push(tabl1[i] + tabl2[i]);
    }
    console.log(result);
}

sommematrice();

console.log("2nd Methode");

function sommematrice1() {
    let a = [4, 1, 3, 4, 5];
    let b = [5, 4, 3, 2, 1];
    let result = [];

    a.map(function (x, index) {
        return result.push(b[index] + x);
    });
    console.log(result);
}
sommematrice1();

// Exercice 20
// Faire une fonction qui permet d'afficher les lignes suivantes :
// *
// **
// ***
// ****
// *****
console.log("Exercice 20");
// console.log("faux mais je garde quand meme");
// function recherche(i) {
//   let a = [4, 1, 3, 8, 5];

//   if (i <= a.length) {
//     console.log(a[i]);
//   } else {
//     console.log(-1);
//   }
// }
// recherche(13);

function recherche1(x) {
    let a = [4, 5, 3, 8, 5];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return i;
        }
    }
    return -1;
    //if (a.includes(x)) {
    //   console.log(a.indexOf(x));
    // } else {
    //   console.log(-1);
    // }
}
console.log(recherche1(8));

//Exercice 21
console.log("Exercice 21");

function stars(x) {
    let s = "";
    for (let index = 0; index < x; index++) {
        s = s + "*";
        console.log(s);
    }
}
stars(5);

// Pour chaque fonction, si il existe plusieurs méthodes pour réaliser l'exercice, utiliser toutes les méthodes (ex : for/while, if/ternaire...)
