export interface TMDBAPI {
    backdrop_path: string;
    id: number;
    title: string;
    release_date: string;
    [key: string]: number | string | boolean | object | null;
}