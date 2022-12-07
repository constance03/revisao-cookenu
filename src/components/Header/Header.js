import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("cookenu-token");
    goToLoginPage(navigate);
  };

  return (
    <Flex
      bg={"gray.200"}
      justifyContent={"end"}
      alignItems={"center"}
      h={20}
      paddingRight={8}
      paddingLeft={8}
    >
      <Button colorScheme={"red"} color={"white"} onClick={logout}>
        Deslogar
      </Button>
    </Flex>
  );
};

export default Header;
