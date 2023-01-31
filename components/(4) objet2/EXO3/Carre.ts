import { IRedimentionnable } from './IRedimentionnable';

export class Carre implements IRedimentionnable {
    public cote: number;
    public nom: string;

    constructor(nom: string, cote: number) {
        this.nom = nom;
        this.cote = cote;
    }
    calculAir = (): number => {
        return this.cote * this.cote;
    };

    afficheNomEtAttribut = (): void => {
        console.log(
            `Le nom du carre est ${this.nom} et a pour cote ${this.cote} est avec comme air ${this.calculAir()}`
        );
    };

    redimentionner = (facteur: number): void => {
        this.cote = facteur * this.cote;
        console.log(`La nouvelle taille du cote est  ${this.cote}`);
    };
}
