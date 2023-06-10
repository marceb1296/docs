import React from 'react';

export const DocsCode = ({children}:  {children: React.ReactNode}) => {
    return (
        <pre>
            <code>
                {children}
            </code>
        </pre>
    )
}
