import promptSync from 'prompt-sync';
const prompt = promptSync({});

export class Personne {
    public nom = '';
    public prenom = '';
    public numeroTelephone = '';

    saisirPersonne(): Personne {
        const personne = new Personne();
        while (personne.numeroTelephone === '' || personne.nom === '' || personne.prenom === '') {
            console.log('\n' + 'Veuillez remplir tous les champs');
            if (personne.nom === '') {
                personne.nom = prompt('Entrez un nom : ');
            }
            if (personne.prenom === '') {
                personne.prenom = prompt('Entrez un prenom : ');
            }
            if (personne.numeroTelephone === '') {
                personne.numeroTelephone = prompt('Entrez un numero de telephone : ');
            }
        }
        return personne;
    }
}
