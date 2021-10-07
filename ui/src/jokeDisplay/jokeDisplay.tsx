import "./jokeDisplay.css";
import "../index.css";

export default function JokeDisplay(props: JokeDisplayProps) {
  const { jokes } = props;

  return (
    <div className="modal">
      <div className="modal__content modal__container displayOuter">
        <h2>Joke List</h2>
        {
          jokes ? <></> : "No Jokes Here"
        }

      </div>
    </div>
  )
}

interface JokeDisplayProps {
  jokes?: {
    [index: string]: {
      isDeleted: boolean;
      content: string;
    }
  },
}
