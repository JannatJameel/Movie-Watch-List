import WatchedList from "./components/WatchedList";
import UnwatchedList from "./components/UnwatchedList";


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <WatchedList />
        </div>
        <div className="col">
          <UnwatchedList />
        </div>
      </div>
    </div>
  );
}

export default App;
