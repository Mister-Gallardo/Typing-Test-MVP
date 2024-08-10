import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 6vw;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Title = styled.h1`
  fontsize: 36px;
  color: #d1d0c5;
  font-weight: 400px;
  font-family: "Josefin Sans", sans-serif;
`;

export const DefaultChar = styled.p`
  display: inline;
  color: #646669;
  font-size: 32px;
  font-family: "Roboto mono", sans-serif;
`;

export const CorrectChar = styled.p`
  display: inline;
  color: white;
  font-size: 32px;
  color: white;
  font-family: "Roboto mono", sans-serif;
`;

export const IncorrectChar = styled.p`
  display: inline;
  color: rgb(255, 0, 60);
  border-bottom: 3px solid rgb(255, 0, 60);
  font-size: 32px;
  font-family: "Roboto mono", sans-serif;
`;

export const WordsContent = styled.div`
  position: relative;
  margin: 170px auto;
`;