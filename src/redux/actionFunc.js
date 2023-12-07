import axios from "axios";

const url = `https://blogbackend-production-65bb.up.railway.app/api`;

export function signup(dispatch, data) {
  axios
    .post(url + "/register", data)
    .then((res) => {
      if (res.data.ok) {
        alert("Sign-Up Succesfull");
        dispatch({ type: "SIGN_UP_SUCCESS", payload: res.data.msg });
      } else {
        alert("failed");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function signin(dispatch, data) {
  axios
    .post(url + "/login", data)
    .then((res) => {
      if (res.data.ok) {
        alert("Sign-in Succesfull");
        dispatch({ type: "SIGN_IN_SUCCESS", payload: res.data });
      } else {
        alert("failed");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getBlogs(dispatch, token) {
  axios
    .get(
      url + "/blogs",
      { key: "value" },
      { headers: { Authorization: "Bearer" + " " + token } }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
