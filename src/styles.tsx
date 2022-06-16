import styled, { css } from "styled-components";

const commonStyles = css`
  padding: 1em;
`;

export const View = styled.div`
  padding: 5em;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export interface ContainerProps {
    columnCount: number;
}

export const Container = styled.div<ContainerProps>`
  ${commonStyles};

  max-width: 1024px;

  border: 1px solid black;

  display: grid;
  grid-template-columns: repeat(${props => props.columnCount + 1}, auto);

  overflow: auto;
  gap: 16px;
`;

export const ContainerHeader = styled.div`
  background-color: grey;
  color: white;
  ${commonStyles};
  width: 194px;
  font-weight: bold;
`;

export const ColumnHeader = styled.div<{ expanded?: boolean }>`
  width: ${(props) => (props.expanded ? "554px" : "128px")};
  ${commonStyles};

  background-color: lightgrey;
  color: black;

  font-weight: bold;

  transition: width 500ms;
`;

export const AnalyteHeader = styled.div`
  ${commonStyles};

  background-color: darkgrey;
`;

export const AnalyteValue = styled.div`
  ${commonStyles};
  background-color: lightslategray;
`;
