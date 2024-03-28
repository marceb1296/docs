import { useContext, useEffect } from "react";
import "../css/docsHeader.scss";
import { useSignal, useComputed } from "@preact/signals-react";
import { DocsSideNav } from "./";
import { DocsContext, DocsHeaderContext } from "../context";
import SearchBar from "./docsSearchBar";
import DocsTheme from "./docsTheme";

export const DocsHeader = () => {
	const Docs = useContext(DocsContext);

	const menu = useSignal(false);
	const navSidePosition = useComputed(() => (menu.value ? "0" : "100%"));
	const translate = useSignal(false);

	// // detect if device is mobile, if is it, menu will not be displayed
	useEffect(() => {
		const device = window.matchMedia("(min-width: 1540px)");

		menu.value = device.matches;
		translate.value = device.matches;
	}, []);

	return (
		<DocsHeaderContext.Provider
			value={{ position: navSidePosition.value, menu, translate }}>
			<header>
				<nav
					aria-label="header-nav"
					style={{ top: Docs.navTop }}
					className="nav-doc-container">
					<span
						style={{
							fontSize: "clamp(.8rem, 2vw, 1rem)",
						}}>
						{Docs.title}
					</span>
					<div className="header-nav">
						<SearchBar />
						<DocsTheme />
						<div
							onClick={() => (menu.value = !menu.value)}
							className={menu.value ? "menu active" : "menu"}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</nav>
			</header>
			<DocsSideNav />
		</DocsHeaderContext.Provider>
	);
};
