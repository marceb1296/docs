type TBody = (string | React.ReactNode);
export interface IDocsTableBody {
    text: TBody;
}
export interface IDocsTable {
    header?: string[];
    body: TBody[][];
}
export interface IDocsTableType extends IDocsTable {
    defaultHeaders: React.ReactNode;
}
export {};
