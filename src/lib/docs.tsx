import { DocsContainer, DocsHeader } from '../components';
import React, { useRef } from "react";
import { useComputed, useSignal } from "@preact/signals-react";
import { IDocsMain } from '../interfaces';
import { DocsContext } from '../context';
import "../css/docs.scss";


export const Docs = ({ content, navSide, title }: IDocsMain) => {

    const pos = useRef<number>(0);
    const position = useSignal("0");

    const updateNavSide = useComputed(() => {
        let newNavSide = {}
        let exclude: string[] = navSide["exclude"]?.exclude ?? []


        Object.keys(content).forEach((key) => {

            if (exclude.includes(key)) return

            let {title, id: to} = content[key];

            if (navSide.hasOwnProperty(key) && navSide[key].hasOwnProperty("childs")) {

                let { childs } = navSide[key]

                newNavSide = {
                    ...newNavSide,
                    [key]: {
                        title,
                        to,
                        childs
                    }
                }
            } else {
                newNavSide = {
                    ...newNavSide,
                    [key]: {
                        title,
                        to
                    }
                }
            }
        })

        return newNavSide
    })

    
    const scrollHandle = (event: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop } = event.currentTarget;
        if (scrollTop > pos.current) {
            position.value = "-70px"
        } else {
            position.value = "0"
        }
        pos.current = scrollTop
    }

    return (
        <DocsContext.Provider value={{title, content, navTop: position.value, navSide: updateNavSide.value}}>
            <div style={{height: "100vh", overflowY: "auto", width: "100%"}} onScroll={scrollHandle}>
                <DocsHeader />
                <DocsContainer />
                <p></p>
            </div>
        </DocsContext.Provider>
    )
}


