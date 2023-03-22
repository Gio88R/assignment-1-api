export interface IBook {
    id: number;
    ISBN: string;
    title: string;
}

export const books: IBook[] = [
    { id: 1, ISBN: "221324", title: "Harry Potter" },
    { id: 2, ISBN: "SDSS45213", title: "Sagan om ringen" },
    { id: 3, ISBN: "SDAVA5654", title: "Män som hatar kvinnor" },
]