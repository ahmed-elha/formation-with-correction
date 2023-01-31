import { Eleve } from '../components/POO2/exo1/Eleve';
import { Matiere } from '../components/POO2/exo1/Matiere';
import { MatiereEnum } from '../components/POO2/exo1/MatiereEnum';
import { Note } from '../components/POO2/exo1/Note';

describe('POO2 : EXO1', () => {
    const eleve = new Eleve('Jeandu', 'Michel', [new Matiere(MatiereEnum.MATH, [])]);
    test('Create a student', () => {
        expect(eleve.nom).toBe('Jeandu');
        expect(eleve.prenom).toBe('Michel');
        expect(eleve.matieres[0].nom).toBe(MatiereEnum.MATH);
    });
    test('AddCourse', () => {
        eleve.addMatiere(new Matiere(MatiereEnum.FR, []));
        expect(eleve.matieres[1].nom).toBe(MatiereEnum.FR);
    });
    test('AddNote', () => {
        eleve.matieres[1].addNote(new Note(17, 2));
        eleve.matieres[1].addNote(new Note(14, 3));
        expect(eleve.matieres[1].notes[0]).toEqual({ note: 17, coefficient: 2 });
    });
    test('Moyenne FR should be 15.2', () => {
        expect(eleve.matieres[1].moyenne()).toBe(15.2);
    });
    test("Moyenne Générale de l'élève should be 11.4", () => {
        eleve.matieres[0].addNote(new Note(15, 4));
        expect(eleve.moyenneGenerale()).toBe(15.1);
    });
});
