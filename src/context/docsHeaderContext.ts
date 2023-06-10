import { createContext } from "react";
import { IDocsHeaderContext } from "../interfaces";

export const DocsHeaderContext = createContext<IDocsHeaderContext>({} as IDocsHeaderContext);
