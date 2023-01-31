import { CalculUtil } from './CalculUtil';

export class Tri {
    static afficherTableau(tab: number[]): string {
        let a = '';
        for (let i = 0; i < tab.length; i++) {
            a = a + tab[i].toString() + ' ';
        }
        return a;
    }

    static triTableau(tab: number[]): number[] {
        for (let i = 0; i < tab.length; i++) {
            let indice = i;

            for (let j = i + 1; j < tab.length; j++) {
                if (tab[indice] >= tab[j]) {
                    indice = j;
                }
            }

            CalculUtil.inverser(tab, i, indice);
        }
        return tab;
    }
}
