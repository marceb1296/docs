import { Fragment } from "react";
import { IDocsContent } from "../interfaces";
import "../css/docsContent.scss";
import "../css/docsAlerts.scss";

export const DocsContent = ({id, title, data}: IDocsContent) => {

    return (
        <div id={id} className="docs-section">
            { data !== undefined 
                ? 
                    <>
                        <h3>
                        {title}
                        </h3>
                        { data.length !== 0 &&

                            data.map((el, index) => 
                                typeof el === "string" 
                                ? <p key={index}>{el}</p>
                                : <Fragment key={index}>{el}</Fragment>
                            )
                        }
                    </>
                :
                    <h2>{title}</h2>

            }
            
        </div>
   )
}
