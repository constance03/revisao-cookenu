import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";

import axios from "axios";
import { BASE_URL } from "../../constants/url";
import React, { useState } from "react";
import { goToHomePage } from "../../routes/coordinator";
import { goToSignUpPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function LoginPage() {
  // const[email, setEmail] = useState("")
  // const[password, setPassword] = useState("")
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = async () => {
    setIsLoading(true);
    try {
      const body = {
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(`${BASE_URL}/user/login`, body);
      console.log(response.data);
      window.localStorage.setItem("cookenu-token", response.data.token);
      setIsLoading(false);
      goToHomePage(navigate);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
    <Header/>
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Faça login na sua conta</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            e acesse suas melhores receitas ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={onChangeForm}
                value={form.email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                name="password"
                onChange={onChangeForm}
                value={form.password}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Lembrar de mim</Checkbox>
                <Link color={"blue.400"}>Esqueceu sua senha?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={login}
              >
                {isLoading ? <Spinner /> : "Entrar"}
              </Button>
            </Stack>
            <Stack paddingTop={5} paddingBottom={5}>
              <Text color={"gray.600"} textAlign="center">
                Ainda não tem cadastro?{" "}
                <Link
                  onClick={() => {
                    goToSignUpPage(navigate);
                  }}
                >
                  Cadastre-se!
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );

}