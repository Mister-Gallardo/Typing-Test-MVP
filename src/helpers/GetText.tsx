import { CorrectChar, DefaultChar, IncorrectChar } from "../styles/StylesInJs";
import symbolInFourSentences from "./GetSymbolsCount";

const GetText = (
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  textToType: string,
  visibleCharsCount: number,
) => {
  if (inputValue.length > symbolInFourSentences * (3 / 4)) {
    visibleCharsCount =
      visibleCharsCount + Math.floor(symbolInFourSentences / 2);
    setInputValue((prev: string) =>
      prev.slice(Math.floor(symbolInFourSentences / 2))
    );
  }
  return [...textToType]
    .slice(visibleCharsCount - symbolInFourSentences, visibleCharsCount)
    .map((char, charIndex) => {
      if (inputValue[charIndex] === char) {
        return <CorrectChar key={charIndex}>{char}</CorrectChar>;
      } else if (inputValue[charIndex]) {
        return <IncorrectChar key={charIndex}>{char}</IncorrectChar>;
      } else {
        return (
          <DefaultChar
            className={charIndex === inputValue.length ? "blinking-border" : ""}
            key={charIndex}
          >
            {char}
          </DefaultChar>
        );
      }
    });
};

export default GetText;
