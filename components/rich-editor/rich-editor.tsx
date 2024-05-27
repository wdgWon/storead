"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StartKit from "@tiptap/starter-kit";

interface Props {
  content?: string;
}

function RichEditor({ content = "", ...props }: Props) {
  const editor = useEditor({
    extensions: [StartKit],
    content,
  });
  return (
    <EditorContent
      editor={editor}
      {...props}
    />
  );
}

export default RichEditor;
