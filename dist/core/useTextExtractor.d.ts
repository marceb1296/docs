import React from "react";
export declare const useTextExtractor: () => {
    result: import("@preact/signals-core").Signal<string>;
    queryValue: Record<string, string>[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => string;
};
