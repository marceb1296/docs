import { Signal } from "@preact/signals-react";
import { IDocsMain } from ".";
export interface IDocsContext extends IDocsMain {
    navTop: string;
    theme: Signal<boolean>;
}
export interface IDocsHeaderContext {
    position: string;
    menu: Signal<boolean>;
    translate: Signal<boolean>;
}
