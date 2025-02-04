import { useState } from 'react';
import './App.css'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { Squash as Hamburger } from 'hamburger-react'
import markdownLogo from "../public/images/markdown-logo.svg"
import bin from "../public/images/bin.png"
import eyeOff from "../public/images/eye-off.svg"
import eyeOn from "../public/images/eye-on.svg"
import file from "../public/images/file.svg"
import save from "../public/images/save.png"

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />

      <Header isOpen={isOpen} />


      <EditorTitle isOpen={isOpen} />
    </>
  )
}


export default App

function Header({ isOpen }) {
  return (
    <>
      <header className={`header ${isOpen ? 'shifted' : ''}`}>
        <div className="header-left">
          <div className="header-title"><img src={markdownLogo} alt="" /></div>
          <hr />
          <div className="document-info">
            <img src={file} alt="" />
            <label htmlFor="">
              <span>Document Name</span>
              <input type="text" name='title'/>
            </label>
          </div>
        </div>
        <div className="header-btns">
          <button><img src={bin} alt="" /></button>
          <button><img src={save} alt="" /> Save Changes</button>
        </div>
      </header>
    </>
  )
}

function HamburgerMenu({ isOpen, setOpen }) {
  const [documents, setDocuments] = useState([
    {
      id: crypto.randomUUID(),
      title: "",
    }
  ]);

  const today = new Date();
  const day = today.getDate();
  const monthIndex = today.getMonth();
  const year = today.getFullYear();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = months[monthIndex];
  const formattedDate = `${day} ${monthName} ${year}`;



  function handleNewDocumentClick() {
    setDocuments([
      ...documents,
      {
        id: crypto.randomUUID(),
        title: `New Document-${documents.length}.md`,
        img: file,
        date: formattedDate,
      }
    ])
  }

  function handleItemClick(){

  }

  return (
    <>
      <div className={`hamburger-wrapper ${isOpen ? 'shifted' : ''}`}>
        <Hamburger className="hamburger" toggled={isOpen} toggle={setOpen} color="#FFF" size={30} />
      </div>
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <h2 className="document-title">MY DOCUMENTS</h2>
        <button className="new-document-btn" onClick={handleNewDocumentClick}>+ New Document</button>
        <div className="menu-content">
          {documents.map(x => (
            <>
              <button className='btn-item' onClick={handleItemClick}>
                <div className="item">
                  <img src={x.img} alt="" />
                  <div className='item-title'>
                    <p>{x.date}</p>
                    <p>{x.title}</p>
                  </div>
                </div>
              </button>
              </>
          ))}

        </div>
      </div>
    </>
  )
}

function EditorTitle({ isOpen }) {
  const [markdown, setMarkdown] = useState("");
  const [isPreviewOnly, setPreviewOnly] = useState(false);

  function handleChange(e) {
    setMarkdown(e.target.value);
  }
  function previewClickHandle() {
    setPreviewOnly(!isPreviewOnly);
    console.log(!isPreviewOnly)
  }
  return (
    <>
      {isPreviewOnly ? (

        <div className={`container ${isOpen ? 'shifted' : ''}`}>
          <div className="titles">
            <div className="title preview-title preview-on">
              <p>Preview</p>
              <button onClick={previewClickHandle} className='preview-eye'>
                <img src={eyeOff} alt="" />
              </button>
            </div>
          </div>
          <div className="text-container preview-center">
            <div className="preview preview-on preview-center" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
          </div>
        </div>

      ) : (
        <>
          <div className={`container ${isOpen ? 'shifted' : ''}`}>
            <div className="titles">
              <div className="title editor-title">
                <p>Markdown</p>
              </div>
              <hr />
              <div className="title preview-title">
                <p>Preview</p>
                <button onClick={previewClickHandle} className='preview-eye'>
                  <img src={eyeOn} alt="" />
                </button>
              </div>
            </div>
            <div className="text-container">
              <textarea
                className="editor"
                value={markdown}
                onChange={handleChange}
              />
              <div className="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
            </div>
          </div>
        </>


      )}

    </>
  )
}