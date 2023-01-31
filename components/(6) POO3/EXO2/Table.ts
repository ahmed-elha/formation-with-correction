import { ITransportable } from './ITransportable';
import { Meuble } from './Meuble';

export class Table extends Meuble implements ITransportable {
    public nbPlaces: number;

    constructor(nom: string, nbPlaces: number, volume: number, poids: number) {
        super(nom, volume, poids);
        this.nbPlaces = nbPlaces;
    }
}
