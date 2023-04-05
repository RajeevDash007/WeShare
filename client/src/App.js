import {useRef,useState,useEffect} from 'react';
import './App.css';

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState('');
  const onUploadClick = () =>{
    fileInputRef.current.click();
  }
  useEffect(()=>{
    const getImage = () =>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        uploadFile();
      }
    }
    getImage();
  },[file])
  

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
