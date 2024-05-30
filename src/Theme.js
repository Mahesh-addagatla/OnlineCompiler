import { extendTheme } from "@chakra-ui/react";

const Theme= extendTheme({
    config : {
        initialColorMode:"dark",
        useSystemColorMode:false,
    },
});
export default Theme;