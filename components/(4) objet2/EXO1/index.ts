// 1°- Dans un nouveau package, créer la classe Meuble, qui possède comme attribut un nom, un
// volume. Créer une classe Piece, qui possède un nom, un volumeGlobal, un volumeRestant et une
// liste de Meuble.
// 2° - Dans un Main, créer des instances de Meuble et de Piece, avec des valeurs. Ne pas ajouter de
// Meuble dans les Piece pour l'instant.
// 3° - Faire une méthode pour afficher les meubles et les pièces
// 4° - Dans la classe Piece, créer une méthode add(Meuble) qui ajoute un meuble à la pièce si le
// volumeRestant de la pièce est supérieur au volume du meuble, et soustrait le volume du meuble du
// volume restant de la pièce. Que doit retourner cette méthode ?
//     5° . Dans la classe Piece, créer une méthode supprime(Meuble) qui enlève un meuble à la pièce si le
// meuble est présent dans la pièce. La pièce récupère le volume libéré par le meuble. Que se passe-t-il
// si on retire un meuble non présent dans une pièce ?

import { Meuble } from './Meuble';
import { Piece } from './Piece';

function afficheMeuble(meuble: Meuble) {
    console.log(`le meuble est ${meuble.nom} et il fait ${meuble.volume}`);
    console.log('-----------------');
}

function affichePiece(piece: Piece) {
    console.log(`la piece est ${piece.nom} et elle dispose de ${piece.volumeGlobal}m² avec pour meuble `);
    for (const meuble of piece.listeMeuble) {
        afficheMeuble(meuble);
    }
    console.log('-----------------');
}

function main() {
    const armoire: Meuble = new Meuble('armoire', 1.2);
    const table: Meuble = new Meuble('table', 1.3);
    const tiroir: Meuble = new Meuble('tiroir', 1.4);
    const bureau: Meuble = new Meuble('bureau', 1.5);
    const dodo1 = new Piece('chambre a coucher 1', 5);
    dodo1.addMeuble(armoire);
    dodo1.addMeuble(table);
    dodo1.addMeuble(tiroir);
    dodo1.addMeuble(bureau);

    affichePiece(dodo1);
}
main();
