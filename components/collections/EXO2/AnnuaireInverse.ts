import { Personne } from './Personne';

export class AnnuaireInverse {
    public personnes: Map<string, Personne> = new Map<string, Personne>();

    ajouterPersonne(personne: Personne) {
        this.personnes.set(personne.numeroTelephone, personne);
    }
    supprimerPersonne(personne: string) {
        this.personnes.delete(personne);
    }
    recherche(numTel: string) {
        if (this.personnes.get(numTel) !== undefined) {
            return this.personnes.get(numTel);
        }
        return 'Veuillez selectionner une numero existante';
    }
}
