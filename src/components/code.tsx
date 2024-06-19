import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  language: string;
  code: string;
  editable?: boolean;
};

export default function Code({ language, code, editable }: Props) {
  return (
    <SyntaxHighlighter
      startingLineNumber={1}
      showLineNumbers
      wrapLongLines
      wrapLines
      language={language}
      style={materialOceanic}
    >
      {code}
    </SyntaxHighlighter>
  );
}
