// window.innerWidth * 0.88  - это ширина контента под слова
// 0.88 * 4 = 3.5 - это ширина контента под слова
// 19.5 - средняя ширин символа
const symbolInFourSentences = Math.floor((window.innerWidth * 3.5) / 19.5);

export default symbolInFourSentences;