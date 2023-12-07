import { Box, Text, Input, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <Box w="100vw">
        <VStack justify="center" align="center" w="40%" spacing="24px" m="auto">
          <Text fontSize="4xl">Sign In</Text>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="Password"
            type="password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <Button>Sign In</Button>
        </VStack>
      </Box>
    </>
  );
};
