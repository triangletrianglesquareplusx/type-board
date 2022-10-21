import { ColumnContainer, ColumnTitle, CardContainer } from "./styles";

type ColumnProps = {
  text: string;
};
//types and interfaces can be used interchangeably

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>Generate components</CardContainer>
      <CardContainer>Learn TypeScript</CardContainer>
    </ColumnContainer>
  );
};
