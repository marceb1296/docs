import { useSignal } from '@preact/signals-react';
import { useEffect } from 'react';

const useTheme = () => {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
        .matches;

    const prefersBlackTheme = useSignal(prefersDark);

    useEffect(() => {

        document.body.style.transition = "all .2s ease-in-out"
        if (prefersBlackTheme.value) {
          document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        
    }, [prefersBlackTheme.value]);

    return {
        prefersBlackTheme
    };
};

export default useTheme;
