import { ITransportable } from './ITransportable';
import { Meuble } from './Meuble';

export class Commode extends Meuble implements ITransportable {
    public nbTiroirs: number;

    constructor(nom: string, volume: number, poids: number, nbTiroirs: number) {
        super(nom, volume, poids);
        this.nbTiroirs = nbTiroirs;
    }
}
