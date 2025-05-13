import styled, { keyframes } from "styled-components";

const animate = keyframes`

0% {
  transform: translateX(-100px);
  opacity: 0;
}

50% {
  opacity:.3;
}

100% {
  transform: translateX(0px);
  opacity: 1;
}`;

interface ItagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};
  list-style: none;
  border-radius: 10px;
  margin: 10px 0;
  padding: 12px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  animation: ${animate} 0.5s ease;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }

  > div span {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const Tag = styled.div<ItagProps>`
  width: 13px;
  height: 60%;
  background-color: ${(props) => props.color};
  position: absolute;
  left: 0;
`;
