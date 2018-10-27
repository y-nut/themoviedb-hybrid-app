import { videoResultInterface } from './interfaces';

export class VideoJSONClass {
    constructor(
        public results: Array<any>,
        public page: number,
        public total_pages: number,
        public total_results: number
    ){}
}

export class VideoResultClass {

    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: any
    poster_path: string
    release_date: Date
    title: string
    video: boolean
    vote_average: any
    vote_count: number

    constructor(res: videoResultInterface){
        const t = this;
        const href_base_img = 'https://image.tmdb.org/t/p/w500'
        t.adult = res.adult;
        t.backdrop_path = href_base_img + res.backdrop_path;
        t.genre_ids = res.genre_ids;
        t.id= res.id;
        t.original_language = res.original_language;
        t.original_title = res.original_title;
        t.overview = res.overview;
        t.popularity = res.popularity;
        t.poster_path = href_base_img + res.poster_path;
        t.release_date = new Date(res.release_date),
        t.title = res.title;
        t.video = res.video;
        t.vote_average = res.vote_average;
        t.vote_count = res.vote_count

    }
}

