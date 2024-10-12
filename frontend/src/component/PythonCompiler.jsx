import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';

export default function PythonCompiler() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [open, setOpen] = useState(true);

  const handleCompile = async () => {
    try {
      const response = await fetch('https://python-compiler-api-endpoint', {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await response.json();
      setOutput(result.output);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className={`python-compiler ${open ? '' : 'collapsed'}`}>
      <div className="editor-title1">
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {open ? 'Hide Output' : 'Show Output'}
        </button>
        <button onClick={handleCompile} className="compile-btn">
        Run Code
      </button>
      </div>

      <div className="editor-output-container">
        <div className="editor">
          <CodeMirror
            value={code}
            extensions={[python()]}
            theme={oneDark}
            onChange={setCode}
            height="750px"
          />
        </div>

        {open && (
          <div className="output">
            <textarea
              value={output}
              readOnly
              placeholder="Output will be displayed here"
            />
          </div>
        )}
      </div>
    </div>
  );
}
