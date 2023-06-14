import { Suspense, useContext, useDeferredValue } from "react";
import "../css/docsSearchBar.scss";
import { IDocsSearchBar } from "../interfaces";
import { useTextExtractor } from "../core";
import { DocsHeaderContext } from "../context";
import search_icon from "/search_icon.svg";

const SearchBar = () => {

    const {
        result,
        queryValue,
        handleChange
    } = useTextExtractor();
    

    const defferedResult = useDeferredValue(queryValue)

    return ( 
        <div className="search-bar">
            <img className="search-icon" src={search_icon} alt="icon search" />
            <input onChange={handleChange} value={result.value} type="text"/>
            
            { result.value && 
                <div className="search-result">
                    <Suspense fallback={<h2>Loading...</h2>} >
                        <SearchResult query={defferedResult} result={result}/>
                    </Suspense>
                </div>
            }
        </div>
    );
}
 
export default SearchBar;


const SearchResult = ({ query, result }: IDocsSearchBar) => {

    const { menu } = useContext(DocsHeaderContext);

    const handleClick = () => {
        result.value = "";
        if (menu.value) menu.value = !menu.value;
    }

    return(
        <>
            { query.length > 0
                ?
                    query.map(
                        ({title, to, firstMatch, mainMatch, secondMatch}, index: number) => <div key={index}>
                            <h3>{title}</h3>
                            <a href={"#" + to} onClick={handleClick}>
                                ...{firstMatch}
                                <span className="search-keywoard">{mainMatch}</span>
                                {secondMatch}
                            </a>
                        </div>
                    )
                :
                    <h5>Sorry, we cant find any match...</h5>
            }
        </>
    )
}