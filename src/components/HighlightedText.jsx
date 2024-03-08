import { Fragment } from "react";

import "../styles/HighlightedText.css";

function render(words, keywords) {
  // const keywords2check = ArrayStrings2LowerCase(keywords);
  let id_key = 0;
  const result = words.split(" ").map((word) => {
    if (keywords.includes(word.toLowerCase())) {
      return <span key={id_key++}>{word} </span>;
    } else {
      return <Fragment key={id_key++}>{word} </Fragment>;
    }
  });
  return result;
}

// In case you want to add more html types, follow the rules, adding a new case
function render_highlighted_keywords(hmtlType, content) {
  switch (hmtlType) {
    case "h1":
      return (
        <h1 className="h1-keywords-highligth">
          {render(content.text, content.keywords)}
        </h1>
      );

    case "p":
      return (
        <p className="paragraph-keywords-highligth">
          {render(content.text, content.keywords)}
        </p>
      );

    default:
      return (
        <h1 className="undefined-highlited-element">
          Error Rendering this Element
        </h1>
      );
  }
}

function HighlightedText({ hmtlType, content }) {
  return <>{render_highlighted_keywords(hmtlType, content)}</>;
}

export { HighlightedText };
