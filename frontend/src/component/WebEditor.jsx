import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from './hooks/useLocalStorage';

function WebEditor() {
    const defaultHtml = `
    <div class="container">
      <h1>Welcome to <br/><span>CodeCracker</span></h1>
      <p>CodeCracker is a versatile code editor built to enhance 
      your coding experience with its intuitive interface and 
      powerful features.</p>
    </div>
  `;

  // Default CSS content
  const defaultCss = `
    body {
      font-family: cursive;
      text-align: center;
      color: aliceblue;
      background: rgb(2, 2, 35);
    }
    
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    
    .container h1 {
      font-size: 2rem;
      margin: 0;
    }
    
    .container h1 span {
      font-size: 6rem;
      color: transparent;
      background: linear-gradient(90deg, rgba(217, 171, 255, 1) 0%, rgba(237, 63, 255, 1) 40%, rgba(149, 0, 255, 1) 68%, rgba(78, 39, 255, 1) 100%);
      background-clip: text;
    }
    
    .container p {
      font-size: 1.2rem;
      max-width: 40rem;
      line-height: 1.5;
    }
    
    @media(max-width:768px) {
      .container h1 {
        font-size: 1rem;
      }
    
      .container h1 span {
        font-size: 3rem;
      }
    
      .container p {
        font-size: 1rem;
        max-width: 75vw;
      }
    }
  `;

  // Use local storage to save HTML, CSS, and JS content
  const [html, setHtml] = useLocalStorage('html', defaultHtml);
  const [css, setCss] = useLocalStorage('css', defaultCss);
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');
  const [activeEditor, setActiveEditor] = useState('html');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const renderEditor = () => {
    switch (activeEditor) {
      case 'html':
        return <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />;
      case 'css':
        return <Editor language="css" displayName="CSS" value={css} onChange={setCss} />;
      case 'javascript':
        return <Editor language="javascript" displayName="JS" value={js} onChange={setJs} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="200px"
          style={{ marginBottom: '10px' }} // Add space between output and editors
        />
        <div className="editor-buttons">
          <button onClick={() => setActiveEditor('html')}>HTML</button>
          <button onClick={() => setActiveEditor('css')}>CSS</button>
          <button onClick={() => setActiveEditor('javascript')}>JavaScript</button>
        </div>
        <div className="editor-container">
          {renderEditor()}
        </div>
      </div>
    </>
  );
}

export default WebEditor;
