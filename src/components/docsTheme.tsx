import { useContext } from "react";
import "../css/docsTheme.scss";
import { DocsContext } from "../context";
import { MoonIcon, SunIcon } from "../svg";

const DocsTheme = () => {

    const { theme } = useContext(DocsContext);

    const handleClick = () => {
        theme.value = !theme.value
    }
    return (
        <div onClick={handleClick} className="theme-icon">
            { theme.value
                ? <SunIcon />
                : <MoonIcon />
            }
        </div>
    );
}
 
export default DocsTheme;
