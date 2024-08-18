import React from "react";
import CodeMirror from "@uiw/react-codemirror";
/*npm i @uiw/react-codemirror*/

/*React CodeMirror is a React code editor component that wraps the CodeMirror editor and integrates it into React apps. It offers a variety of features, including multiple language modes, themes, and custom styling options. It also has additional features like line numbers, autocompletion, code highlighting, and bracket closing.*/

const Editor = props => {
  const { EditorName, edit, OnchangeEvent, lang } = props;

  return (
    <>
      <div className="bg-[#282c34] p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 text-white">{EditorName}</h2>

        <CodeMirror
          className="text-xl border-gray-700 border"
          value={edit}
          height="342px" 
          theme="dark"
          extensions={[lang(true)]}
          onChange={OnchangeEvent}
        />

        {EditorName}
      </div>
    </>
  );
};

export default Editor;
