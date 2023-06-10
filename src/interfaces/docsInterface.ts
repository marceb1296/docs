import { Signal } from "@preact/signals-react";
import React from "react";

interface ITitle {
    title: string
}


export interface IDocs {
    [key: string]: IDocsContent;
}


export interface IDocsContent {
    id?: string;
    data?: (string | React.ReactNode)[];
    title: string;
}


interface IDocsSideNavContent {
    exclude?: string[]
    title?: string
    to?: string
    childs?: [id:string, title:string][]
}


export interface IDocsSideNav {
    [key: string]: IDocsSideNavContent;
}


export interface IDocsMain extends ITitle {
    content: IDocs
    navSide: IDocsSideNav
}


export interface IDocsAElement extends IDocsSideNavContent {
    menu: Signal<boolean>
}

// context

export interface IDocsContext extends IDocsMain {
    navTop: string
}

export interface IDocsHeaderContext {
    position: string
    menu: Signal<boolean>
}


// tables

type TBody = (string | React.ReactNode);


export interface IDocsTableBody {
    text: TBody
}


export interface IDocsTable {
    header?: string[]
    body: TBody[][]
}


export interface IDocsTableType extends IDocsTable {
    defaultHeaders: React.ReactNode
}

// alerts

export interface IDocsAlerts {
    label: string
    classType: string
    children: React.ReactNode
}