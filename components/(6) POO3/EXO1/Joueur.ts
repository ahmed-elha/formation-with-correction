import { Dragon } from './Dragon';

export class Joueur {
    public nom: string;
    public nbPointVie: number;
    public nbDegat: number;
    public niveau = 1;

    constructor(nom: string, nbPointVie: number, nbDegat: number) {
        this.nom = nom;
        this.nbPointVie = nbPointVie;
        this.nbDegat = nbDegat;
    }

    gagnerNiveau = () => {
        this.nbPointVie = this.nbPointVie + 10;
        this.nbDegat = this.nbDegat + 5;
        this.niveau = this.niveau + 1;
        console.log(`Le niveau passe à ${this.niveau}`);
        console.log(`Les points de vie passent à ${this.nbPointVie}`);
        console.log(`Le nombre de degat passe à ${this.nbDegat}`);
    };
    attaquerDragon = (dragon: Dragon) => {
        console.log(`Le dragon a ${dragon.nbPointVie} de PV,`);
        dragon.nbPointVie = dragon.nbPointVie - this.nbDegat;
        console.log(
            ` il a subit ${this.nbDegat} de dégat de la part de ${this.nom}, il lui reste ${dragon.nbPointVie}`
        );
        if (dragon.nbPointVie <= 0) {
            this.gagnerNiveau();
            return 'Vous avez tuer le dragon';
        }
    };
}
