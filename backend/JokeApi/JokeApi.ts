import v4 from '../uuid';

export default class JokeApi {
  #jokes: {
    [index: string]: {
      isDeleted: boolean;
      content: string;
    }
  } = {};

  constructor() {
    this.#jokes = {
      ...createJoke(`I invented a new word. Plagiarism!`),
    }
  }

  getJokes() {
    return this.#jokes;
  }

  getJoke(uuid: string) {
    const found = this.#jokes[uuid];

    if (!found) {
      throw new Error("Joke Not Found");
    }

    return found;
  }

  postJoke(content: string) {
    this.#jokes = {
      ...this.#jokes,
      ...createJoke(content),
    }
  }

  updateJoke(uuid: string, joke: string) {
    const found = this.#jokes[uuid];

    if (!found) {
      return "Joke Not Found";
    }

    found.content = joke;

    return `${uuid} has successfully been updated`;
  }

  deleteJoke(uuid: string) {
    const joke = this.#jokes[uuid];

    if (!joke) {
      return "Joke Not Found";
    }

    joke.isDeleted = true;

    return uuid;
  }
}

function createJoke(content: string) {
  return {
    [v4()]: {
      isDeleted: false,
      content,
    }
  }
}
