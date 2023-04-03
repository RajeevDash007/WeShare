
import './App.css';

function App() {
  return (
    <div className="App">
        <div class="noise-bg" aria-hidden="true">
          </div>
          <div class="shadow"></div>
          <svg>
            <filter id="noise-bg-fx">
              <feTurbulence baseFrequency="0.3" />
            </filter>
          </svg>
      <div class="card">
        WeShare
      </div>
    </div>
  );
}

export default App;
