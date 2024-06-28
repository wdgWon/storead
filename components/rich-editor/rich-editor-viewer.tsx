"use client";

import { Content, EditorContent, useEditor } from "@tiptap/react";
import StartKit from "@tiptap/starter-kit";

interface Props {
  content?: Content;
}

const RichEditorViewer = ({ content, ...props }: Props) => {
  const editor = useEditor({
    extensions: [StartKit],
    content,
    editable: false,
  });

  return (
    <EditorContent
      editor={editor}
      {...props}
    />
  );
};

export default RichEditorViewer;
