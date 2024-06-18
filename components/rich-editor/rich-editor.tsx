"use client";

import { forwardRef, useImperativeHandle } from "react";

import {
  EditorContent,
  JSONContent,
  TextSerializer,
  useEditor,
} from "@tiptap/react";
import StartKit from "@tiptap/starter-kit";

interface Props {
  content?: string;
}

export interface RichEditorRef {
  getJSON: () => JSONContent | undefined;
  getText: (
    options?:
      | {
          blockSeparator?: string | undefined;
          textSerializers?: Record<string, TextSerializer> | undefined;
        }
      | undefined,
  ) => string | undefined;
}

const RichEditor = forwardRef<RichEditorRef, Props>(function RichRditor(
  { content = "", ...props },
  ref,
) {
  const editor = useEditor({
    extensions: [StartKit],
    content,
  });

  useImperativeHandle(ref, () => ({
    getJSON: () => editor?.getJSON(),
    getText: () => editor?.getText(),
  }));

  return (
    <EditorContent
      editor={editor}
      {...props}
    />
  );
});

// RichEditor.displayname = "RichEditor";

export default RichEditor;
