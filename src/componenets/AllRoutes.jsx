import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Blogs } from "../pages/Blogs";
import { Private } from "./Private";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/blogs"
        element={
          <Private>
            <Blogs />
          </Private>
        }
      />
    </Routes>
  );
};
