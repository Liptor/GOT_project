export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api/';
    }

    getResourse = async (url) => { // !!!!
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResourse('characters?page=5&pageSize=10');
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character); // !!!
    }
    getAllHouses = async () => {
        return this.getResourse(`/houses/`);
    }
    getHouse = async (id) => {
        return this.getResourse(`/houses/${id}`);
    }
    getAllBooks = async () => {
        return this.getResourse(`/books/`);
    }
    getBook = async (id) => {
        return this.getResourse(`/books/${id}`);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overload: house.overload,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}