import { Meuble } from './Meuble';

export class Piece {
    public volumeRestant: number;
    public listeMeuble: Meuble[] = [];
    constructor(public nom: string, public volumeGlobal: number) {
        this.volumeRestant = volumeGlobal;
    }
    addMeuble(meuble: Meuble) {
        if (!this.listeMeuble.includes(meuble) && this.volumeRestant - meuble.volume > 0) {
            this.listeMeuble.push(meuble);
            this.volumeRestant = this.volumeRestant - meuble.volume;
            console.log(`${meuble.nom} est rentré , il me reste ${this.volumeRestant}m dans  ${this.nom} `);
        } else {
            console.log(
                `${meuble.nom} ne rentre pas, il fait ${meuble.volume}, il ne me reste que ${this.volumeRestant} dans ${this.nom}`
            );
        }
    }

    suppMeuble(meuble: Meuble) {
        if (this.listeMeuble.includes(meuble)) {
            this.listeMeuble.splice(this.listeMeuble.indexOf(meuble), 1);
            this.volumeRestant = this.volumeRestant + meuble.volume;
        }
    }
}
