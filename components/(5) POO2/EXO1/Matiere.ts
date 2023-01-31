import { Note } from './Note';

export class Matiere {
    public nom: string;
    public notes: Note[];

    constructor(matiere: string, notes: Note[]) {
        this.nom = matiere;
        this.notes = notes;
    }
    addNote(note: Note) {
        this.notes.push(note);
    }
    moyenne(): number {
        let sumCoef = 0;
        let noteFoisCoef = 0;
        for (const note of this.notes) {
            sumCoef = sumCoef + note.coefficient;
            noteFoisCoef = noteFoisCoef + note.note * note.coefficient;
        }
        return noteFoisCoef / sumCoef;
    }
}
