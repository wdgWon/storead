"use client";

import { RefObject } from "react";

import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor, EditorProps } from "@toast-ui/react-editor";
import { useTheme } from "next-themes";

interface Props extends EditorProps {
  editorRef: RefObject<Editor> | null;
  imageHandler?: (blob: File, callback: typeof Function) => void;
  content?: string;
}

function RichEditor({ content, editorRef, imageHandler, ...props }: Props) {
  const { theme } = useTheme();

  return (
    <div
      className={`editor-panel-editor${theme == "dark" ? " toastui-editor-dark" : ""}`}
    >
      <Editor
        {...props}
        ref={editorRef}
        initailValue={content ?? ""}
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        hooks={imageHandler ? { addImageBlobHook: imageHandler } : {}}
      />
    </div>
  );
}

export default RichEditor;
