import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { oneDark } from '@codemirror/theme-one-dark';

export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange,
  } = props;

  const handleChange = (value) => {
    onChange(value);
  };

  const getLanguageExtension = () => {
    switch (language) {
      case 'javascript':
        return javascript();
      case 'css':
        return css();
      case 'xml': // For HTML, Codemirror 6 uses @codemirror/lang-html
        return html();
      default:
        return javascript();
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
      </div>
      <CodeMirror
        value={value}
        height="400px"
        theme={oneDark} // Updated to oneDark theme
        extensions={[getLanguageExtension()]}
        onChange={handleChange}
        className="code-mirror-wrapper"
        options={{
          lineNumbers: true,
          lineWrapping: true,
        }}
      />
    </div>
  );
}
