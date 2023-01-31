import { Auteur } from '../Auteur';
import { Genre } from '../Genre/Genre';
import { Livre } from '../Livre';
import { Bibliotheque } from '../Bibliotheque';

export class LivreNum extends Livre {
    public resume: string;
    constructor(auteur: Auteur, isbn: number, genre: Genre, resume: string) {
        super(auteur, isbn, genre);
        this.resume = resume;
    }
}
