import { forwardRef } from "react";

import RichEditor, {
  RichEditorRef,
} from "@/components/rich-editor/rich-editor";

interface Props {
  content?: string;
}

const ReviewEditor = forwardRef<RichEditorRef, Props>(function ReviewEditor(
  { content },
  ref,
) {
  return (
    <div className="flex flex-col gap-2 min-h-24">
      <h3 className="font-semibold">본문 작성</h3>
      <RichEditor
        ref={ref}
        content={content}
      />
    </div>
  );
});

export default ReviewEditor;
