declare const useTheme: () => {
    prefersBlackTheme: import("@preact/signals-core").Signal<boolean>;
};
export default useTheme;
