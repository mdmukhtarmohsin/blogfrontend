import { HStack, Link } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <>
      <HStack h="60px" bgColor="#10898d" justify="center" spacing="24px">
        <Link color="white" href="/signup">
          Sign-Up
        </Link>
        <Link color="white" href="/">
          Sign-In
        </Link>
        <Link color="white" href="/blogs">
          Blogs
        </Link>
      </HStack>
    </>
  );
};
