import React, { useState, useCallback } from "react";
import Navbar from "./Components/Navbar";
import Editor from "./Components/Editor";
import Result from "./Components/Result";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

const App = () => {
  //* create three usestate
  const [html_edit, setHtml_Edit] = useState("");
  const [css_edit, setCss_Edit] = useState("");
  const [js_edit, setJs_Edit] = useState("");

  //* Html onchange handler
  const onChangeHtml = useCallback(value => {
    setHtml_Edit(value);
  }, []);

  //* Css onchange handler
  const onChangeCss = useCallback(value => {
    setCss_Edit(value);
  }, []);

  //* JavaScript onchange handler
  const onChangeJavaScript = useCallback(value => {
    setJs_Edit(value);
  }, []);
  //* Create Html Document
  const srcCode = `
  <html>
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
<html /> `;
  return (
    <>
      {/* Navbar  */}
      <Navbar />

      {/* main content  */}
      <div className=" p-2">
        {/* Editor  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Html Editor */}
          <Editor
            EditorName={"HTML"}
            edit={html_edit}
            OnchangeEvent={onChangeHtml}
            lang={html}
          />
          {/* Css Editor  */}
          <Editor
            EditorName={"CSS"}
            edit={css_edit}
            OnchangeEvent={onChangeCss}
            lang={css}
          />
          {/* JavaScript Editor  */}
          <Editor
            EditorName={"JAVA SCRIPT"}
            edit={js_edit}
            OnchangeEvent={onChangeJavaScript}
            lang={javascript}
          />
        </div>
      </div>
      {/* Result  */}
      <Result srcCode={srcCode} />
    </>
  );
};

export default App;
