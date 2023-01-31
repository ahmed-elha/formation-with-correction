export class Ville {
    public nom: string;
    public destinations: Ville[] = [];

    constructor(nom: string) {
        this.nom = nom;
    }

    name(): string {
        return this.nom;
    }

    afficheDestination(): string {
        let aller = '';
        for (const destination of this.destinations) {
            aller = aller + destination.nom + ' , ';
        }
        return (
            'la ville de depart est : ' +
            this.nom +
            ' et a comme destination ' +
            aller.substring(0, aller.length - 3) +
            '\n'
        );
    }

    afficheAllerRetour() {
        for (const destinations of this.destinations) {
            for (const retour of destinations.destinations) {
                if (this.nom === retour.nom) {
                    console.log(this.nom + ' - ' + destinations.nom + ' : ok');
                }
            }
        }
    }
}
