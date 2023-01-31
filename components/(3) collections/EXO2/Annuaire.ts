import { Personne } from './Personne';

export class Annuaire {
    public personnes: Map<string, Personne> = new Map<string, Personne>();

    ajouterPersonne(personne: Personne) {
        this.personnes.set(personne.nom, personne);
    }
    supprimerPersonne(personne: string) {
        this.personnes.delete(personne);
    }
    rechercherPersonne(key: string) {
        if (this.personnes.get(key) !== undefined) {
            return this.personnes.get(key);
        }
        return 'Veuillez selectionner une personne existante';
    }
}
