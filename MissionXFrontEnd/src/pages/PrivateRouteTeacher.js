import { Outlet } from "react-router";
import axios from "axios";
import NeedLogIn from "../components/shared/NeedLogIn";


export default function PrivateRouteTeacher({ isLoggedIn, setisLoggedIn }) {
  const type = sessionStorage.getItem("userType");
  axios
    .post("http://localhost:4000/checklogin", {}, { withCredentials: true })
    .then((res) => {
      console.log(res.data);
      setisLoggedIn(res.data);
    });
  if (!isLoggedIn | (type !== "teacher")) {
    return <NeedLogIn userType="TEACHER" />;
  } else {
    return <Outlet />;
  }
}

