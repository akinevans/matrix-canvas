import "./App.css";
import Grid from "./components/Grid/Grid";

function App() {
  return (
    <div className='app-container'>
      <h1>Matrix Canvas</h1>
      <div className='grids-container'>
        <Grid numberOfCells={80} />
        <Grid numberOfCells={80} />
        <Grid numberOfCells={80} />
        <Grid numberOfCells={80} />
      </div>
    </div>
  );
}

export default App;
