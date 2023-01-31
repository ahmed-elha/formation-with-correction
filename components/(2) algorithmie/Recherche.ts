export class Recherche {
    static rechercherMinimum(tab: number[]): number {
        let indice = 0;

        for (let i = indice; i < tab.length; i++) {
            if (tab[indice] >= tab[i]) {
                indice = i;
            }
        }
        return indice;
    }

    static rechercherMaximum(tab: number[]): number {
        let max = tab[0];
        for (const i of tab) {
            if (max <= i) {
                max = i;
            }
        }
        return tab.indexOf(max);
    }
}
