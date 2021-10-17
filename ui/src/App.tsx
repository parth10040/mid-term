import JokeController from './jokeController';
import Modal from './modal';
import "./index.css"
import { useState } from 'react';
import JokeDisplay from './jokeDisplay';

function App() {
  const [welcome, setWelcome] = useState(false);
  const [jokeBank, setJokeBank] = useState(Array<string>());

  function start() {
    setWelcome(!welcome)
  }

  return (
    <div className="App">
      {
        welcome ?
          <div className="jokeControl">
              <JokeController jokeUpdate={setJokeBank} />
              <JokeDisplay jokes={jokeBank} />
          </div>
          :
          <Modal showBackButton={false} >
            <div className="modal__welcome">
              <h1 className="child">Welcome!</h1>
              <button className="button child" onClick={start}>
                Start!
              </button>
            </div>
          </Modal>
      }
    </div>
  );
}

export default App;
