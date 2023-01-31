import { Matiere } from './Matiere';

export class Eleve {
    public nom: string;
    public prenom: string;
    public matieres: Matiere[];
    constructor(nom: string, prenom: string, matieres: Matiere[]) {
        this.nom = nom;
        this.prenom = prenom;
        this.matieres = matieres;
    }
    addMatiere(matiere: Matiere) {
        this.matieres.push(matiere);
    }

    moyenneGenerale() {
        let sumMoyenne = 0;
        for (const matiere of this.matieres) {
            sumMoyenne = sumMoyenne + matiere.moyenne();
        }
        return sumMoyenne / this.matieres.length;
    }
}
