import { useComputed, useSignal } from "@preact/signals-react";
import React from "react";
import { useContext } from "react";
import { DocsContext } from "../context";

export const useTextExtractor = () => {

    const result = useSignal<string>("");
    const Docs = useContext(DocsContext);

    const extractTextFromElement = (element: React.ReactNode): string => {
        if (typeof element === 'string') {
          return element;
        } 
        
        if (React.isValidElement(element)) {
    
          let allText: string = "";
          const children = React.Children.toArray(element.props.children);
          const body = React.Children.toArray(element.props.body);
    
          
          allText += children.map(extractTextFromElement).join('');
          allText += body.map(extractTextFromElement).join(' ');

    
          return allText;
        } 
        
        return ""
    }

    const { value: queryValue } = useComputed(() => {
        let _result: Record<string, string>[] = [];
        const { content } = Docs;

        Object.entries(content).forEach(
            ([_, {title, data, id}]) => {

                if (data) {
                    data.forEach(el => {

                        let text: string;
                        if (typeof el === "string") {
                            text = el;
                        } else {
                            text = extractTextFromElement(el);
                            
                        }
                      
                        const regex = new RegExp(`(.{10})(${result.value})(.{100})`);
    
                        const matches = regex.exec(text);
                        if (matches) {
                            let [fullMatch, firstMatch, mainMatch, secondMatch, ...rest] = matches;
                            _result.push({
                                title: title,
                                firstMatch,
                                mainMatch,
                                secondMatch,
                                to: id ?? ""
                            });
                        }
                        
                    });
                }
                
            }
                
        )

        return _result;
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => result.value = e.target.value;
    
    return {
        result,
        queryValue,
        handleChange
    };
}