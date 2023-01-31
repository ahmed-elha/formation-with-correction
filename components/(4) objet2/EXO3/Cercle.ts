import { IRedimentionnable } from './IRedimentionnable';

export class Cercle implements IRedimentionnable {
    public rayon: number;
    public nom: string;

    constructor(nom: string, rayon: number) {
        this.nom = nom;
        this.rayon = rayon;
    }
    calculAir = (): number => {
        return 2 * 3.14 * this.rayon;
    };
    afficheNomEtAttribut = (): void => {
        console.log(
            `Le nom du cercle est ${this.nom} et a pour rayon ${this.rayon} est avec comme air ${this.calculAir()}`
        );
    };

    redimentionner = (facteur: number): void => {
        this.rayon = facteur * this.rayon;
    };
}
