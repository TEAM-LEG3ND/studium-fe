import useTextEditor from "./hooks/useTextEditor";

function TextEditor() {
  const { convertedText, onChangeContents } = useTextEditor();
  return (
    <>
      <div>
        <textarea onChange={onChangeContents} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: convertedText }} />
    </>
  );
}

export default TextEditor;
