import { Auteur } from './Auteur';
import { Genre } from './Genre/Genre';

export abstract class Livre {
    public auteur: Auteur;
    public isbn: number;
    public genre: Genre;
    protected constructor(auteur: Auteur, isbn: number, genre: Genre) {
        this.auteur = auteur;
        this.genre = genre;
        this.isbn = isbn;
    }
}
