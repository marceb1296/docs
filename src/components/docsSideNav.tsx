import { useSignal, batch } from "@preact/signals-react";
import "../css/docsSideNav.scss";
import { IDocsAElement } from "../interfaces";
import { useContext, useEffect, useRef } from "react";
import { DocsContext } from "../context";
import { DocsHeaderContext } from "../context";


export const DocsSideNav = () => {

    const Docs = useContext(DocsContext);
    const DocsHeader = useContext(DocsHeaderContext);
    

    return (
        <nav aria-label="side-nav" style={{transform: `translateX(${DocsHeader.position})`}} className="side-nav-doc-container">
            <div className="side-nav-elements">
                {
                    Object.values(Docs.navSide).map(({title, to, childs}, index) => to !== undefined
                        ? <NavAElement key={index} to={to} menu={DocsHeader.menu} title={title} />
                        : <NavAElementWithChilds key={index} menu={DocsHeader.menu} title={title} childs={childs} />
                    )
                }   
            </div>
        </nav>
    )
}

const NavAElement = ({title, menu, to}: IDocsAElement) => {
    return (
        <a href={"#" + to} onClick={() => menu.value = !menu.value}>{title}</a>
    )
}

const NavAElementWithChilds = ({title, childs, menu}: IDocsAElement) => {

    const collapseValues = useSignal({
        initial: 0,
        dinamic: 0
    });
    const collapseHandler = useSignal(false)

    const hanldeList = useRef<HTMLUListElement>(null);


    useEffect(() => {
        const interval = setInterval(() => {
            if (hanldeList.current) {
                collapseValues.value.initial = hanldeList.current.offsetHeight
                hanldeList.current.style.height = "0";
                clearInterval(interval);
            }
        }, 200)
        
        return () => clearInterval(interval);
    }, [])

    const handleClick = () => {

        if (hanldeList.current === null) return

        batch(() => {
            collapseHandler.value = !collapseHandler.value

            if (collapseHandler.value) {
                collapseValues.value.dinamic = collapseValues.value.initial
            } else {
                collapseValues.value.dinamic = 0
            }
        })
        hanldeList.current.style.height = collapseValues.value.dinamic.toString() + "px"
        hanldeList.current.classList.toggle("active")
    }
    
   
    return (
        <div className="collapse-container">
            <div onClick={handleClick} className="collapse-target">
                <a>{title}</a>
                <div className={collapseHandler.value ? "collapse-icon" : "collapse-icon active"}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <ul ref={hanldeList}>
                    { childs !== undefined && 
                        childs.map(([_to, _title], index) => <li key={index}><a href={"#" + _to} onClick={() => menu.value = !menu.value}>{_title}</a></li>)
                    }
                </ul>
            </div>
        </div>
    )
    

}

