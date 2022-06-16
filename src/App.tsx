import React from "react";
import {
  AnalyteHeader,
  AnalyteValue,
  ColumnHeader,
  Container,
  ContainerHeader,
  View,
} from "./styles";
import { generateData } from "./utils";

function App() {
  const data = generateData({headersCount: 10, rowCount: 200});

  const [expandedColumn, setExpandedColumn] = React.useState<number | undefined>(0);

  const handleHeaderClick = (ndx: number) => {
    setExpandedColumn(prev => ndx === prev ? undefined : ndx);
  };

  console.log(`Exapanded Column is ${expandedColumn}`);
  return (
    <View>
      <Container columnCount={data.headers.length}>
        <ContainerHeader>{data.title}</ContainerHeader>

        {data.headers.map((header, ndx) => (
          <ColumnHeader expanded={expandedColumn === ndx} id={`${header}-${ndx}`} onClick={() => handleHeaderClick(ndx)}>
            {header}
          </ColumnHeader>
        ))}

        {data.rows.map((row, ndx) => (
          <>
            <AnalyteHeader key={`AH-${row.title}-${ndx}`}>{row.title}</AnalyteHeader>

            {row.cells.map((cell, cellNdx) => (
              <AnalyteValue key={`AV-$[row.title]-${cell}-${ndx}`}>{cell}</AnalyteValue>
            ))}
          </>
        ))}
      </Container>
    </View>
  );
}

export default App;
