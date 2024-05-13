"use client";
import React, { useEffect, useState } from "react";
import RichText from "../../blogs/add-blog/RichText";

const TextEditor = ({ setvalue, index, setIsEdit, getValues }: TextEditor) => {
  const [content, setContent] = useState(
    getValues(`page.${index}.description`)
  );
  useEffect(() => {
    setvalue(`page.${index}.description`, content);
    setIsEdit(true);
  }, [content]);

  return (
    <div>
      <RichText content={content} setContent={setContent} />
    </div>
  );
};

export default TextEditor;
