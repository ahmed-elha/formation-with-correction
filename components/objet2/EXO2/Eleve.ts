export class Eleve {
    public nom: string;
    public prenom: string;
    constructor(nom: string, prenom: string) {
        this.nom = nom;
        this.prenom = prenom;
    }
    afficheEleve = (count: number) => {
        console.log(`${count} Eleve  : ${this.nom}  ${this.prenom}`);
    };
}
