import { useContext } from "react";
import { DocsContent } from "./";
import { DocsContext } from "../context";
import "../css/docsContainer.scss"


export const DocsContainer = () => {

    const Docs = useContext(DocsContext);

    return (
        <div className="docs-container">
            {   Docs.content !== undefined &&
                Object.values(Docs.content).map(({id, title, data}, index: number)  => <DocsContent key={index} id={id} title={title} data={data} />)
            }
        </div>
   )
}

//export DocsContainer;