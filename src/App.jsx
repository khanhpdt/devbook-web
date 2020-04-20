import React from 'react';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fileName: null
    }
  }

  onUpload(){ 
    console.log('upload');
  }

  onChangeFile(event) {
    console.log(event);
  }

  render() {
    const fileName = this.state.fileName ? (<span class="file-name">{this.state.fileName}</span>) : null;
    return (
      <div>
        <div className="file is-centered has-name">
          <label className="file-label">
            <input className="file-input" type="file" onChange={(event) => this.onChangeFile(event)}/>
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">Browse...</span>
            </span>
            {fileName}
          </label>
          <button className="button is-info" onClick={() => this.onUpload()}>Upload</button>
        </div>
      </div>
    );
  }

}


export default App;
