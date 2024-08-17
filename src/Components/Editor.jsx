import React from "react";
import CodeMirror from "@uiw/react-codemirror";


const Editor = props => {
    const { EditorName, edit, OnchangeEvent, lang } = props;
    
  return (
    <>
      <div className="bg-[#282c34] p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2 text-white">
                  {EditorName}
          <CodeMirror
            className="text-xl border-gray-700 border"
            value={edit}
            height="342px"
            theme="dark"
            extensions={[lang(true)]}
            onChange={OnchangeEvent}
          />
        </h2>
        {EditorName}
      </div>
    </>
  );
};

export default Editor;
