import dynamic from "next/dynamic";
import React from "react";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const RichText = ({ content, setContent }) => {
  return (
    <div>
      <JoditEditor
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => setContent(newContent)}
      />
    </div>
  );
};

export default RichText;
