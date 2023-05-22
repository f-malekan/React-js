import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import basket from "../assets/basket.svg";
import ColorModeSwitch from "./ColorModeSwitch";
interface Props{
  basketCount:number;
}

function NavBar({basketCount}:Props) {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="50px" m={2} />
      <ColorModeSwitch />
      <HStack>
        <Image
          src={basket}
          boxSize="50px"
          m={2}
          border="1px"
          borderRadius="10px"
          onClick={() => window.location.reload()}
          _hover={{
              background:'#A9A9A9'
          }}
        ></Image>
        <Box>{basketCount}</Box>
      </HStack>
    </HStack>
  );
}

export default NavBar;
