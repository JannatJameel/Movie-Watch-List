import MovieList from "./components/MovieList";

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <MovieList />
        </div>
        <div class="col">
          <MovieList />
        </div>
      </div>
    </div>
  );
}

export default App;
