import { createContext } from "react";
import { IDocsContext } from "../interfaces";

export const DocsContext = createContext<IDocsContext>({} as IDocsContext)
