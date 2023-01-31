import { Livre } from './Livre';
import { Auteur } from './Auteur';
import { Genre } from './Genre/Genre';

export class Bibliotheque {
    public livres: Livre[];
    constructor(livre: Livre[]) {
        this.livres = livre;
    }

    // foundByIsbn(isbn: number): Livre {
    //     let found: Livre;
    //     for (const livre of this.livres) {
    //         if (livre.isbn === isbn) {
    //             found = livre;
    //         }
    //     }
    //
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     return found;
    // }

    foundByIsbn(isbn: number): undefined | Livre {
        return this.livres.find(livre => livre.isbn === isbn);
    }

    foundBookWriter(auteur: Auteur): Livre[] {
        return this.livres.filter(livre => livre.auteur === auteur);
    }

    foundBookByType(genre: Genre): Livre[] {
        return this.livres.filter(livre => livre.genre === genre);
    }
}
