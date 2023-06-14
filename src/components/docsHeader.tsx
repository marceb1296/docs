import { useContext, useEffect } from "react"
import "../css/docsHeader.scss"
import {
    useSignal,
    useComputed
} from "@preact/signals-react"
import { DocsSideNav } from "./"
import { DocsContext, DocsHeaderContext } from "../context";
import SearchBar from "./docsSearchBar";
import DocsTheme from "./docsTheme";

export const DocsHeader = () => {

    const Docs = useContext(DocsContext);

    const menu = useSignal(false)
    const navsidePosition = useComputed(() => menu.value ? "0" : "100%")

    // detect if device is mobile, if is it, menu will not be displayed
    useEffect(() => {
        const device = window.matchMedia("(min-width: 48em)")
        menu.value = device.matches
    }, [])
    

    return (
        <DocsHeaderContext.Provider value={{position: navsidePosition.value, menu}}>
            <header>
                <nav aria-label="header-nav" style={{top: Docs.navTop}} className="nav-doc-container">
                    <span>
                        {Docs.title}
                    </span>
                    <div className="header-nav">
                        <SearchBar />
                        <DocsTheme />
                        <div onClick={() => menu.value = !menu.value} className={menu.value ? "menu active" : "menu"}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </header>
            <DocsSideNav />
        </DocsHeaderContext.Provider>
    )
}
