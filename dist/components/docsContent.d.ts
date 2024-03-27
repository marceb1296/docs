import { IDocsContent } from "../interfaces";
export declare const DocsContent: ({ id, title, data, childClass, dataChilds, subTitle, }: IDocsContent & {
    dataChilds: IDocsContent[];
    subTitle?: boolean | undefined;
    childClass?: string | undefined;
}) => JSX.Element;
