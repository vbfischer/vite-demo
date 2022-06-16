import {range} from 'lodash';

export interface GenerateDataProps {
    title?: string;
    headersCount?: number;
    rowCount?: number;
}
export const generateData = (props: GenerateDataProps) => {
    const {title = "ContainerHeader", headersCount = 5, rowCount = 5} = props;

    const headers = range(headersCount).map(header => `Col ${header} Header`);

    const rows = range(rowCount).map(row => ({
        title: `Analyte ${row}`,
        cells: range(headersCount).map(cell => `Value ${cell}`)
    }))
    return {
        title,
        headers,
        rows
    }
}