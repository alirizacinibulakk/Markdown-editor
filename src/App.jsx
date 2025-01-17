import { useState } from 'react';
import './App.css'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { Squash as Hamburger } from 'hamburger-react'

function App() {
  const [markdown, setMarkdown] = useState("");
  const [isOpen, setOpen] = useState(false);

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <>
      <div className="hamburger-wrapper">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#FFF" />
      </div>
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <h2 className="document-title">MY DOCUMENTS</h2>
        <button className="new-document-btn">+ New Document</button>
        <div className="menu-content">
          <ul>
            <li>
              <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z" fill="#C1C4CB"/>
              </svg>
              untitled-document.md
            </li>
            <li>
              <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z" fill="#C1C4CB"/>
              </svg>
              welcome.md
            </li>
          </ul>
        </div>
      </div>
      <header>
        <h1>Markdown Previewer</h1>
      </header>
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
