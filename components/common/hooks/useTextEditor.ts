import { ChangeEvent, useState } from "react";
import { marked } from "marked";

const useTextEditor = () => {
  const [convertedText, setConvertedText] = useState<string>("");
  const onChangeContents = (event: ChangeEvent) => {
    const contents = (event.target as HTMLTextAreaElement).value;
    setConvertedText(marked(contents).toString());
  };

  const state = { convertedText };
  const handler = { onChangeContents };

  return { ...state, ...handler };
};

export default useTextEditor;
