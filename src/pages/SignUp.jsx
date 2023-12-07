import { Box, Text, Input, Button, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { signup } from "../redux/actionFunc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setusername] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupdone = useSelector((store) => {
    return store.isAuth;
  });
  useEffect(() => {
    if (signupdone) {
      navigate("/");
    }
  }, [signupdone, navigate]);

  return (
    <>
      <Box w="100vw">
        <VStack justify="center" align="center" w="40%" spacing="24px" m="auto">
          <Text fontSize="4xl">Sign Up</Text>
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <Input
            placeholder="Avatar"
            value={avatar}
            onChange={(e) => {
              setAvatar(e.target.value);
            }}
          />
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
            onClick={() =>
              signup(dispatch, { username, email, password: pass, avatar })
            }
          >
            Sign Up
          </Button>
        </VStack>
      </Box>
    </>
  );
};
