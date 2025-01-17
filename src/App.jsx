import { useState } from 'react';
import './App.css'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

function App() {
  const [markdown, setMarkdown] = useState("");

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <>
      <div className="titles">
        <div className="title editor-title">
          <p>Markdown</p>
        </div>
        <hr />
        <div className="title preview-title">
          <p>Preview</p>
        </div>
      </div>
      <div className="container">
        <textarea
          className="editor"
          value={markdown}
          onChange={handleChange}
        />
        <div className="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
      </div>
    </>
  )
}

export default App
