import { ITransportable } from './ITransportable';

export class Meuble implements ITransportable {
    public nom: string;
    public volume: number;
    public poids: number;
    constructor(nom: string, volume: number, poids: number) {
        this.nom = nom;
        this.volume = volume;
        this.poids = poids;
    }

    transporter(): void {
        const personnePoids = Math.ceil(this.poids / 50);
        const personneVolume = Math.ceil(this.volume / 2);
        if (personnePoids < personneVolume) {
            console.log(
                `La ${this.nom} fait ${this.poids} kg et ${this.volume} m 3, il faudrait alors ${personneVolume}`
            );
        } else
            console.log(
                `La ${this.nom} fait ${this.poids} kg et ${this.volume} m 3, il faudrait alors ${personnePoids}`
            );
    }
}
