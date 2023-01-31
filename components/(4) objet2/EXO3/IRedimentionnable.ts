export interface IRedimentionnable {
    nom: string;
    redimentionner(facteur: number): void;
    calculAir(): void;
    afficheNomEtAttribut(): void;
}
