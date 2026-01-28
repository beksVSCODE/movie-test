import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            dark: string;
            darkGray: string;
            gray: string;
            lightGray: string;
            white: string;
            text: {
                primary: string;
                secondary: string;
                dark: string;
            };
            rating: string;
            error: string;
            success: string;
        };

        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };

        borderRadius: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };

        shadows: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };

        transitions: {
            fast: string;
            normal: string;
            slow: string;
        };

        breakpoints: {
            mobile: string;
            tablet: string;
            desktop: string;
            wide: string;
        };

        fontSizes: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            xxxl: string;
        };

        fontWeights: {
            light: number;
            regular: number;
            medium: number;
            semibold: number;
            bold: number;
        };
    }
}
