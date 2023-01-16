import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/chakraTheme";

type Props = {
  children: React.ReactNode;
};

const AppProvider = (props: Props) => {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
};

export default AppProvider;
