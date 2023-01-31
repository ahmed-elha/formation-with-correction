import { exo2, exo3, exo5BrutForce, exo5Dicho } from '../components/boucle';

describe('BOUCLES : EXO2', () => {
    test(`3 should return C'est un nombre, positif et non décimal`, () => {
        expect(exo2(3)).toBe(`C'est un nombre, positif et non décimal.`);
    });

    test(`-3 should return C'est un nombre, négatif et non décimal`, () => {
        expect(exo2(-3)).toBe(`C'est un nombre, négatif et non décimal.`);
    });

    test(`3.5 should return C'est un nombre, positif et décimal`, () => {
        expect(exo2(3.5)).toBe(`C'est un nombre, positif et décimal.`);
    });

    test(`-3.5 should return C'est un nombre, négatif et décimal`, () => {
        expect(exo2(-3.5)).toBe(`C'est un nombre, négatif et décimal.`);
    });
});

describe('BOUCLES : EXO 3', () => {
    test('[1,2,3,4,0] should return Somme : 10/Moyenne : 2/Minimum (sans Math) : 0/Maximum (sans Math) : 4/Minimum : 0/Maximum : 4', () => {
        expect(exo3(1, 2, 3, 4, 0)).toBe(
            `Somme : 10/Moyenne : 2/Minimum (sans Math) : 0/Maximum (sans Math) : 4/Minimum : 0/Maximum : 4`
        );
    });
});

describe('BOUCLES : EXO 5', () => {
    test('7 should return : Trouvé en 7 essai(s)', () => {
        expect(exo5BrutForce(7)).toBe('Trouvé en 7 essai(s)');
    });

    test('92 should return : Trouvé en 92 essai(s)', () => {
        expect(exo5BrutForce(92)).toBe('Trouvé en 92 essai(s)');
    });

    test('99 should return : [50,75,87,93,96,98,99] Trouvé en 7 essai(s)', () => {
        expect(exo5Dicho(99)).toBe('[50,75,87,93,96,98,99] Trouvé en 7 essai(s)');
    });

    test('25 should return : [50,25] Trouvé en 2 essai(s)', () => {
        expect(exo5Dicho(25)).toBe('[50,25] Trouvé en 2 essai(s)');
    });

    test('49 should return : [50,25,37,43,46,48,49] Trouvé en 7 essai(s)', () => {
        expect(exo5Dicho(49)).toBe('[50,25,37,43,46,48,49] Trouvé en 7 essai(s)');
    });
});
