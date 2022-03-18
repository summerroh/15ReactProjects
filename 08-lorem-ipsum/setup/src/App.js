import React, { useEffect, useState } from 'react';
import data from './data';
function App() {
  const [textData, setTextData] = useState(data);
  const [textValue, setTextValue] = useState("");
  const [numParagraph, setNumParagraph] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (textValue > 8) {
      setNumParagraph(8);
    } 
    else if (textValue < 0) {
      setNumParagraph(1);
    } 
    else {
      setNumParagraph(textValue)
    }
  };

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  useEffect(() => {
    renderItem()
  },[numParagraph])

  const renderItem = () => {
    for (let i=0; i<numParagraph; i++) {
      return (
        <p>{textData[i]}</p>
      )
    }
  }
  return (
    <main>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>

      <form onSubmit={handleSubmit}>
        <label>Paragraphs:
          <input 
            type='number'
            value={textValue}
            onChange={(event)=>handleChange(event)}>
          </input>
          <button type='submit'>GENERATE</button>
        </label>
      </form>

      {textData.map((paragraph, index)=>{
        if ( index < numParagraph ) {
          return (
            <p key={index}>{paragraph}</p>
          )
        }
      })}

    </main>
    );
};

export default App;
