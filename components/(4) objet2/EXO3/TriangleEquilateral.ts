import { IRedimentionnable } from './IRedimentionnable';

export class TriangleEquilateral implements IRedimentionnable {
    public cote: number;
    public nom: string;
    constructor(nom: string, cote: number) {
        this.nom = nom;
        this.cote = cote;
    }

    calculAir = (): number => {
        return (this.cote * this.cote) / 2;
    };

    afficheNomEtAttribut = (): void => {
        console.log(
            `Le nom du cercle est ${this.nom} et a pour rayon ${this.cote} est avec comme air ${this.calculAir()}`
        );
    };
    redimentionner = (facteur: number): void => {
        this.cote = this.cote * facteur;
    };
}
