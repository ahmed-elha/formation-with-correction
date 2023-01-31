import { ITransportable } from './ITransportable';
import { Meuble } from './Meuble';

export class Amoire extends Meuble implements ITransportable {
    public nbPortes: number;
    constructor(nom: string, volume: number, poids: number, nbPortes: number) {
        super(nom, volume, poids);
        this.nbPortes = nbPortes;
    }
}
