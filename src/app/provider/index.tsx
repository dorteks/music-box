import theme from "../theme/chakraTheme";
import { ChakraProvider } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  pageProps: any;
};

const AppProvider = (props: Props) => {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
};

export default AppProvider;
