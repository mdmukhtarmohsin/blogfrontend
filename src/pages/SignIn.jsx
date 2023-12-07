import { Box, Text, Input, Button, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../redux/actionFunc";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => {
    return store.isAuth;
  });

  useEffect(() => {
    if (isAuth) {
      navigate("/blogs");
    }
  }, [isAuth, navigate]);
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
          <Button
            onClick={() => {
              signin(dispatch, { email, password: pass });
            }}
          >
            Sign In
          </Button>
        </VStack>
      </Box>
    </>
  );
};
