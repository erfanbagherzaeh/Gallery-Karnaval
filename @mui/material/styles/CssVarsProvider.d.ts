import * as React from 'react';
import { SupportedColorScheme } from './experimental_extendTheme';
declare const CssVarsProvider: (props: React.PropsWithChildren<Partial<import("@mui/system").CssVarsProviderConfig<SupportedColorScheme>> & {
    theme?: {
        cssVarPrefix?: string | undefined;
        colorSchemes: Record<SupportedColorScheme, Record<string, any>>;
    } | {
        $$material: {
            cssVarPrefix?: string | undefined;
            colorSchemes: Record<SupportedColorScheme, Record<string, any>>;
        };
    } | undefined;
    documentNode?: Document | null | undefined;
    colorSchemeNode?: Element | null | undefined;
    colorSchemeSelector?: string | undefined;
    storageWindow?: Window | null | undefined;
    disableNestedContext?: boolean | undefined;
    disableStyleSheetGeneration?: boolean | undefined;
}>) => React.JSX.Element, useColorScheme: () => import("@mui/system").ColorSchemeContextValue<SupportedColorScheme>;
/**
 * @deprecated Use `InitColorSchemeScript` instead
 * ```diff
 * - import { getInitColorSchemeScript } from '@mui/material/styles';
 * + import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
 *
 * - getInitColorSchemeScript();
 * + <InitColorSchemeScript />;
 * ```
 */
export declare const getInitColorSchemeScript: typeof import("@mui/system/InitColorSchemeScript").default;
export { useColorScheme, CssVarsProvider as Experimental_CssVarsProvider };