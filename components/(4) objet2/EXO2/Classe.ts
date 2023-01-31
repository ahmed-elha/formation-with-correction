import { Eleve } from './Eleve';

export class Classe {
    public niveau: string;
    public listeEleve: Eleve[] = [];
    constructor(niveau: string) {
        this.niveau = niveau;
    }
    addEleve(eleve: Eleve) {
        this.listeEleve.push(eleve);
    }
    afficheNombreEleveClasse = () => {
        console.log(`la classe comporte ainsi ${this.listeEleve.length} eleve(s)`);
    };
    afficheEleveClasse = () => {
        console.log(`La classe est ${this.niveau} avec comme eleve `);
        let count = 0;
        for (let i = 0; i < this.listeEleve.length; i = i + 1) {
            count = i + 1;
            this.listeEleve[i].afficheEleve(count);
        }
    };
}
