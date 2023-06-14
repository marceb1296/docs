import { Signal } from "@preact/signals-react";

export interface IDocsSearchBar {
    query: Record<string, string>[]
    result: Signal<string>
}