export class ChaineUtil {
    static isNotVide(a: undefined | string | null): boolean {
        return !!a;
    }

    static isPalindrome(x: string): boolean {
        if (x.length === 0) return false;

        for (let i = 0; i < x.length; i++) {
            if (x[i] !== x[x.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    static nbreVoyelles(x: string): number {
        const voyelle = ['a', 'e', 'i', 'o', 'u', 'y'];
        const isVoyelle = [];
        for (let i = 0; i < x.length; i++) {
            for (let j = 0; j < voyelle.length; j++) {
                if (x[i].toLowerCase() === voyelle[j]) {
                    isVoyelle.push(x[i]);
                }
            }
        }
        return isVoyelle.length;
    }
}
