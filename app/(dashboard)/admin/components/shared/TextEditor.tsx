"use client";
import React, { useEffect, useState } from "react";
import RichText from "../../blogs/add-blog/RichText";

const TextEditor = ({ setvalue, index }: TextEditor) => {
  const [content, setContent] = useState("");
  useEffect(() => {
    setvalue(`page.${index}.description`, content);
  }, [content]);

  return (
    <div>
      <RichText content={content} setContent={setContent} />
    </div>
  );
};

export default TextEditor;
