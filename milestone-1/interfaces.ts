export interface Film {
    id: number;
    titel: string;
    beschrijving: string,
    jaar: number,
    duur: number,
    beschikbaar: boolean,
    releasedatum: string,
    image: string,
    genre: string,
    talen: string[],
    regisseur: {
        id: number,
        naam: string
    }
};


export interface Regisseur {
    id: number;
    naam: string;
    beschrijving: string,
    leeftijd: number,
    actief: boolean,
    geboortedatum: string,
    image: string,
    nationaliteit: string,
    films: string[],

};