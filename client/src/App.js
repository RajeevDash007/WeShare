import {useRef,useState} from 'react';
import './App.css';

function App() {
  const fileInputRef = useRef();
  const onUploadClick = () =>{
    fileInputRef.current.click();
  }

  const [file, setFile] = useState('');

  console.log(file);

  return (
    <div className="App">
        <div className="noise-bg" aria-hidden="true">
          </div>
          <div className="shadow"></div>
          <svg>
            <filter id="noise-bg-fx">
              <feTurbulence baseFrequency="0.3" />
            </filter>
          </svg>
      <div className="card">
        <div className="heading">
        WeShare
        </div>
        <div className="UploadWrapper">
            Share your file Online
        </div>
        <div className="uploadButton">
          <button onClick={()=> onUploadClick()}>Upload</button>
          <input type="file"
            ref={fileInputRef}
            style={{display: 'none'}}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
