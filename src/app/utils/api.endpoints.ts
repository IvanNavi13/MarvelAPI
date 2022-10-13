import { Constants } from './constants.class';

export class ApiEndpoints {

    static AllCHARACTERS: string = "/public/characters?" + "&ts=" + Constants.ts + "&apikey=" + Constants.publicKey + "&hash=" + Constants.hash;

    static getCharactersByFullName(full_name: string): string {
        return "/public/characters?name=" + full_name + "&ts=" + Constants.ts + "&apikey=" + Constants.publicKey + "&hash=" + Constants.hash;
    }

    static getCharactersByStartName(nameStart: string): string {
        return "/public/characters?nameStartsWith=" + nameStart + "&ts=" + Constants.ts + "&apikey=" + Constants.publicKey + "&hash=" + Constants.hash;
    }

    static AllCOMICS: string = "/public/comics?" + "&ts=" + Constants.ts + "&apikey=" + Constants.publicKey + "&hash=" + Constants.hash;

    static getComicsByFullTitle(nameTitle: string): string {
        return "/public/comics?title=" + nameTitle + "&ts=" + Constants.ts + "&apikey=" + Constants.publicKey + "&hash=" + Constants.hash;
    }

    static getComicsByFormatType(formatType: string): string {
        return "/public/comics?formatType=" + formatType + "&ts=" + Constants.ts + "&apikey=" + Constants.publicKey + "&hash=" + Constants.hash;
    }

}

