// 1° - Implémenter le diagramme UML ci-contre
// 2° - Dans un Main, créer 1 école, avec 1 classe de 3 élèves et 1 classe de 2 élèves
// 3° - Afficher l'intégralité de l'école. Exemple :
// Ecole : CESI Arras
//     => Classe : Nom1, niveau1, nbEleve
//     => Eleve : NomEleve1, PrenomEleve1
//     => Eleve : NomEleve2, PrenomEleve2
//     => Eleve : NomEleve3, PrenomEleve3
//     => Classe : Nom2, niveau2, nbEleve
//     => Eleve : NomEleve4, PrenomEleve4
//     => Eleve : NomEleve5, PrenomEleve5
//
// 4° - Faire une fonction pour changer 1 élève d'une classe à l'autre.

import { Ecole } from './Ecole';
import { Classe } from './Classe';
import { Eleve } from './Eleve';

const main = () => {
    const triolo = new Ecole('Triolo');
    const troisieme = new Classe('troisieme');
    const hugo = new Eleve('Hugo', 'z');
    const ahmed = new Eleve('Ahmed', 'e');

    const sixieme = new Classe('sixieme');
    const guigui = new Eleve('Guigui', 'r');
    const lucas = new Eleve('Lucas', 'f');
    const nico = new Eleve('Nico', 'f');

    triolo.addClasse(sixieme);
    triolo.addClasse(troisieme);
    sixieme.addEleve(guigui);
    sixieme.addEleve(lucas);
    sixieme.addEleve(nico);
    troisieme.addEleve(hugo);
    troisieme.addEleve(ahmed);

    triolo.afficheEcole();
};
main();
