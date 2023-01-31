import { Auteur } from '../Auteur';
import { Genre } from '../Genre/Genre';
import { Livre } from '../Livre';
import { Prix } from '../Prix';

export class LivrePoche extends Livre implements Prix {
    public resume: string;
    public prix: number;

    constructor(auteur: Auteur, isbn: number, genre: Genre, resume: string, prix: number) {
        super(auteur, isbn, genre);
        this.resume = resume;
        this.prix = prix;
    }

    putPrice(price: number): number {
        return this.prix * price;
    }
}
