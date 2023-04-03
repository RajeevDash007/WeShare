
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
        <div className="heading">
        WeShare
        </div>
        <div className="UploadWrapper">
            Share your file Online
        </div>
      </div>
      
    </div>
  );
}

export default App;
