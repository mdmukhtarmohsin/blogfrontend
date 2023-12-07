import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../redux/actionFunc";
import { useNavigate } from "react-router-dom";

export const Blogs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogs = useSelector((store) => {
    return store.blogs;
  });
  const token = useSelector((store) => {
    return store.token;
  });
  useEffect(() => {
    getBlogs(dispatch, token);
  });
  return <div>Blogs</div>;
};
