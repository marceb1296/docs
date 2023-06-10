import { IDocsAlerts } from "../interfaces"

const DocsAlert = ({ label, classType, children }: IDocsAlerts) => {
    return (
        <div className={`alert-container ${classType}`}>
            <div className="alert-header">
                <div className="icon-container">
                    <span className="icon">!</span>
                </div>
                <label>
                    {label}
                </label>
            </div>
            <div className="alert-body">
                {
                    children
                }
            </div>
        </div>
    )
}

export const DocsAlertInfo = ({ children }: {children: React.ReactNode}) => {
    return(
        <DocsAlert label='Note' classType="info">
            {
                children
            }
        </DocsAlert>
    )
}

export const DocsAlertDanger = ({ children }: {children: React.ReactNode}) => {
    return(
        <DocsAlert label='Danger' classType="danger">
            {
                children
            }
        </DocsAlert>
    )
}

export const DocsAlertWarning = ({ children }: {children: React.ReactNode}) => {
    return(
        <DocsAlert label='Warning' classType="warn">
            {
                children
            }
        </DocsAlert>
    )
}