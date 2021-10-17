import "./jokeDisplay.css";
import "../index.css";

export default function JokeDisplay(props: JokeDisplayProps) {
  const { jokes } = props;

  return (
    <div className="modal">
      <div className="modal__content modal__container displayOuter">
        <h2>Joke List</h2>
        <ol>
          {jokes.map((joke: string, i: number) => { return (<li key={i}>{joke}</li>) })}
        </ol>
      </div>
    </div>
  )
}

interface JokeDisplayProps {
  jokes: string[],
}
