import React from "react";
import { Container, TittleContainer, Controllers } from "./styles";

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <TittleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TittleContainer>

      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader;
