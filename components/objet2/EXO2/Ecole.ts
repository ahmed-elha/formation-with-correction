import { Classe } from './Classe';

export class Ecole {
    public nom: string;
    public listeClasse: Classe[] = [];
    constructor(nom: string) {
        this.nom = nom;
    }
    addClasse = (classe: Classe) => {
        this.listeClasse.push(classe);
    };
    afficheEcole = () => {
        console.log(`l'ecole est ${this.nom} avec pour classe`);
        for (let i = 0; i < this.listeClasse.length; i = i + 1) {
            this.listeClasse[i].afficheEleveClasse();
        }
    };
}
