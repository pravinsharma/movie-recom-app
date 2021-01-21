import { IGenre } from "./genre.model";

export interface IMovie {
    id: number;
    name: string;
    genre: IGenre;
    year: number;
    summary: string;
}