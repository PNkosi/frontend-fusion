import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
    language: string;
    code: string
}


export default function Code({language, code}: Props) {

  return (
    <SyntaxHighlighter language={language} style={materialOceanic}>
      {code}
    </SyntaxHighlighter>
  );
}
