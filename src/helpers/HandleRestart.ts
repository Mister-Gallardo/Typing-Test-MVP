import symbolInFourSentences from "./GetSymbolsCount";

export default function HandleRestart(
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>,
  setTextToType: React.Dispatch<React.SetStateAction<string>>,
  setTimer: React.Dispatch<React.SetStateAction<number>>,
  setIsTimerRunning: React.Dispatch<React.SetStateAction<boolean>>,
  debouncedFunc: (newVal: string) => void,
  ArrayOfSentences: string[],
  visibleCharsCount: number
) {
  setIsFocused(true);
  setTextToType(ArrayOfSentences[Math.floor(Math.random() * 10)]);
  setTimer(30);
  setIsTimerRunning(false);
  visibleCharsCount = symbolInFourSentences;
  debouncedFunc("");
}
