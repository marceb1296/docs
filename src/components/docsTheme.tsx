import { useContext } from "react";
import "../css/docsTheme.scss";
import moon_icon from "/moon_icon.svg";
import sun_icon from "/sun_icon.svg";
import { DocsContext } from "../context";

const DocsTheme = () => {

    const { theme } = useContext(DocsContext);

    const handleClick = () => {
        console.log(theme)
        theme.value = !theme.value
        console.log(theme)
    }
    return (
        <>
            <img className="theme-icon" onClick={handleClick} width={15} src={theme.value ? sun_icon : moon_icon} alt="theme icon" />
        </>
    );
}
 
export default DocsTheme;
