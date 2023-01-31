import { Auteur } from '../Auteur';
import { GenreEnum } from './Genre.enum';

export class Genre {
    public genre: GenreEnum;
    public auteurRef: Auteur;
    constructor(genre: GenreEnum, auteurRef: Auteur) {
        this.auteurRef = auteurRef;
        this.genre = genre;
    }
}
