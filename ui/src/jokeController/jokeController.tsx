import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import Modal from '../modal'
import "../index.css"
import "./jokeController.css"
import axios from 'axios';

const baseURL = 'http://backend.127-0-0-1.sslip.io';

export default function JokeController(props: { jokeUpdate: Dispatch<SetStateAction<string[]>> }) {
  const { jokeUpdate } = props;
  const [jokeInput, setJokeInput] = useState<JokeInput>({
    post: {
      content: "",
    },
    put: {
      uuid: "",
      content: "",
    },
    delete: {
      uuid: "",
    }
  });

  function setFormField(changeEvent: ChangeEvent<HTMLInputElement>) {
    const { target } = changeEvent;

    switch (target.name) {
      case 'addContent': {
        setJokeInput({
          ...jokeInput,
          post: {
            content:  target.value,
          }
        });
        break;
      }
      case 'putUuid': {
        setJokeInput({
          ...jokeInput,
          put: {
            ...jokeInput.put,
            uuid: target.value,
          }
        });
        break;
      }
      case 'putContent': {
        setJokeInput({
          ...jokeInput,
          put: {
            ...jokeInput.put,
            content: target.value,
          }
        });
        break;
      }
      case 'deleteUuid': {
        setJokeInput({
          ...jokeInput,
          delete: {
            uuid: target.value,
          }
        });
        break;
      }
      default: {
        console.error('impossible case');
      }
    }
  }

  async function getJokes(event: FormEvent) {
    event.preventDefault();

    const array: string[] = [];
    const jokesList: Jokes = (await axios.get(`${baseURL}/jokes`)).data;
    console.info(jokesList);
    Object.values(jokesList).forEach((joke: Joke) => {
      if (joke.content && !joke.isDeleted) {
        array.push(joke.content);
      }
    });

    jokeUpdate(array);
  }

  async function addJoke(event: FormEvent) {
    event.preventDefault();

    const res = await axios.post(`${baseURL}/jokes`, jokeInput.post);

    if (res.status === 200) {
      // todo: show success message
    } else {
      // todo: failure message
    }

    setJokeInput({
      ...jokeInput,
      post: {
        content: '',
      }
    });
  }

  async function editJoke(event: FormEvent) {
    event.preventDefault();

    const res = await axios.put(`${baseURL}/jokes`, jokeInput.put);

    if (res.status === 200) {
      // todo: show success message
    } else {
      // todo: failure message
    }

    setJokeInput({
      ...jokeInput,
      put: {
        uuid: '',
        content: '',
      }
    });
  }

  async function deleteJoke(event: FormEvent) {
    event.preventDefault();

    const res = await axios.delete(`${baseURL}/jokes`, { data: jokeInput.delete });

    if (res.status === 200) {
      // todo: show success message
    } else {
      // todo: failure message
    }

    setJokeInput({
      ...jokeInput,
      delete: {
        uuid: '',
      }
    });
  }

  return (
    <Modal showBackButton={true} >
      <>
        <h2>Joke API</h2>
        <form onSubmit={getJokes} >
          <ul className="form-list">
            <li className="form-list__row">
              <label>Get Jokes</label>
              <button type="submit" className="button">Get Jokes</button>
            </li>
          </ul>
        </form>
        <form onSubmit={addJoke}>
          <ul className="form-list">
            <li className="form-list__row">
              <label>Add Joke</label>
              <input
                type="text"
                name="addContent"
                placeholder="your joke here"
                value={jokeInput.post.content}
                onChange={setFormField}
              />
              <button className="button">Add Jokes</button>
            </li>
          </ul>
        </form>
        <form onSubmit={editJoke}>
          <ul className="form-list">
            <li className="form-list__row">
              <label>Edit Joke</label>
              <div className="edit-field">
                <input
                  type="text"
                  name="putUuid"
                  placeholder="uuid"
                  value={jokeInput.put.uuid}
                  onChange={setFormField}
                />
                <input
                  type="text"
                  name="putContent"
                  placeholder="joke"
                  value={jokeInput.put.content}
                  onChange={setFormField}
                />
              </div>
              <button className="button">Edit Jokes</button>
            </li>
          </ul>
        </form>
        <form onSubmit={deleteJoke}>
          <ul className="form-list">
            <li className="form-list__row">
              <label>Delete Jokes</label>
              <input
                type="text"
                name="deleteUuid"
                placeholder="uuid"
                value={jokeInput.delete.uuid}
                onChange={setFormField}
              />
              <button className="button">delete Jokes</button>
            </li>
          </ul>
        </form>
      </>
    </Modal >
  )
}

interface JokeInput {
  post: {
    content: string;
  },
  put: {
    uuid: string;
    content: string;
  },
  delete: {
    uuid: string;
  }
}

interface Joke {
  isDeleted: boolean;
  content: string;
}
interface Jokes {
  [index: string]: Joke
}
