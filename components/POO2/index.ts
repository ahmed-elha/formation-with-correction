import { Matiere } from './EXO1/Matiere';
import { MatiereEnum } from './EXO1/MatiereEnum';
import { Note } from './EXO1/Note';
import { Eleve } from './EXO1/Eleve';
import { Auteur } from './EXO2/Auteur';
import { Genre } from './EXO2/Genre/Genre';
import { GenreEnum } from './EXO2/Genre/Genre.enum';
import { BandeDessine } from './EXO2/Livre/BandeDessine';
import { LivreNormal } from './EXO2/Livre/LivreNormal';
import { LivreNum } from './EXO2/Livre/LivreNum';
import { LivrePoche } from './EXO2/Livre/LivrePoche';
import { Bibliotheque } from './EXO2/Bibliotheque';

/*
 * Exo 1
 * Modéliser le programme suivant
 * Un élève est représenté par son nom et prénom
 * Il suit des cours dans des matières: informatique, math, français, anglais
 * Il a des notes dans une matière
 * Chaque note possède un coefficient
 * L'élève doit pouvoir :
 * - ajouter une matière
 * - liste les matières
 * - saisir une note et son coefficient dans une matière
 * - lister les notes
 * - calculer sa moyenne en tenant compte des coefficients
 * */

const laMatiere: Matiere = new Matiere(MatiereEnum.FR, [
    new Note(2, 1),
    new Note(5, 12),
    new Note(2, 1),
    new Note(5, 12),
]);
const laMatiere1: Matiere = new Matiere(MatiereEnum.MATH, [
    new Note(2, 1),
    new Note(5, 12),
    new Note(2, 1),
    new Note(5, 12),
]);

const ahmed1: Eleve = new Eleve('ahmed', 'elhariri', [laMatiere, laMatiere1]);
ahmed1.matieres[0].addNote(new Note(1, 23));
ahmed1.addMatiere(new Matiere(MatiereEnum.EN, [new Note(2, 13)]));

/*
 * Une bibliothèque souhaite modéliser son fonctionnement.
 * La bibliothèque possède des livres.
 * Les livres sont caractérisés par un code ISBN, un auteur (nom, prénom, période), un résumé.
 * Les livres sont classés par genre : Histoire, Policier, Roman. Documentaire.
 * Chaque genre a un auteur de référence! Les livres peuvent avoir plusieurs formats : poche. normal, numérique.
 * Seuls les livres de poche peuvent être empruntés. Les livres empruntés ont un coût d'emprunt, dépendant du livre.
 * La bibliothèque possède aussi des BandeDessine. Les BandeDessine sont gérées comme des livres mais n'ont pas de résumé.
 * Par contre, elles ont un personnage principal (nom. prénom). Elles peuvent être empruntées.
 *
 * On veut pouvoir :
 * - Connaitre la liste des livres/BandeDessine d'un auteur
 * - Avoir la description d'un livre/BandeDessine à partir de son code ISBN
 * - Connaître la liste des livres/BandeDessine dans un genre donné
 * - Définir et connaître le coût d'emprunt d'un livre/BandeDessine
 */

const victor: Auteur = new Auteur('Victor', 'Hugo', 18);
const sabin: Auteur = new Auteur('Sabin', 'Bimbo', 12);
const harry: Auteur = new Auteur('Maguire', 'Harry', 18);
const cr7: Auteur = new Auteur('Cristiano', 'Ronaldo', 18);
const samos: Auteur = new Auteur('Samos', 'Disponible', 18);
const ahmed: Auteur = new Auteur('El Hariri', 'Ahmed', 18);

const policier: Genre = new Genre(GenreEnum.POL, cr7);
const roman: Genre = new Genre(GenreEnum.ROM, harry);
const documentaire: Genre = new Genre(GenreEnum.DOC, samos);
const hisoire: Genre = new Genre(GenreEnum.HIST, ahmed);
const sciencefiction: Genre = new Genre(GenreEnum.SF, victor);

const onepiece: BandeDessine = new BandeDessine(sabin, 3879383339, policier, 'gringo', 'vladimir', 122);
const naruto: BandeDessine = new BandeDessine(harry, 56794939047, hisoire, 'gringo', 'vladimir', 33);
const tokyorevenger: BandeDessine = new BandeDessine(ahmed, 20348574939, documentaire, 'gringo', 'vladimir', 67);
const dbz: BandeDessine = new BandeDessine(cr7, 56491384584, sciencefiction, 'gringo', 'vladimir', 78);
const hxh: BandeDessine = new BandeDessine(harry, 6574974920, roman, 'gringo', 'vladimir', 54343);
const classeroom: BandeDessine = new BandeDessine(victor, 3455322, roman, 'toto', 'tutu', 789);

const tomtom: LivreNormal = new LivreNormal(
    harry,
    765472864,
    hisoire,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
);
const chevalierRouge: LivreNormal = new LivreNormal(
    cr7,
    78549320578,
    policier,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
);
const lanuitSombre: LivreNormal = new LivreNormal(
    ahmed,
    54893207548,
    documentaire,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
);
const ahmedAtos: LivreNormal = new LivreNormal(
    samos,
    645723890,
    sciencefiction,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
);
const laformationDeGiac: LivreNormal = new LivreNormal(
    sabin,
    394087523,
    roman,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
);

const bambam: LivreNormal = new LivreNum(
    harry,
    765472864,
    hisoire,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
);
const chevalierNoir: LivreNormal = new LivreNum(
    cr7,
    78549320578,
    policier,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
);
const lanuitBlanche: LivreNormal = new LivreNum(
    ahmed,
    54893207548,
    documentaire,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
);
const ahmedAlgo: LivreNormal = new LivreNum(
    samos,
    645723890,
    sciencefiction,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
);
const laformationDeGiacomooo: LivreNormal = new LivreNum(
    sabin,
    394087523,
    roman,
    'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
);

const bumbum: LivreNormal = new LivrePoche(
    harry,
    765472864,
    hisoire,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    16
);
const chevalierArabe: LivreNormal = new LivrePoche(
    cr7,
    78549320578,
    policier,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    100
);
const lanuit: LivreNormal = new LivrePoche(
    ahmed,
    54893207548,
    documentaire,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    34
);
const ahmedChezLui: LivreNormal = new LivrePoche(
    samos,
    645723890,
    sciencefiction,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    54
);
const laformationDePrestige: LivreNormal = new LivrePoche(
    sabin,
    394087523,
    roman,
    '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    66
);
const bibliotheque: Bibliotheque = new Bibliotheque([
    ahmedChezLui,

    lanuit,
    onepiece,
    naruto,
    tokyorevenger,
    dbz,
    hxh,
    classeroom,
    tomtom,
    chevalierRouge,
    lanuitSombre,
    ahmedAtos,
    laformationDeGiac,
    bambam,
    chevalierNoir,
    lanuitBlanche,
    ahmedAlgo,
    laformationDeGiacomooo,
    bumbum,
    chevalierArabe,
    laformationDePrestige,
]);
