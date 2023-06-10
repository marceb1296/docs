import { IDocsTable, IDocsTableBody, IDocsTableType } from "../interfaces"

const DocsTableBody = ({text}: IDocsTableBody) => {
    return (
        <td>{text}</td>
    )
}

const DocsDefaultTypesTableBody = () => {
    return (
        <>
            <th>
                Name
            </th>
            <th>
                Type
            </th>
            <th>
                Required
            </th>
            <th>
                Description
            </th>
            <th>
                Default
            </th>
        </>
    )
}

const DocsDefaultStatusTableBody = () => {
    return (
        <>
            <th>
                Code
            </th>
            <th>
                Response
            </th>
        </>
    )
}

const DocsDefaultViewTableBody = () => {
    return (
        <>
            <th>Endpoint</th>
            <th>Method</th>
            <th>Headers</th>
            <th>Body</th>
            <th>Example</th>
            <th>Successful</th>
            <th>Failed</th>
        </>
    )
}

const DocsTable = ({defaultHeaders, header, body}: IDocsTableType) => {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        { header !== undefined 
                            ? header.map((el, index) => <th key={index}>{el}</th>)
                            : defaultHeaders
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        body.map((el, index) => 
                            <tr key={index}>
                                {
                                    el.map((elChild, indexChild) => <DocsTableBody key={indexChild} text={elChild}/>)
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export const DocsTableStatus = ({header, body}: IDocsTable) => {
    return (
        <DocsTable defaultHeaders={<DocsDefaultStatusTableBody />} header={header} body={body} />
    )
}

export const DocsTableTypes = ({header, body}: IDocsTable) => {
    return (
        <DocsTable defaultHeaders={<DocsDefaultTypesTableBody />} header={header} body={body} />
    )
}

export const DocsTableView = ({header, body}: IDocsTable) => {
    return (
        <DocsTable defaultHeaders={<DocsDefaultViewTableBody />} header={header} body={body} />
    )
}