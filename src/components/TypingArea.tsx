// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

// const TextContainer = styled.div`
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// const Input = styled.input`
//   font-size: 24px;
//   width: 100%;
// `;

// const TypingArea = ({ text, onTextChange, onFinish }) => {
//   const [inputValue, setInputValue] = useState('');
//   const [startTime, setStartTime] = useState(null);
  
//   const targetText = "Пример текста для тренировки печати."; // Замените на свой текст.

//   useEffect(() => {
//     if (inputValue.length === 0) {
//       setStartTime(null);
//     } else if (!startTime) {
//       setStartTime(Date.now());
//     }

//     if (inputValue === targetText) {
//       const endTime = Date.now();
//       const timeTaken = (endTime - startTime) / 60000; // в минутах
//       const wordsTyped = inputValue.split(' ').length;
//       const wpm = Math.round(wordsTyped / timeTaken);
//       const errors = [...inputValue].filter((char, index) => char !== targetText[index]).length;
      
//       onFinish(wpm, errors);
//     }
//   }, [inputValue]);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     if (value.length <= targetText.length) {
//       setInputValue(value);
//       onTextChange(value);
//     }
//   };

//   return (
//     <>
//       <TextContainer>
//         {targetText.split('').map((char, index) => {
//           const inputChar = inputValue[index];
//           return (
//             <span key={index} style={{
//               color: inputChar === char ? 'green' : inputChar && inputChar !== char ? 'red' : 'black'
//             }}>
//               {char}
//             </span>
//           );
//         })}
//       </TextContainer>
//       <Input type="text" value={inputValue} onChange={handleChange} />
//     </>
//   );
// };

// export default TypingArea;
