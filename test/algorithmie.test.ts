import {CalculUtil} from "../components/algorithmie/CalculUtil";
import {ChaineUtil} from "../components/algorithmie/ChaineUtil";
import {Recherche} from "../components/algorithmie/Recherche";
import {Tri} from "../components/algorithmie/Tri";

describe('ALGO : EXO 1', () => {
    test('Min function between 1 and 3 should return 1', () => {
        expect(CalculUtil.min(1, 3)).toBe(1);
    });

    test('Min function between -1 and 3 should return -1', () => {
        expect(CalculUtil.min(-1, 3)).toBe(-1);
    });

    test('Max function between 1 and 3 should return 3', () => {
        expect(CalculUtil.max(1, 3)).toBe(3);
    });

    test('Max function between 1 and -3 should return 1', () => {
        expect(CalculUtil.max(1, -3)).toBe(1);
    });

    test('Inverser [1,2] should return [2,1]', () => {
        expect(CalculUtil.inverser([1, 2], 0, 1)).toEqual([2, 1]);
    });
});

describe('ALGO : EXO 2', () => {
    test('IsVide(null) should return true', () => {
        expect(ChaineUtil.isNotVide(null)).toBe(false);
    });

    test('IsVide(undefined) should return true', () => {
        expect(ChaineUtil.isNotVide(undefined)).toBe(false);
    });

    test(`IsVide('') should return true`, () => {
        expect(ChaineUtil.isNotVide('')).toBe(false);
    });

    test(`IsVide('oui') should return false`, () => {
        expect(ChaineUtil.isNotVide('oui')).toBe(true);
    });

    test(`IsPalindrome('bob') should return true`, () => {
        expect(ChaineUtil.isPalindrome('bob')).toBe(true);
    });

    test(`IsPalindrome('kayak') should return true`, () => {
        expect(ChaineUtil.isPalindrome('kayak')).toBe(true);
    });

    test(`IsPalindrome('bobo') should return false`, () => {
        expect(ChaineUtil.isPalindrome('bobo')).toBe(false);
    });

    test(`IsPalindrome('') should return false`, () => {
        expect(ChaineUtil.isPalindrome('')).toBe(false);
    });

    test(`nbreVoyelles('test') should return 1`, () => {
        expect(ChaineUtil.nbreVoyelles('test')).toBe(1);
    });

    test(`nbreVoyelles('tester') should return 2`, () => {
        expect(ChaineUtil.nbreVoyelles('tester')).toBe(2);
    });

    test(`nbreVoyelles('bouteille') should return 5`, () => {
        expect(ChaineUtil.nbreVoyelles('bouteille')).toBe(5);
    });

    test(`nbreVoyelles('Une phrase pour tester') should return 8`, () => {
        expect(ChaineUtil.nbreVoyelles('Une phrase pour tester')).toBe(8);
    });
});

describe('ALGO : EXO 3', () => {
    test('RechercheMinimum([1, 2, 3, 6, 4, 5, 0]) should return 6', () => {
        expect(Recherche.rechercherMinimum([1, 2, 3, 6, 4, 5, 0])).toBe(6);
    });

    test('RechercheMinimum([-1, -2, -3, -6, -4, -5, 0]) should return 3', () => {
        expect(Recherche.rechercherMinimum([-1, -2, -3, -6, -4, -5, 0])).toBe(3);
    });

    test('RechercheMaximum([1, 2, 3, 6, 4, 5, 0]) should return 3', () => {
        expect(Recherche.rechercherMaximum([1, 2, 3, 6, 4, 5, 0])).toBe(3);
    });

    test('RechercheMaximum([-1, -2, -3, -6, -4, -5, 0]) should return 6', () => {
        expect(Recherche.rechercherMaximum([-1, -2, -3, -6, -4, -5, 0])).toBe(6);
    });
});

describe('ALGO : EXO 4', () => {
    const array = [3, 7, 32, 2, 54, 87, 12, 5, 21];
    test(`afficherTableau([3 7 32 2 54 87 12 5 21]) should return '3 7 32 2 54 87 12 5 21'`, () => {
        expect(Tri.afficherTableau(array)).toBe('3 7 32 2 54 87 12 5 21 ');
    });

    test(`triTableau([3 7 32 2 54 87 12 5 21]) should return '2 3 5 7 12 21 32 54 87'`, () => {
        expect(Tri.triTableau(array)).toEqual([2, 3, 5, 7, 12, 21, 32, 54, 87]);
    });
});
