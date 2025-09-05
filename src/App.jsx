import { episodeList } from "./data";

function App() {
 
  const [episodes] = useState(null);
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














export default App;

