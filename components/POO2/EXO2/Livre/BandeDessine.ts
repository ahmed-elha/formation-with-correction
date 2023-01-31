import { Auteur } from '../Auteur';
import { Genre } from '../Genre/Genre';
import { Livre } from '../Livre';
import { Prix } from '../Prix';

export class BandeDessine extends Livre implements Prix {
    public protagonisteNom: string;
    public protagonistePrenom: string;
    public prix: number;

    constructor(
        auteur: Auteur,
        isbn: number,
        genre: Genre,
        protagonisteNom: string,
        protagonistePrenom: string,
        prix: number
    ) {
        super(auteur, isbn, genre);
        this.protagonisteNom = protagonisteNom;
        this.protagonistePrenom = protagonistePrenom;
        this.prix = prix;
    }

    putPrice(price: number): number {
        return this.prix * price;
    }
}
