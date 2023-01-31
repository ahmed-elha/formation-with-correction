import { Joueur } from './Joueur';

export class Dragon {
    public nom: string;
    public nbPointVie: number;
    public nbDegat: number;
    public nbXP: number;
    constructor(nom: string, nbPointVie: number, nbDegat: number, nbXP: number) {
        this.nom = nom;
        this.nbPointVie = nbPointVie;
        this.nbDegat = nbDegat;
        this.nbXP = nbXP;
    }

    attaquerJoueur = (joueur: Joueur) => {
        console.log(`Le ${joueur.nom} a ${joueur.nbPointVie} de PV,`);
        joueur.nbPointVie = joueur.nbPointVie - this.nbDegat;
        console.log(` il a subit ${this.nbDegat} de dégat, il lui reste ${joueur.nbPointVie}`);
        if (joueur.nbPointVie <= 0) {
            console.log(`le joueur ${joueur.nom} est dead, il estexclu de la partie`);
            return (this.nbXP = this.nbXP + 50);
        }
    };
}
