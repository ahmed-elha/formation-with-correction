export class CalculUtil {
    static min(a: number, b: number): number {
        return Math.min(a, b);
    }

    static max(a: number, b: number): number {
        return Math.max(a, b);
    }

    static inverser(tab: number[], i: number, j: number): number[] {
        const tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;

        return tab;
    }
}
