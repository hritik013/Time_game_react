import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <Timer title="Easy😮‍💨" targetTime={1}/>
      <Timer title="Not Easy🤔" targetTime={5}/>
      <Timer title="Hard🤯" targetTime={10}/>
      <Timer title="Pros Needed😈" targetTime={15}/>
      </div>
      <footer className="footer">
        <p>Created by- <strong>Hritik</strong></p>
        <p>Email: <a href="mailto:rawathritik19@gmail.com">rawathritik19@gmail.com</a></p>
      </footer>
    </>
  );
}

export default App;
