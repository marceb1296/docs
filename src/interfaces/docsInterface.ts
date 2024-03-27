import { Signal } from "@preact/signals-react";
import React from "react";

interface ITitle {
	title: string;
}

export interface IDocs {
	[key: string]: IDocsContent;
}

export interface IDocsContent {
	id?: string;
	data?: (string | React.ReactNode)[];
	title: string;
	childs?: string[];
}

interface IDocsSideNavContent {
	exclude?: string[];
	title?: string;
	to?: string;
	childs?: [id: string, title: string][];
}

export interface IDocsSideNav {
	[key: string]: IDocsSideNavContent;
}

export interface IDocsMain extends ITitle {
	content: IDocs;
	navSide: IDocsSideNav;
}

export interface IDocsAElement extends IDocsSideNavContent {
	menu: Signal<boolean>;
}
