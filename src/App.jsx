import { episodeList } from "./data";

function App() {

  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();


  function EpisodeDetails() {
    if(!selectedEpisode) {
      return (
        <>
        <section className="details">
        <h2>Episode</h2>
        <p>Select an episode to learn more.</p>
        </section>
        </>
      );
    }
  }

  return (
    <>
    <section className="details">
    <h2>Episode: {selectedEpisode.id}</h2>
    <h3>{selectedEpisode.title}</h3>
    <p>{selectedEpisode.description}</p>
    <button>Watch Now</button>
    </section>
    </>
  );
}

function EpisodeList() {
  return (
    <>
    <section className="episodes">
    <h2>Episodes</h2>
    <ol>
      {episode.map((episode) => (
    <li
    onClick={() => setSelectedEpisode(episode)}
    className={selectedEpisode?.id === episode.id ? "selected" : ""}
    key={episode.id}
      >
        {episode.title}
      </li>
      ))}
    </ol>
    </section>
    </>
  );
}



export default App;

